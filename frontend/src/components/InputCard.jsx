import React from "react";
import { COLORS, baseStyles } from "../constants/styles";
import { MESSAGES } from "../constants/config";

const InputCard = ({ text, setText, loading, onAnalyze }) => {
  const handleMouseEnter = (e) => {
    if (!loading) {
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow = "0 8px 24px rgba(255, 128, 0, 0.4)";
    }
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 4px 16px rgba(255, 128, 0, 0.3)";
  };

  return (
    <div style={baseStyles.card}>
      <h2
        style={{
          color: COLORS.PRIMARY,
          fontSize: "20px",
          marginTop: 0,
          marginBottom: "24px",
          fontWeight: "600",
          textAlign: "left",
        }}
      >
        Enter Text
      </h2>

      <textarea
        rows="8"
        style={baseStyles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here for analysis..."
        onFocus={(e) => (e.target.style.borderColor = COLORS.PRIMARY)}
        onBlur={(e) => (e.target.style.borderColor = COLORS.BORDER_LIGHT)}
      />

      <button
        onClick={onAnalyze}
        disabled={loading}
        style={{
          width: "100%",
          marginTop: "24px",
          padding: "16px 48px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: loading ? "not-allowed" : "pointer",
          background: loading
            ? "rgba(255, 128, 0, 0.5)"
            : COLORS.PRIMARY,
          color: COLORS.DARK_BG,
          border: "none",
          borderRadius: "12px",
          transition: "all 0.3s ease",
          boxShadow: loading ? "none" : "0 4px 16px rgba(255, 128, 0, 0.3)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {loading ? MESSAGES.ANALYZING : MESSAGES.ANALYZE}
      </button>
    </div>
  );
};

export default InputCard;
