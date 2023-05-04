import { css } from "styled-components";
import { getTransition } from "./utilites";

export const SelectableElt = css`
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  :hover {
    opacity: ${({ theme }) => theme.opacity.main};
  }
  :active {
    color: ${({ theme }) => theme.colors.selected};
  }
  ${getTransition(150, ["color", "opacity"])};
`;
