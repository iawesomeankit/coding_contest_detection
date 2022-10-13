import React from 'react'
import "./navbar.css"
// import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Contests Detection</label>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/feedback">Feedback</a></li>
      </ul>
    </nav>
  )
}

export default Navbar