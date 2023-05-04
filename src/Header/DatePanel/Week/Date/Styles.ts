import styled, { css } from "styled-components";
import { getTransition } from "../../../../Styles/utilites";

type DateProps = {
  isActive?: boolean;
};
export const Date = styled.div<DateProps>`
  cursor: pointer;
  border-radius: 50%;
  width: 28px;
  padding: 0.3rem;
  :hover {
    color: ${({ theme, isActive }) => !isActive && theme.colors.red};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.revert};
    `};
  ${getTransition(150, ["color", "background-color"])};
`;
