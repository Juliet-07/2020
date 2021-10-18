/*
 * lib: ThemeProvider
 * author: Favour George
 * Date: April 9, 2020
 * Provide default (select) theme for the application
 */

import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "../../lib/customHooks/useDarkMode";
import { GlobalStylesNormalizr } from "./globals.styled";
import ToggleTheme from "../../components/Toggler";

export default ({ children }) => {
  const [theme, toggleTheme, hasMounted] = useDarkMode();
  const selectTheme = theme === "light" ? lightTheme : darkTheme;

  const body = (
    <ThemeProvider theme={lightTheme}>
      <GlobalStylesNormalizr />
      {/*<ToggleTheme theme={theme} toggleTheme={toggleTheme} />*/}
      {children}
    </ThemeProvider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!hasMounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};
