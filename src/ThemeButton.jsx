import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  console.log("current", currentTheme);
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleThemeToggle}>
      {currentTheme === "light"
        ? "Switch to Dark Theme"
        : "Switch to Light Theme"}
    </button>
  );
};

export default ThemeButton;
