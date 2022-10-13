import React from 'react'
import { Link } from 'react-router-dom';
import "./cbutton.css";
function CButton() {
  return (
    <Link to="/">
    <div className='cbutton'>
    <button class="button-56" role="button">Button 56</button>
    </div>
    </Link>
  )
}

export default CButton