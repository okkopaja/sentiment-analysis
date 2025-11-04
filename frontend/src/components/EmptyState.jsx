import React from "react";
import { COLORS, baseStyles } from "../constants/styles";
import { MESSAGES } from "../constants/config";

const EmptyState = () => {
  return (
    <div
      style={{
        ...baseStyles.card,
        background: "rgba(255, 128, 0, 0.03)",
        border: `2px dashed ${COLORS.BORDER_LIGHTER}`,
      }}
    >
      <p
        style={{
          color: COLORS.TEXT_MUTED_LIGHT,
          fontSize: "16px",
          margin: "60px 0",
        }}
      >
        {MESSAGES.EMPTY_STATE}
      </p>
    </div>
  );
};

export default EmptyState;
