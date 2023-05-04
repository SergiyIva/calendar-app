import { css } from "styled-components";
import { Property } from "csstype";

type PropertyLocal =
  | "color"
  | "background-color"
  | "opacity"
  | "visibility"
  | "border-color"
  | "border-radius"
  | "box-shadow"
  | "text-shadow"
  | "transform"
  | "outline"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "height"
  | "margin";
type Animation = Property.AnimationTimingFunction;

export const getTransition = (
  duration: number = 150,
  property: PropertyLocal[] | PropertyLocal = ["background-color", "color"],
  animation: Animation = "linear"
) => css`
  transition-property: ${Array.isArray(property)
    ? property.join(", ")
    : property};
  transition-duration: ${duration}ms;
  transition-timing-function: ${animation};
`;

export const visible = css`
  opacity: 1;
  visibility: visible;
`;

export const hidden = css`
  opacity: 0;
  visibility: hidden;
`;
