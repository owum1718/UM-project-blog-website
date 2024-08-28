import React from 'react'
import GkNavBar from '../mainpage/GkNavBar'
import PostRecipe from './PostRecipe'
import { useNavigate } from 'react-router-dom'

function Posts() {
  let navigate=useNavigate();
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

      <button id="arrowRight" onClick={()=>{navigate("/post2")}}>&#10149;</button>


        
    </div>
  )
}

export default Posts