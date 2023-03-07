import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <div class='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
     
    </>
  );
}
export default App;
