import React from 'react'
import GKHead from './mainpage/GKHead'
import GkHome from './mainpage/GkHome'
import GkNavBar from './mainpage/GkNavBar'

function Home() {
  return (
    <div>
      <GKHead />
      <div className="gkNavBar">
        <GkNavBar name="Posts" component="/posts"/>
        <GkNavBar name="Recipes" component="/recipes"/>
        <GkNavBar name="About" component="/about"/>
      </div>
      <div id="gkHome">
        <GkHome />
      </div>
    </div>
  )
}

export default Home