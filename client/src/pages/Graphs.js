import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor,
  ChartLegendTooltip,
  ChartVoronoiContainer,
  createContainer,
} from "@patternfly/react-charts";
import React from "react";

export default function Graphs() {

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
            height={600}
            maxDomain={{ y: 350 }}
            minDomain={{ y: 50 }}
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50,
              top: 50,
            }}
            themeColor={ChartThemeColor.green}
            width={550}
          >
            <ChartAxis tickValues={[2, 3, 4]} />
            <ChartAxis dependentAxis showGrid tickValues={[100, 125, 150, 175, 200, 225, 250, 275, 300]} />
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

  const NewGraph = BottomAlignedLegend

  return <div>
    Progress Graphs
  <NewGraph />
  <button className='button'>Last 14 Days</button>
  <button className='button'>Last 30 Days</button>
  <button className='button'>From Start</button>
  </div>;
}
