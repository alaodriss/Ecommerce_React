import React from "react";
import { handleFormatTick } from "../Utils/formattedDatas";
import {
  AreaChart,
  Area,
  XAxis,
  Rectangle,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../Style/Components/Sessions.scss";

function Sessions(props) {
  function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <div className="tooltip-session">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  }

  function CustomizedCursor({ points, width }) {
    const X = points[0].x;
    const Y = points[0].y;
    return (
      <Rectangle
        width={width + 20}
        height={300}
        x={X}
        y={Y - 70}
        style={{ background: "red", opacity: 0.1 }}
      />
    );
  }

  return (
    <div className="div-session">
      <p className="p-session">
        Durée moyenne <br /> des sessions
      </p>
      <div style={{ width: 258, height: 263, background: "#FF0000" }}>
        <ResponsiveContainer>
          <AreaChart
            data={props.dataAv}
            margin={{
              top: 80,
              right: 30,
              left: 0,
              bottom: 10,
            }}
          >
            <XAxis
              dataKey="day"
              stroke="rgba(255, 255, 255, 0.6)"
              axisLine={false}
              dy={10}
              tickFormatter={handleFormatTick}
              tickLine={false}
              tick={{
                fontSize: 12,
                fontWeight: 500,
              }}
              padding={{ left: 15, right: 1 }}
            />
            <Area
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFF"
              fill="#FF0000"
              dot={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={<CustomizedCursor />}
              wrapperStyle={{ outline: "none" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default Sessions;
