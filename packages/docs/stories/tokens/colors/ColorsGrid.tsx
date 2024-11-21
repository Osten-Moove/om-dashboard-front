import React from "react";
import { Colors, Fonts } from "@om-dashboard/front-end/dist";

import { getContrast } from "polished";

export function ColorsGrid() {
  return Object.entries(Colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: Fonts.default,
            color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
