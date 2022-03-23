import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartVoronoiContainer,
  ChartThemeColor,
} from "@patternfly/react-charts";
import rankBadge from "../images/badges/20.png";

const BasicWithRightAlignedLegend = () => {
  return (
    <div style={{ height: "250px", width: "400px" }}>
      <Chart
        ariaDesc="Program Progress"
        ariaTitle="User progress"
        containerComponent={
          <ChartVoronoiContainer
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
            constrainToVisibleArea
          />
        }
        legendData={[
          { name: "Bench Press" },
          { name: "Deadlift" },
          { name: "Squat" },
        ]}
        legendOrientation="horizontal"
        legendPosition="bottom"
        height={450}
        maxDomain={{ y: 200 }}
        minDomain={{ y: 100 }}
        padding={{
          bottom: 70,
          left: 50,
          right: 50, 
          top: 50,
        }}
        themeColor={ChartThemeColor.multi}
        width={600}
      >
        <ChartAxis tickValues={[2, 3, 4]} />
        <ChartAxis dependentAxis showGrid tickValues={[125, 150, 175, 200]} />
        <ChartGroup>
          <ChartLine
            data={[
              { name: "Bench Press", x: "w1d1", y: 100 },
              { name: "Bench Press", x: "w1d2", y: 110 },
              { name: "Bench Press", x: "w1d3", y: 115 },
              { name: "Bench Press", x: "w1d4", y: 125 },
            ]}
          />
          <ChartLine
            data={[
              { name: "Deadlift", x: "w1d1", y: 150 },
              { name: "Deadlift", x: "w1d2", y: 155 },
              { name: "Deadlift", x: "w1d3", y: 160 },
              { name: "Deadlift", x: "w1d4", y: 160 },
            ]}
          />
          <ChartLine
            data={[
              { name: "Squat", x: "w1d1", y: 175 },
              { name: "Squat", x: "w1d2", y: 185 },
              { name: "Squat", x: "w1d3", y: 190 },
              { name: "Squat", x: "w1d4", y: 195 },
            ]}
          />
        </ChartGroup>
      </Chart>
    </div>
  );
};

export default function Profile() {
  const { id } = useParams();
  return (
    <div>
      Welcome back, {id}
      <div className="badge">
        badge:
        <img src={rankBadge} />
        <button className='button'>
          setting
        </button>
      </div>
      <br />
      Active program: 12 weeks hypotrophy
      <Link to="/programs/:id"> Resume </Link>
      <br />
      Program progress -
      <BasicWithRightAlignedLegend />
    </div>
  );
}
