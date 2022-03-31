import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { obtainObj, createGraphData } from "../helpers/helperFunctions";
import { basicLP } from "../helpers/basic-lp";
import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
  ChartLegendTooltip,
  createContainer,
} from "@patternfly/react-charts";

export default function Graph30(props) {
  const [initialWeight, setInitialWeight] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [actual, setActual] = useState([]);
  const [id] = useOutletContext();
  const selectedProgram = programs.find((x) => x.id === Number(id));
  const selectedProgramName = selectedProgram ? selectedProgram.name : "";
  const selectedActual = actual.filter( x => x.program_name === selectedProgramName)
  const programInitWeightObj = initialWeight.find(
    (x) => x.program_name === selectedProgramName
  );
  const programInitWeight = programInitWeightObj
    ? programInitWeightObj.weights
    : "";
  const trackWO = obtainObj(selectedActual);

  useEffect(() => {
    axios
      .get("/initial_weights")
      .then((res) => {
        setInitialWeight(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/programs")
      .then((res) => {
        setPrograms(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("/actual_workouts")
      .then((res) => {
        setActual(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const results =
    trackWO && programInitWeight && actual
      ? createGraphData(basicLP, trackWO, programInitWeight, selectedActual.length)
      : "";

  const listItems = [];

  for (const result in results) {
    listItems.push(
      <ChartLine
        data={
          results[result].length >= 12
            ? results[result].slice(-12)
            : results[result]
        }
        name={result}
      />
    );
  }

  class BottomAlignedLegend extends React.Component {
    render() {
      // Note: Container order is important
      const CursorVoronoiContainer = createContainer("voronoi", "cursor");
      const legendData = [
        { childName: "Deadlift", name: "Deadlift" },
        { childName: "Bench Press", name: "Bench Press" },
        { childName: "Squat", name: "Squat" },
        { childName: "Overhead Press", name: "OH Press" },
        { childName: "Chin Up", name: "Chin Up" },
      ];

      return (
        <div style={{ height: "380px", width: "430px" }}>
          <Chart
            ariaDesc="weightlift progress"
            ariaTitle="workout progress"
            containerComponent={
              <CursorVoronoiContainer
                cursorDimension="x"
                labels={({ datum }) => `${datum.y} lb`}
                labelComponent={
                  <ChartLegendTooltip
                    legendData={legendData}
                    title={(datum) => `Day ${datum.x}`}
                  />
                }
                mouseFollowTooltips
                voronoiDimension="x"
                voronoiPadding={20}
              />
            }
            legendData={legendData}
            legendPosition="bottom"
            height={400}
            maxDomain={{ y: 400 }}
            minDomain={{ y: 150 }}
            padding={{
              bottom: 50, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 30,
            }}
            themeColor={ChartThemeColor.multi}
            width={500}
          >
            <ChartAxis />
            <ChartAxis
              dependentAxis
              // showGrid
              tickValues={[150, 200, 250, 300, 350, 400]}
            />
            <ChartGroup>{listItems}</ChartGroup>
          </Chart>
        </div>
      );
    }
  }

  const NewGraph = BottomAlignedLegend;

  return <NewGraph />;
}
