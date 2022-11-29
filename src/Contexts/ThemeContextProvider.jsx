import React from "react";

export const ThemeContext = React.createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
