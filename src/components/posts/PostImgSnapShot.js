import React from 'react'

function PostImgSnapShot(props) {
  return (
    <div id='snapShotPlaceholder'>
        <div id='postDesc'>
            <img id="postDescImg" src={props.img} alt="" />
            <p id='postDescFontSize'>{props.desc}</p>
        </div>

        <h3 style={{fontSize:"3rem", fontStyle:"italic",fontWeight:"450"}}>{props.name}</h3>
    </div>
  )
}

export default PostImgSnapShot