import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  box-sizing: border-box;
    letter-spacing: 0.01rem;
  } 

html {
  font-family: Arial, serif;
  color: ${({ theme }) => theme.colors.font};
  background-image: ${({ theme }) => theme.colors.revert};
}

body {
  margin: 0;
}

*,
::after,
::before {
  box-sizing: inherit;
}
`;
