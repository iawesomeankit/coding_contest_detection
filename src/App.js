import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contest from "./components/Contest"
import About from './components/About';
import Contact from './components/Contact';


// import useFetch from "react-fetch-hook"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>
        <Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/feedback" element={<Contact/>}></Route>
          <Route path="/:contestname" element={<Contest/>}></Route>
        </Route>
        </Routes>
      </Router>
  );
}

export default App;
