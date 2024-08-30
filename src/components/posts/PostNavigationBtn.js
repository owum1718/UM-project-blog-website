import React from 'react'
import { useNavigate } from 'react-router-dom'

function PostNavigationBtn(props) {
    let navigate=useNavigate();
  return (
    <div>
        <div className='navigatePost'>
            <div>
                <button id="arrowRight" onClick={()=>{navigate(props.previous)}}>&#11013;</button>
                <span className='postNavigationSpan'>Previous</span>
            </div>
            <div>
                <button id="arrowRight" onClick={()=>{navigate(props.next)}}>&#10145;</button>
                <span className='postNavigationSpan'>Next</span>
                </div>
        </div>
    </div>
  )
}

export default PostNavigationBtn