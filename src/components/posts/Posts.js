import React from 'react'
// import GkNavBar from '../mainpage/GkNavBar'
import PostRecipe from './PostRecipe'
import { useNavigate } from 'react-router-dom'
import GKNavBar from '../GKNavBar';
import GKHead from '../mainpage/GKHead';

function Posts() {
  let navigate=useNavigate();
  return (
    <div className='postMainLayout'>
      <GKHead/>
      <h1>Posts</h1>

      <GKNavBar/>

      <PostRecipe/>

      <button id="arrowRight" onClick={()=>{navigate("/post2")}}>&#10149;</button>


        
    </div>
  )
}

export default Posts