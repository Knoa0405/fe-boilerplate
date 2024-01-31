import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    brand: null,
  },
  font: {
    body: null,
  },
});

createGlobalTheme(":root", vars, {
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});
