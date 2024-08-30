import React from 'react'
import { useNavigate } from 'react-router-dom'

function PostNavigationBtn() {
    let navigate=useNavigate();
  return (
    <div>
        <div className='navigatePost'>
            <div>
                <button id="arrowRight" onClick={()=>{navigate("/posts")}}>&#11013;</button>
                <span className='postNavigationSpan'>Previous</span>
            </div>
            <div>
                <button id="arrowRight" onClick={()=>{navigate("/post3")}}>&#10145;</button>
                <span className='postNavigationSpan'>Next</span>
                </div>
        </div>
    </div>
  )
}

export default PostNavigationBtn