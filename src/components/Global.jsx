import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #eee;
    background-color: #393e46;
  }

`

export default Global
