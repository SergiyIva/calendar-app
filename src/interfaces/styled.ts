// тип css фрагмента
import { FlattenSimpleInterpolation } from "styled-components";

export interface ITheme {
  colors: {
    red: string;
    field: string;
    selected: string;
    grey70: string;
    grey90: string;
    grey96: string;
    font: string;
    fontValue: string;
    revert: string;
    revertValue: string;
  };
  media: {
    big: "(min-width: 741px)";
  };
  opacity: {
    main: number;
  };
}

// E - элемент enum
export type StyledVariants<E extends string | number> = {
  [key in E]?: FlattenSimpleInterpolation;
};
