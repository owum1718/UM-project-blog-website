import React from 'react'
import {  useNavigate } from 'react-router-dom'

function PostImgSnapShot(props) {
    let navigate=useNavigate();
  return (
    <div id='snapShotPlaceholder' onClick={()=>{navigate(`${props.path}`)}}>
        {/* <NavLink to={props.path}> */}
        <div id='postDesc'>
            <img id="postDescImg" src={props.img} alt="" />
            <p id='postDescFontSize'>{props.desc}</p>
        </div>

        <h3 style={{fontSize:"3rem", fontStyle:"italic",fontWeight:"450"}}>{props.name}</h3>
        {/* </NavLink> */}
    </div>
  )
}

export default PostImgSnapShot