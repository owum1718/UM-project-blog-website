import React from 'react'
import GKHeader from './mainpage/GKHeader'
import { NavLink, Link} from 'react-router-dom'
function Recipes() {
  return (
    <div className='postMainLayout'>
      <GKHeader/>
      <div id='recipeLayout' className='postLayout' >
        <NavLink to="/post1" className="nav-link" style={{color:"white"}}>HB Roti</NavLink>
        <NavLink to="/post2" className="nav-link" style={{color:"white"}}>Immunity Booster</NavLink>
        <NavLink to="/post3" className="nav-link" style={{color:"white"}}>Protein parantha</NavLink>
      </div>
    </div>
  )
}

export default Recipes