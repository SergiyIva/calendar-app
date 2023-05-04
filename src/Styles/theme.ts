import { ITheme } from "../interfaces/styled";
import { DefaultTheme } from "styled-components";

const themeInit: ITheme = {
  colors: {
    red: "hsl(0,100%,60%)",
    field: "hsl(237,100%,96%)",
    selected: "hsl(237,100%,85%)",
    grey70: "hsl(0,0%,70%)",
    grey90: "hsl(0,0%,90%)",
    grey96: "hsl(0,0%,96%)",
    revert: "hsl(0, 0%, 100%)",
    revertValue: "0, 0%, 100%",
    font: "hsl(0, 0%, 1%)",
    fontValue: "0, 0%, 1%"
  },
  media: {
    big: "(min-width: 741px)"
  },
  opacity: {
    main: 0.66
  }
};

export const baseTheme: DefaultTheme = {
  ...themeInit
};
