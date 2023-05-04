import styled from "styled-components";

export const Divider = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.grey90};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey90};
  background-color: ${({ theme }) => theme.colors.grey96};
  padding: 0.5rem 1rem 0.5rem 4rem;
`;
