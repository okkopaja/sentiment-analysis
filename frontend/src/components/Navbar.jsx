import React from "react";
import { baseStyles } from "../constants/styles";  // ← Remove COLORS

const Navbar = () => {
  const handleMouseEnterSecondary = (e) => {
    e.target.style.background = "rgba(255, 128, 0, 0.1)";
  };

  const handleMouseLeaveSecondary = (e) => {
    e.target.style.background = "transparent";
  };

  const handleMouseEnterPrimary = (e) => {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 8px 20px rgba(255, 128, 0, 0.3)";
  };

  const handleMouseLeavePrimary = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "none";
  };

  return (
    <nav style={baseStyles.navbar}>
      <div style={baseStyles.logo}>SentiFlow</div>

      <div style={{ display: "flex", gap: "15px" }}>
        <button
          style={baseStyles.button.secondary}
          onMouseEnter={handleMouseEnterSecondary}
          onMouseLeave={handleMouseLeaveSecondary}
        >
          Sign In
        </button>

        <button
          style={baseStyles.button.primary}
          onMouseEnter={handleMouseEnterPrimary}
          onMouseLeave={handleMouseLeavePrimary}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
