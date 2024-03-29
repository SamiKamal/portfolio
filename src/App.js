import { Routes, Route, useLocation } from "react-router-dom";
import { animated, useChain, useSpringRef, useTransition } from "react-spring";
import styled from "styled-components";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import Logo from "./images/Logo.png";

function App() {
  const location = useLocation();
  const springRef = useSpringRef();
  const spring = useTransition(location, {
    ref: springRef,
    keys: location.pathname,
    from: {
      y: "-100%",
    },
    enter: [{ y: "0" }, { y: "0" }, { y: "-100%" }],
    leave: { y: "-100" },
  });
  const transitionRef = useSpringRef();
  const transitions = useTransition(location, {
    ref: transitionRef,
    keys: location.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
  useChain([springRef, transitionRef]);

  return transitions((props, item) => (
    <>
      {spring((styleProps) => (
        <AnimatedWrapper style={styleProps}>
          <img src={Logo} alt="My logo" />
        </AnimatedWrapper>
      ))}
      <AnimatedInnerWrapper style={props}>
        <NavBar />
        <Routes location={item}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:name" element={<WorkPage />} />
        </Routes>
        <Footer />
      </AnimatedInnerWrapper>
    </>
  ));
}

const AnimatedWrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: var(--color-background-secondary);
  display: grid;
  place-content: center;

  img {
    max-width: 328px;
  }
`;

const AnimatedInnerWrapper = styled(animated.div)`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    width: 100%;
  }
`;

export default App;
