import { COLORS } from "./config";

export const baseStyles = {
  container: {
    minHeight: "100vh",
    background: `linear-gradient(135deg, ${COLORS.DARK_BG} 0%, ${COLORS.DARK_BG_LIGHT} 100%)`,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${COLORS.BORDER_LIGHTER}`,
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: COLORS.PRIMARY,
    letterSpacing: "1px",
  },

  card: {
    flex: "1 1 450px",
    background: "rgba(255, 255, 255, 0.03)",
    border: `1px solid ${COLORS.BORDER_ORANGE}`,
    borderRadius: "16px",
    padding: "40px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    minWidth: "350px",
  },

  button: {
    primary: {
      padding: "10px 24px",
      fontSize: "15px",
      background: COLORS.PRIMARY,
      color: COLORS.DARK_BG,
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    secondary: {
      padding: "10px 24px",
      fontSize: "15px",
      background: "transparent",
      color: COLORS.WHITE,
      border: `1px solid ${COLORS.PRIMARY}`,
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "500",
      transition: "all 0.3s ease",
    },
  },

  textarea: {
    width: "100%",
    padding: "20px",
    fontSize: "16px",
    background: "rgba(0, 0, 0, 0.5)",
    color: COLORS.WHITE,
    border: `1px solid ${COLORS.BORDER_LIGHT}`,
    borderRadius: "12px",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
    transition: "border-color 0.3s ease",
    textAlign: "center",
    boxSizing: "border-box",
  },
};

export { COLORS };
