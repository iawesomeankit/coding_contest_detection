import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='abt-container'>
      <div className='abt'>
        My name is <span>Ankit Patel</span>.I was born in Bihar and shifted to Hyderabd for educational purposes. I am currently pursuing my final year graduation from <span>CMR Technical Campus</span>. For data structure and algorithm, I use <span>C,C++,Java,Python</span> and for front-end web development, I use <span>HTML,CSS,Bootstrap,JavaScript,Reactjs</span>.
      </div>
      <div className='btn'>
        <a href="https://www.linkedin.com/in/ankit-patel-156402212/" className='btn-b' target="_blank">Linkedin</a>
        <a href="https://github.com/iawesomeankit" className='btn-b' target="_blank">Github</a>
      </div>
    </div>
  )
}

export default About
