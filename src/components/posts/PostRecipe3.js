import React from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from '../Comment';
import PostTitle from './PostTitle';
import GKHeader from '../mainpage/GKHeader';

function PostRecipe3() {
    let navigate=useNavigate();
  return (
    <div className='postMainLayout'>
      <GKHeader/>

      
      <div className='postLayout'>
        
        <PostTitle title="Protein Parantha" img="./images/protein parantha.jpg" date="14/08/2024"/>
        <h3 className="postFont postColor">Ingredients</h3>
        <ul className='postColor'>
          <li>Moong dal - 1/4cup</li>
          <li>Wheat FLour - 1cup</li>
          <li>Salt - pinch</li>
          <li>Water as needed</li>
          <li>Coriander leaves - 2tbsp</li>
          <li>Chopped onion - 2tbsp</li>
          <li>Red chilli powder - 1tsp</li>
          <li>Roasted Zeera/Cumin powder - 1tsp</li>
          <li>Lemon juice - 1tsp</li>
          <li>Ghee - 1tbsp</li>
        </ul>

        <h1 className="postFont postColor">Method</h1>
        <ol className='postColor'>
          <li>Soak moong dal overnight or 1hour for fast cooking.</li>
          <li>Saute chopped onion in 2 tsp oil till translucent.</li>
          <li>Add soaked moong dal without water and spices. Saute for a minute.</li>
          <li>If the monng dal is soft in sauteing then dont add water or add a dash of water and cover lid. We dont water paste. We want dry mixture.</li>
          <li>Once the dal is cooked and water is drained. Cool the dal by spreading in a container so that no moisture left.</li>
          <li>If the dal is mashed by hands forms a firm dough then no need to grind orelse grind on pulse for stuffing.</li>
          <li>Knead the dough with salt and water. Rest for 10min</li>
          <li>Make equal sized balls from the dough. Shape them as small bowl/Katori.</li>
          <li>Take stuffing. Ratio must be 1:2 stuffing : dough ball.</li>
          <li>Keep the stuffing inside the shaped dough and bring the side together to seal stuffing inside.</li>
          <li>Spread a bit with hand so that stuffing spreads evenly in the dough</li>
          <li>Roll with light hands the parantha and toast on pan with ghee on 2 sides.</li>
          <li>Server hot.</li>
        </ol>

        <h1 >
          <span id='postNote'>Note:</span>
          <ol>
            <li>Consistency of stuffing and dough must be same for eady rolling and even stuffing</li>
          </ol>
        </h1>
        <Comment/>

    </div>


    <div id='btn'>    
      <button id="arrowRight" onClick={()=>{navigate("/posts")}}>&#11013;</button>
      <button id="arrowRight" onClick={()=>{navigate("/post3")}}>&#10145;</button>
    </div>


     </div>
  )
}

export default PostRecipe3