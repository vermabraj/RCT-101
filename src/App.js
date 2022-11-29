import "./styles.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./Contexts/ThemeContextProvider";
export default function App() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "grey" : "white",
        color: theme === "dark" ? "white" : "black"
      }}
      className="App"
    >
      <Navbar />
      <h1>Theme : {theme} </h1>
      <button
        style={{
          backgroundColor: theme === "dark" ? "grey" : "white",
          color: theme === "dark" ? "white" : "black"
        }}
        onClick={toggleTheme}
      >
        Change Theme
      </button>
    </div>
  );
}
