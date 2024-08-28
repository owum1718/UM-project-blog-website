import React from 'react'
// import GKHead from './mainpage/GKHead'
import GkHome from './mainpage/GkHome'
// import GkNavBar from './mainpage/GkNavBar'
import GKHeader from './mainpage/GKHeader'

function Home() {
  return (
    <div>
      <GKHeader/>
      
      <div id="gkHome">
        <GkHome />
      </div>
    </div>
  )
}

export default Home