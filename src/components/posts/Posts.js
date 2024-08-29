import React from 'react'
// import PostRecipe from './PostRecipe'
import { useNavigate } from 'react-router-dom'

import GKHeader from '../mainpage/GKHeader';
import PostImgSnapShot from './PostImgSnapShot';
// import PostImgSnapShot from './PostImgSnapShot';

function Posts() {
  let navigate=useNavigate();
  return (
    <div className='postMainLayout'>
      <GKHeader/>

      <div id='postSnapShotLayout'>
        <PostImgSnapShot name="HB Roti" img="./images/HB Roti.jpg" desc="HB Roti ia healthy version of normal chapathi but increases your Hemoglobin(HB) level"/>
        <PostImgSnapShot name="Immunity Booster" img="./images/Immunity Booster.jpg" desc="These are energy balls which fights with viral infections"/>
        <PostImgSnapShot name="Protein Parantha" img="./images/Protein Parantha.jpg" desc="Heavy and healthy breakfast directly corresponds to happy and energetic day "/>
      </div>


      {/* <PostRecipe/> */}

      <button id="arrowRight" onClick={()=>{navigate("/post2")}}>&#10149;</button>


        
    </div>
  )
}

export default Posts