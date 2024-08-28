import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

function GkNavBar() {
  return (
    <div className="gkNavBar">
      <NavLink to="/" style={(obj)=>{return(obj.isActive? {backgroundColor:"green", color:"white"} : {backgroundColor:""})}}>Home</NavLink>
      <NavLink to="/posts" style={(obj)=>{return(obj.isActive? {backgroundColor:"green", color:"white"} : {backgroundColor:""})}}>Posts</NavLink>
      <NavLink to="/recipes" style={(obj)=>{return(obj.isActive? {backgroundColor:"green", color:"white"} : {backgroundColor:""})}}>Recipes</NavLink>
      <NavLink to="/about" style={(obj)=>{return(obj.isActive? {backgroundColor:"green", color:"white"} : {backgroundColor:""})}}>About</NavLink>
    </div>
  );
}

export default GkNavBar;
