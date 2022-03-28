import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
  ChartLegendTooltip,
  createContainer,
} from "@patternfly/react-charts";
import Button from "../components/Button";
import "../styles/CurrentProgram.scss";
import axios from "axios";
import formatDate from "../helpers/formatDay";

export default function CurrentProgram() {
  const [programs, setPrograms] = useState([]);
  const [plannedWorkouts, setPlannedWorkouts] = useState([]);
  const [selected, setSelected] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get("/programs").then((res) => {
      setPrograms(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/planned_workouts").then((res) => {
      setPlannedWorkouts(res.data);
    });
  }, []);

  const selectedProgram = programs.find((x) => x.id === Number(id));
  const uniqueDays = [];

  plannedWorkouts.forEach((x) => {
    if (!uniqueDays.includes(x.day)) {
      uniqueDays.push(x.day);
    }
  });

  const selectList = uniqueDays.map((x) => {
    return <option value={x}>{formatDate(x)}</option>;
  });


  class BottomAlignedLegend extends React.Component {
    render() {
      // Note: Container order is important
      const CursorVoronoiContainer = createContainer("voronoi", "cursor");
      const legendData = [
        { childName: "deadlift", name: "DL" },
        { childName: "bench", name: "Bench" },
        { childName: "squat", name: "Squat" },
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
            height={500}
            maxDomain={{ y: 350 }}
            minDomain={{ y: 50 }}
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
              tickValues={[100, 125, 150, 175, 200, 225, 250, 275, 300]}
            />
            <ChartGroup>
              <ChartLine
                data={[
                  { x: "2015", y: 200 },
                  { x: "2016", y: 215 },
                  { x: "2017", y: 230 },
                  { x: "2018", y: 200 },
                  { x: "2019", y: 215 },
                  { x: "2020", y: 230 },
                  { x: "2021", y: 200 },
                  { x: "2022", y: 215 },
                  { x: "2023", y: 230 },
                ]}
                name="deadlift"
              />
              <ChartLine
                data={[
                  { x: "2015", y: 180 },
                  { x: "2016", y: 215 },
                  { x: "2017", y: 230 },
                  { x: "2018", y: 100 },
                  { x: "2019", y: 215 },
                  { x: "2020", y: 230 },
                  { x: "2021", y: 250 },
                  { x: "2022", y: 215 },
                  { x: "2023", y: 230 },
                ]}
                name="bench"
              />
              <ChartLine
                data={[
                  { x: "2015", y: 200 },
                  { x: "2016", y: 225 },
                  { x: "2017", y: 230 },
                  { x: "2018", y: 230 },
                  { x: "2019", y: 215 },
                  { x: "2020", y: 230 },
                  { x: "2021", y: 180 },
                  { x: "2022", y: 215 },
                  { x: "2023", y: 200 },
                ]}
                name="squat"
              />
            </ChartGroup>
          </Chart>
        </div>
      );
    }
  }

  const NewGraph = BottomAlignedLegend;

  return (
    <div>
      <br/>
      <div className="current-program">
        <div>
          <Button word="All Programs" path="/programs/all" />
        </div>
        <div id="current-select">
          <div className="select is-medium-small input-bottom">
            <select
              name="workout_list"
              value={selected}
              onChange={(x) => {
                setSelected(x.target.value);
              }}
            >
              <option>Continue Workout</option>
              {selectList}
            </select>
          </div>
          <div>
            <button className="button is-light">
              <Link to={`/programs/${id}/${selected}`}> Confirm </Link>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="subtitle is-5">
        Current Program -
        <br />
        <div className="title is-4">
          {selectedProgram ? selectedProgram.name : ""}
        </div>
      </div>
      <br />
      <progress
        className="progress is-info is-small"
        value="40"
        max="100"
      ></progress>
      <NewGraph />
      <button className="button">Last 14 Days</button>
      <button className="button">Last 30 Days</button>
      <button className="button">From Start</button>
      <br />
      <br />
      <br />
    </div>
  );
}
