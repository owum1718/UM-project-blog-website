import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function GkNavBar(props) {
  let naviagte=useNavigate();
  return (
    <div>
      <button onClick={()=>{naviagte(props.component)}}>{props.name}</button>
    </div>
  );
}

export default GkNavBar;
