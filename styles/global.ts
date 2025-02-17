import { css } from "@emotion/react"

export const globalCSS = css`
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

    --color-0: #0e2745;
    --color-1: #ff3a20;
    --color-2: #28afb0;
    --color-3: #eee5e5;
    --color-4: #f07167;
    --color-5: #1c438b;
    --color-6: #d88b9f;
    --color-7: #3eaed3;
    --color-8: #f0eaeb;
    --color-9: #d55d79;
    --color-10: #e7f5f9;
    --color-11: #ccafe1;
    --color-12: #3b60e4;
  }

  * {
    min-width: 0;
    font: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
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
    font-family: "League Spartan Variable", sans-serif;
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

  h1 {
    font-size: var(--font-size-h1);
  }
  h2 {
    font-size: var(--font-size-h2);
  }
  h3 {
    font-size: var(--font-size-h3);
  }
  h4 {
    font-size: var(--font-size-h4);
  }
  h5 {
    font-size: var(--font-size-h5);
  }
  h6 {
    font-size: var(--font-size-h6);
  }

  p {
    text-wrap: pretty;
    font-size: var(--font-size-paragraph);
  }

  span {
    font-size: var(--font-size-span);
  }

  a:visited {
    color: var(--color-11);
  }

  a {
    color: var(--color-12);
  }
`
