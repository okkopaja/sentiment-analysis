import React from "react";
import { COLORS, baseStyles } from "../constants/styles";
import ResultRow from "./ResultRow";

const ResultCard = ({ result }) => {
  return (
    <div
      style={{
        ...baseStyles.card,
        background: "rgba(255, 128, 0, 0.05)",
        border: `1px solid ${COLORS.BORDER_ORANGE}`,
        maxHeight: "600px",
        overflowY: "auto",
      }}
    >
      <h3
        style={{
          color: COLORS.PRIMARY,
          fontSize: "24px",
          marginTop: 0,
          marginBottom: "24px",
          fontWeight: "600",
        }}
      >
        Analysis Results
      </h3>

      <div style={{ display: "grid", gap: "20px" }}>
        <ResultRow label="Language" value={result.language} />
        <ResultRow label="Translated Text" value={result.translated} />
        <ResultRow label="Sentiment" value={result.sentiment} />
        <ResultRow label="Confidence Score" value={result.confidence} />
      </div>
    </div>
  );
};

export default ResultCard;
