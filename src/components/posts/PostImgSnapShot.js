import React from 'react'
import {  useNavigate } from 'react-router-dom'

function PostImgSnapShot(props) {
    let navigate=useNavigate();
  return (
    <div id='snapShotPlaceholder' onClick={()=>{navigate(`${props.path}`)}}>
        <div id='postDesc'>
            <img id="postDescImg" src={props.img} alt="" />
            <p id='postDescFontSize'>{props.desc}</p>
        </div>

        <h3 id='postTitle' >{props.name}</h3>
    </div>
  )
}

export default PostImgSnapShot