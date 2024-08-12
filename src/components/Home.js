import React from 'react'
import GKHead from './mainpage/GKHead'
import GkHome from './mainpage/GkHome'
import GkNavBar from './mainpage/GkNavBar'

function Home() {
  return (
    <div>
      <GKHead />
      <div className="gkNavBar">
        <GkNavBar name="Home" />
        <GkNavBar name="Posts" />
        <GkNavBar name=" Recipes" />
        <GkNavBar name="About" />
      </div>
      <div id="gkHome">
        <GkHome />
      </div>
    </div>
  )
}

export default Home