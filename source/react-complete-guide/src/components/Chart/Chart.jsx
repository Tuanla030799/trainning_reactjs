import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map(
    (dataPoints) => dataPoints.value
  );
  const totalMaximun = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximun}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
