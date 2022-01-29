import { createGlobalStyle } from "styled-components";
import DharmaGothic from "../../fonts/DharmaGothicE_ExBold_I.woff2";
import DharmaGothicW from "../../fonts/dharmagothice_exbold_i.woff";
import DharmaGothicO from "../../fonts/DharmaGothicE_ExBold_I.otf";
import DharmaGothicT from "../../fonts/DharmaGothicE_ExBold_I.ttf";
import Arame from "../../fonts/Arame.woff2";
import FiraCodeRegular from "../../fonts/FiraCode-Regular.woff2";
import FiraCodeBold from "../../fonts/FiraCode-Bold.woff2";
import { QUERIES } from "../../util/constants";

const GlobalStyles = createGlobalStyle`
html{
  position: relative;

  --reach-dialog: 1;

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
  --font-regular: "Fira Code", monospace;

  --website-gap: 64px;

  @media ${QUERIES.tabletAndSmaller} {
        --website-gap: 32px;
    }


  scroll-behavior: smooth;
}


@font-face {
    font-family: "Arame";
    src: url(${Arame});
    font-display: swap;
}

@font-face {
    font-family: "Dharma Gothic E";
    src: url(${DharmaGothic}) format('woff2'),
         url(${DharmaGothicW}) format('woff'),
         url(${DharmaGothicT}) format('truetype'),
         url(${DharmaGothicO}) format('opentype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: "Fira Code";
    src: url(${FiraCodeRegular});
    font-display: swap;
    font-weight: normal;
}

@font-face {
    font-family: "Fira Code";
    src: url(${FiraCodeBold});
    font-display: swap;
    font-weight: bold;
}


::selection{
  color: black;
  background: var(--color-secondary);
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: hsl(0, 0%, 17%);
  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: hsl(0, 0%, 33%);
  border-radius: 5px;
  border: 2px solid hsl(0, 0%, 17%);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: hsl(0, 0%, 25%);
}


body {
  background-color: var(--color-background);
  color: var(--color-white);
  font-family: var(--font-regular);
  overflow-x: hidden;

}

@supports (filter: blur(100px)) {
  body::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    max-width: 1000px;
    max-height: 1000px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(hsla(90 100% 50% / .21), hsla(155 85% 59% / 0.22));
    transform: translate(-50%, -50%);
    filter: blur(100px);
    opacity: 0.6;
    pointer-events: none;
    z-index: -1;
  }  
}

h1{
  font-family: var(--font-primary);
  font-style: italic;
}

h2,h3,h4,h5,h6{
  font-family: var(---font-secondary);
}

#root{
  min-height: 100%;

  section, nav {
    max-width: 1920px;
    padding-right: var(--website-gap);
    padding-left: var(--website-gap);
    margin: 0 auto;

  }
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
  min-height: 100%;
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
  line-height: 1.75;
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
  letter-spacing: 0;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
