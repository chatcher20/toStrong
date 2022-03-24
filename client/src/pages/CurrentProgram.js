import React from "react";
import { Link } from "react-router-dom";
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

export default function CurrentProgram() {
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
        <div style={{ height: "405px", width: "350px" }}>
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
      <div className='current-program'>
        <div>
        <strong>Current Program</strong>
        <Link to="/programs/all"> All Programs </Link>
        </div>
        <Button word="Continue" path="/programs/:id/:workout_id" />
      </div>

      
      <br />
      <div className="table-container">
        <label> Program name</label>
        <ul>
          <li>
            <Link to="/programs/:id/:workout_id"> W1D1</Link>
            Workout 1, Push
          </li>
          <li>
            <Link to="/programs/:id/:workout_id"> W1D2</Link>
            Workout 2, Pull
          </li>
          <li>
            <Link to="/programs/:id/:workout_id"> W1D3</Link>
            Workout 3, Push
          </li>
          <li>
            <Link to="/programs/:id/:workout_id"> W1D4</Link>
            Workout 4, Pull
          </li>
        </ul>
        <br/>
        <progress class="progress is-info is-small" value="15" max="100">15%</progress>
      </div>
      <NewGraph />
      <button className='button'>Last 14 Days</button>
  <button className='button'>Last 30 Days</button>
  <button className='button'>From Start</button>
  <br/>
  <br/>
  <br/>
    </div>
  );
}
