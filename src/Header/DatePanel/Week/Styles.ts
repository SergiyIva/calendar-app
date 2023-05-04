import styled from "styled-components";

const WeekContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.4rem;
  font-weight: 500;
`;

export const SmallWeekContainer = styled(WeekContainer)`
  font-size: 0.75rem;
  font-weight: bold;
`;

export const NumWeekContainer = styled(WeekContainer)`
  font-size: 1rem;
`;
