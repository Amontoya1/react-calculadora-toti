import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-user-drag: none;
  -webkit-app-region: none;
}
body {
  background-color: ${(props) => props.theme.body};
}

*container {
  background-color: ${(props) => props.theme.body};
}

`;
