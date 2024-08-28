import React from 'react'

function PostTitle(props) {
  return (
    <div className='postTitle'>
        <div className='titleImg'>
            <h1 className='postHead postColor'>{props.title}</h1>
            <img src={props.img}></img>
        </div>
        <h6 id='postStar'> ⭐⭐⭐⭐</h6>
        <p className='postDate'>{props.date}</p>
    </div>
  )
}

export default PostTitle