import { useContext, createContext, useState } from "react";
export const themeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState("light-mode");
      const themeChangeHandler = () => {
            if (theme === "light-mode") {
                  setTheme("");
            } else {
                  setTheme("light-mode");
            }
      };
      return (
            <themeContext.Provider value={{ theme, themeChangeHandler }}>
                  {children}
            </themeContext.Provider>
      );
};
