import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/work/:name" element={<WorkPage/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>

  );
}

export default App;
