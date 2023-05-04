import styled from "styled-components";
import { SelectableElt } from "../Styles/components";
import { hidden, visible } from "../Styles/utilites";

export const Footer = styled.footer`
  font-size: 1rem;
  border-top: 2px solid ${({ theme }) => theme.colors.grey90};
  background-color: ${({ theme }) => theme.colors.grey96};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type ActionItemProps = {
  isVisible: boolean;
};
export const ActionItem = styled.div<ActionItemProps>`
  ${SelectableElt};
  ${({ isVisible }) => (isVisible ? visible : hidden)};
`;
