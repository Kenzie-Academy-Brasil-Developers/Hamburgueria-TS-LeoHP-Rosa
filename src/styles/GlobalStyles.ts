import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
:root {
  --color-green: #219653;;
  --grey-1: #e0e0e0;
  --grey-2: #828282;
  --white-1: #f5f5f5;
}
body{
  width: 100vw;
  height: 100vh;
}`;
