import React from 'react'

function Comment() {
  return (
    <div className='comment'>
        <h2>Leave a comment</h2>
        <p id='cmtTag'>Your e-mail ID will not be published</p>
        <form action="">
        <textarea name="" id="" style={{width:"90%",height:"15rem"}} placeholder='Comment'></textarea>
        <input placeholder='Author' style={{width:"90%"}}></input>
        <input placeholder='Email' style={{width:"90%"}}></input>
        <button id="cmtBtn" type='button' onClick={(obj)=>{(obj.currentTarget.value)?alert("Comments posted!!!") : alert("Please fill the comment section")}}>Post Comment</button>
        </form>
        
    </div>
  )
}

export default Comment