export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:8001",
  ENDPOINTS: {
    ANALYZE: "/api/analyze_review/",
  },
};

export const COLORS = {
  PRIMARY: "#FF8000",
  SECONDARY: "#FFA500",
  DARK_BG: "#000000",
  DARK_BG_LIGHT: "#1a1a1a",
  WHITE: "#ffffff",
  ERROR: "#ff6b6b",
  TEXT_MUTED: "rgba(255, 255, 255, 0.7)",
  TEXT_MUTED_LIGHT: "rgba(255, 255, 255, 0.3)",
  BORDER_LIGHT: "rgba(255, 128, 0, 0.3)",
  BORDER_LIGHTER: "rgba(255, 128, 0, 0.1)",
  BORDER_ORANGE: "rgba(255, 128, 0, 0.2)",
};

export const MESSAGES = {
  EMPTY_STATE: "Results will appear here after analysis",
  ERROR_BACKEND: "Cannot connect to Django backend.",
  ANALYZING: "Analyzing...",
  ANALYZE: "Analyze Text",
};
