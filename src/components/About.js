import React from 'react'
import GkNavBar from './mainpage/GkNavBar'
import { useLocation } from 'react-router-dom'

function About() {
  let loc=useLocation();
  console.log(loc);
  return (
    <div>
      <h1>Welcome {loc.state.name}</h1>
      <div className="gkNavBar">
        <GkNavBar name="Home" component="/"/>
        <GkNavBar name="Posts" component="/posts"/>
        <GkNavBar name=" Recipes" component="/recipes"/>
        <GkNavBar name="About" component="/about"/>
      </div>
    </div>
  )
}

export default About