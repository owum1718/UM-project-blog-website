import React from 'react'
import GKHeader from '../mainpage/GKHeader'
import { NavLink, useNavigate } from 'react-router-dom'
function Recipes() {
  let navigate=useNavigate();
  return (
    <div className='postMainLayout'>
      <GKHeader/>

      <button id='addRecipe' onClick={()=>{navigate("/add")}}>Add Recipe &#10133;</button>
      <div id='recipeLayout' className='postLayout' >
        <NavLink to="/post1" className="nav-link" style={{color:"white"}}>HB Roti</NavLink>
        <NavLink to="/post2" className="nav-link" style={{color:"white"}}>Immunity Booster</NavLink>
        <NavLink to="/post3" className="nav-link" style={{color:"white"}}>Protein parantha</NavLink>
      </div>
    </div>
  )
}

export default Recipes