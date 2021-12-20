import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';

function App() {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0},
    enter: { opacity: 1},
  });

  return (
    <>
    <NavBar/>
    {transitions((props, item) => 
     (<animated.div style={props}>
        <Routes location={item}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/work/:name" element={<WorkPage/>}/>

        </Routes>
      </animated.div>)
)}
    <Footer/>
  </>

  );
}

export default App;
