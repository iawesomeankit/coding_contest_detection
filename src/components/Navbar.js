import React from 'react'
import "./navbar.css"
import { Link,useNavigate } from 'react-router-dom'
function Navbar() {
  let navigate = useNavigate();
  return (
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label className="logo" onClick={()=>{
        navigate('/');
      }}>Contests Detection</label>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar