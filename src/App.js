import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useChain, useSpring, useSpringRef, useTransition } from 'react-spring';
import styled from 'styled-components';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import Logo from './images/Logo.png'

function App() {
  const springRef = useSpringRef();
  const spring = useSpring({ref: springRef, 
      from: {
        y: '-100%',
      },
      to: [
        {y: '0'},
        {y: '0'},
        {y: '-100%'}
      ]
    })
  const location = useLocation()
  const transitionRef = useSpringRef()
  const transitions = useTransition(location, {
    ref: transitionRef,
    from: { opacity: 0},
    enter: { opacity: 1},
  });
  useChain([springRef, transitionRef])

  return transitions((props, item) => (<>
    <AnimatedWrapper style={spring}>
      <img src={Logo} alt="My logo"/>
    </AnimatedWrapper>
     <animated.div style={props}>
        <NavBar/>
        <Routes location={item}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/projects/:name" element={<WorkPage/>}/>

        </Routes>
      <Footer/>
      </animated.div>
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
`

export default App;
