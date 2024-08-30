import React from 'react'
import GKHeader from '../mainpage/GKHeader';
import PostImgSnapShot from './PostImgSnapShot';

function Posts() {
  return (
    <div className='postMainLayout'>
      <GKHeader/>

      <div id='postSnapShotLayout'>
        <PostImgSnapShot name="HB Roti" img="./images/HB Roti.jpg" desc="HB Roti ia healthy version of normal chapathi but increases your Hemoglobin(HB) level" path="/post1"/>
        <PostImgSnapShot name="Immunity Booster" img="./images/Immunity Booster.jpg" desc="These are energy balls which fights with viral infections" path="/post2"/>
        <PostImgSnapShot name="Protein Parantha" img="./images/Protein Parantha.jpg" desc="Heavy and healthy breakfast directly corresponds to happy and energetic day" path="/post3"/>
      </div>        
    </div>
  )
}

export default Posts