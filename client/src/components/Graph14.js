import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
  ChartLegendTooltip,
  createContainer,
} from "@patternfly/react-charts";

export default function Graph14(props) {
  const [init, setInit] = useState([]);

  useEffect(() => {
    axios
      .get("/initial_weights")
      .then((res) => {
        setInit(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const filteredInit = init.filter( x => 
  // )

  console.log('init:', init)

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
        <div style={{ height: "355px", width: "350px" }}>
          <Chart
            ariaDesc="weightlift progress"
            ariaTitle="workout progress"
            containerComponent={
              <CursorVoronoiContainer
                cursorDimension="x"
                labels={({ datum }) => `${datum.y}`}
                labelComponent={
                  <ChartLegendTooltip
                    legendData={legendData}
                    title={(datum) => datum.x}
                  />
                }
                mouseFollowTooltips
                voronoiDimension="x"
                voronoiPadding={50}
              />
            }
            legendData={legendData}
            legendPosition="bottom"
            height={400}
            maxDomain={{ y: 300 }}
            minDomain={{ y: 75 }}
            padding={{
              bottom: 50, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 10,
            }}
            themeColor={ChartThemeColor.green}
            width={550}
          >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis
              dependentAxis
              showGrid
              tickValues={[0, 100, 125, 150, 175, 200, 225, 250, 275, 300]}
            />
            <ChartGroup>
              <ChartLine
                data={[
                  { x: "2015", y: 200 },
                  { x: "2016", y: 215 },
                  { x: "2017", y: 230 },

                ]}
                name="Deadlift"
              />
              <ChartLine
                data={[
                  { x: "2015", y: 180 },
                  { x: "2016", y: 215 },
                  { x: "2017", y: 230 },
                ]}
                name="Bench Press"
              />
              <ChartLine
                data={[
                  { x: "2015", y: 200 },
                  { x: "2016", y: 225 },
                  { x: "2017", y: 230 },
                  { x: "2018", y: 230 },

                ]}
                name="Squat"
              />
              <ChartLine
                data={[

                  { x: "2018", y: 230 },
                  { x: "2019", y: 215 },
                  { x: "2020", y: 230 },
                  { x: "2021", y: 180 },
                  { x: "2022", y: 215 },
                  { x: "2023", y: 200 },
                ]}
                name="Overhead Press"
              />
              <ChartLine
                data={[
                  { x: "2015", y: 200 },
                  { x: "2020", y: 230 },
                  { x: "2021", y: 180 },
                  { x: "2022", y: 215 },
                  { x: "2023", y: 200 },
                ]}
                name="Chin Up"
              />
            </ChartGroup>
          </Chart>
        </div>
      );
    }
  }

  const NewGraph = BottomAlignedLegend;

  return <NewGraph />;
}
