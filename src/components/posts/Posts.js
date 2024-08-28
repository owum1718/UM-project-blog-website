import React from 'react'
import PostRecipe from './PostRecipe'
import { useNavigate } from 'react-router-dom'

import GKHeader from '../mainpage/GKHeader';

function Posts() {
  let navigate=useNavigate();
  return (
    <div className='postMainLayout'>
      <GKHeader/>


      <PostRecipe/>

      <button id="arrowRight" onClick={()=>{navigate("/post2")}}>&#10149;</button>


        
    </div>
  )
}

export default Posts