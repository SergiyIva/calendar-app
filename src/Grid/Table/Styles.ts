import styled from "styled-components";
import { getTransition } from "../../Styles/utilites";

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
`;

type CellProps = {
  isLast?: boolean;
};
export const Cell = styled.td<CellProps>`
  width: 100px;
  height: 2.5rem;
  border-right: ${({ theme, isLast }) =>
    !isLast && `2px solid ${theme.colors.grey90}`};
  border-top: 2px solid ${({ theme }) => theme.colors.grey90};
`;

type EventProps = {
  isSelected?: boolean;
};
export const Event = styled.div<EventProps>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.selected : theme.colors.grey96};
  width: 100%;
  height: 100%;
  cursor: pointer;
  ${getTransition()};
`;
