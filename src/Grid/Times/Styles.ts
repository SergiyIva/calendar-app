import styled from "styled-components";

export const Divider = styled.div`
  margin-top: 1px;
  flex: 0 0 10%;
  text-align: right;
  padding-right: 0.25rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grey70};
`;

export const Time = styled.div`
  margin-bottom: 2.5rem;
  line-height: 0;
  margin-top: 0;
`;
