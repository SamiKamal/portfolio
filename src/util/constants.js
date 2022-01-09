import { keyframes } from "styled-components";

export const Fly = keyframes`
    from {
        transform: translateY(-10%);
    }

    to {
        transform: translateY(-15%);
    }
`;

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
