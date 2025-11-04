import React from "react";
import { COLORS } from "../constants/styles";

const ResultRow = ({ label, value }) => {
  return (
    <div
      style={{
        padding: "16px",
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
        border: `1px solid ${COLORS.BORDER_LIGHTER}`,
      }}
    >
      <p
        style={{
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "13px",
          marginBottom: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          fontWeight: "500",
          margin: "0 0 6px 0",
        }}
      >
        {label}
      </p>
      <p
        style={{
          color: COLORS.WHITE,
          fontSize: "16px",
          margin: 0,
          fontWeight: "500",
          wordBreak: "break-word",
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default ResultRow;
