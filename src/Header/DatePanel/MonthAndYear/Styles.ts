import styled from "styled-components";
import { SelectableElt } from "../../../Styles/components";

export const MonthAndYearDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`;

export const ArrowContainer = styled.div`
  font-size: 1.5rem;
  line-height: 0;
  ${SelectableElt};
`;
export const MonthAndYear = styled.div`
  font-size: 0.9rem;
`;
