import React from 'react'
import GkNavBar from './mainpage/GkNavBar'
function GKNavBar() {
  return (
    <div>
        <div className="gkNavBar">
        <GkNavBar name="Home" component="/"/>
        <GkNavBar name="Posts" component="/posts"/>
        <GkNavBar name=" Recipes" component="/recipes"/>
        <GkNavBar name="About" component="/about"/>
      </div>
    </div>
  )
}

export default GKNavBar