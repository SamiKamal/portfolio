import { createGlobalStyle } from "styled-components";
import DharmaGothic from "../../fonts/DharmaGothicE_ExBold_I.otf";
import Arame from "../../fonts/Arame.ttf";
import SourceCodeProBold from "../../fonts/SourceCodePro-Bold.woff2";
import SourceCodeProRegular from "../../fonts/SourceCodePro-Regular.woff2";


const GlobalStyles = createGlobalStyle`
html{
  --color-primary: hsl(0, 0%, 60%);
  --color-secondary: hsl(101, 100%, 41%);
  --color-background: hsl(223, 14%, 10%);
  --color-background-secondary: hsl(0, 0%, 17%);
  --color-light-grey: hsl(0, 0%, 33%);
  --color-grey-text: hsl(0, 0%, 53%);
  --color-grey-text-secondary: hsl(0, 0%, 60%);
  --color-grey-text-hover: hsl(0, 0%, 74%);
  --color-white: white;

  --font-primary: "Dharma Gothic E", sans-serif;
  --font-secondary: "Arame", monospace;
  --font-regular: "Source Code Pro", monospace;
}


@font-face {
    font-family: "Arame";
    src: url(${Arame}) format("ttf");
    font-display: swap;
}
@font-face {
    font-family: "Dharma Gothic E";
    src: url(${DharmaGothic}) format("opentype");
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}
@font-face {
    font-family: "Source Code Pro";
    src: url(${SourceCodeProBold}) format('woff2');
    font-display: swap;
    font-weight: normal;
}

@font-face {
    font-family: "Source Code Pro";
    src: url(${SourceCodeProRegular}) format('woff2');
    font-display: swap;
    font-weight: bold;
}

body {
  background-color: var(--color-background);
  color: var(--color-white);
  font-family: var(--font-regular);
}
h1{
  font-family: var(--font-primary);
}

h2,h3,h4,h5,h6{
  font-family: var(---font-secondary);
}

#root{
  max-width: 1920px;
  padding: 0 64px;
  margin: 0 auto;
}
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  -webkit-font-smoothing: antialiased;
}

p,span{
  line-height: 1.5;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`

export default GlobalStyles