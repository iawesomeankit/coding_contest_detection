import React from 'react'
// import CButton from './CButton'
import "./homelist.css"
import { Link } from 'react-router-dom';

function HomeList({item}) {
  return (
    <div className='homeList'>
        <img src={item.url} alt='codeforce'/>
        {/* <h1>{item.id}</h1> */}
        <div className='cc'>
        <h1>{item.name}</h1>
        <div className='cbutton'>
          <Link to={`/${item.link}`} >
          <button class="button-54" role="button">Contest</button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default HomeList