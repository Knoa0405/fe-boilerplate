"use client";

import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  fontFamily: "serif",
  primaryColor: "cyan",
});

export const vars = themeToVars(theme);