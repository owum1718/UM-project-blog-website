import React from 'react'
import GkNavBar from '../mainpage/GkNavBar'
import PostRecipe from './PostRecipe'

function Posts() {
  return (
    <div className='postMainLayout'>
      <h1>Posts</h1>

      <div className="gkNavBar">
        <GkNavBar name="Home" component="/"/>
        <GkNavBar name="Posts" component="/posts"/>
        <GkNavBar name=" Recipes" component="/recipes"/>
        <GkNavBar name="About" component="/about"/>
      </div>

        <PostRecipe/>
        
    </div>
  )
}

export default Posts