import React from 'react'
// import GkNavBar from './mainpage/GkNavBar'
import GKHeader from './mainpage/GKHeader'
import { useLocation } from 'react-router-dom'

function About() {
  let loc=useLocation();
  console.log(loc);
  return (
    <div>
      {/* <h1>Welcome {loc.state.name}</h1> */}
      <GKHeader/>
      
    </div>
  )
}

export default About