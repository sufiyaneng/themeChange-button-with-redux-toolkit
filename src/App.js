import React from "react";
import { useSelector } from "react-redux";
import ThemeButton from "./ThemeButton";

import "./app.scss";

const App = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`app ${currentTheme}`}>
      <h1>My App</h1>
      <ThemeButton />
      {/* Other components and content */}
    </div>
  );
};

export default App;
