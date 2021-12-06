import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
--color-primary: hsl(0, 0%, 60%);
--color-secondary: hsl(101, 100%, 41%);
--color-background: hsl(223, 14%, 10%);
--color-background-secondary: hsl(0, 0%, 17%);
--color-light-grey: hsl(0, 0%, 33%);
--color-grey-text: hsl(0, 0%, 53%);
--color-grey-text-hover: hsl(0, 0%, 74%);

--font-primary: "Dharma Gothic E", sans-serif;
--font-secondary: "Arame", monospace;
--font-regular: "Source Code Pro", monospace;


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
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
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