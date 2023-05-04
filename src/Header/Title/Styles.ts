import styled from "styled-components";
import { SelectableElt } from "../../Styles/components";

export const Divider = styled.div`
  margin: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Heading = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
`;
export const Plus = styled.div`
  border-radius: 50%;
  font-size: 1.5rem;
  ${SelectableElt};
`;
