import './App.css';
import { useState,useEffect} from 'react';
import axios from "axios";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contest from "./components/Contest"
import UC from './components/UC';

// import useFetch from "react-fetch-hook"
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom"
function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>
        <Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<UC/>}></Route>
          <Route path="/feedback" element={<UC/>}></Route>
          <Route path="/:contestname" element={<Contest/>}></Route>
        </Route>
        </Routes>
      </Router>
  );
}

export default App;
