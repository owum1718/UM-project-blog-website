import React from 'react'
import GkNavBar from './mainpage/GkNavBar'

function Posts() {
  return (
    <div>
            <h1>Posts</h1>

      <div className="gkNavBar">
        <GkNavBar name="Home" component="/"/>
        <GkNavBar name="Posts" component="/posts"/>
        <GkNavBar name=" Recipes" component="/recipes"/>
        <GkNavBar name="About" component="/about"/>
      </div>
    </div>
  )
}

export default Posts