import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
  --max-width-website: 1920px;
  --font-size-paragraph: 20px;
  --font-size-span: calc(var(--font-size-paragraph) - 2px);
  --font-size-h6: calc(8px * 4);
  --font-size-h5: calc(8px * 4.2);
  --font-size-h4: calc(8px * 4.8);
  --font-size-h3: calc(8px * 5.2);
  --font-size-h2: calc(8px * 5.8);
  --font-size-h1: calc(8px * 6);
  
  --background: #0a0a0a;
  --color: #ededed;
  
  --color-0: #0E2745;
  --color-1: #FF3A20;
  --color-2: #28AFB0;
  --color-3: #EEE5E5;
  --color-4: #F07167;
  --color-5: #1C438B;
  --color-6: #D88B9F;
  --color-7: #3EAED3;
  --color-8: #F0EAEB;
  --color-9: #D55D79;
  --color-10: #E7F5F9;
  --color-11: #CCAFE1;
  --color-12: #3B60E4;
  
  
}

* {
  min-width: 0;
  font: inherit;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin:0;
}

*:focus-visible {
  outline: 2px solid var(--color-3);
  border-radius: 2px;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: var(--background);
  color: var(--color-3);
  scrollbar-gutter: stable;
  font-family: 'League Spartan Variable', sans-serif;
}

img,
video,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

body {
  margin: 0;
  min-height: 100dvh;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

h1{
  font-size: var(--font-size-h1);
}
h2{
  font-size: var(--font-size-h2);
}
h3{
  font-size: var(--font-size-h3);
}
h4{
  font-size: var(--font-size-h4);
}
h5{
  font-size: var(--font-size-h5);
}
h6{
  font-size: var(--font-size-h6);
}

p {
  text-wrap: pretty;
  font-size: var(--font-size-paragraph);
}

span{
  font-size: var(--font-size-span);
}

a:visited{
  color: var(--color-11);
}

a{
  color: var(--color-12);
}

`
