import React from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from '../Comment';
import PostTitle from './PostTitle';
function PostRecipe2() {
    let navigate=useNavigate();
  return (
    <div className='postMainLayout'>
        <h1 className='postHead'>Post</h1>
    <div className='postLayout'>
      <PostTitle title="Immunity Booster" img="./images/Immunity Booster.jpg" date="07/08/2024"/>
      

        <h3 className="postFont postColor">Ingredients</h3>
        <ul className='postColor'>
          <li>Gond/Edible gum  - 100gm</li>
          <li>Kaju/Cashew  - 25gm</li>
          <li>Badam/Almonds - 25gm</li>
          <li>dry coconut scraped  - 1 cup</li>
          <li>Dry khajur/Dates - 50gm</li>
          <li>Sugar or Jaggery powder  - 250gm</li>
          <li>Elachi/Cardomm powder - 1tsp</li>
          <li>Ghee - 250ml</li>
        </ul>

        <h1 className="postFont postColor">Method</h1>
        <ol className='postColor'>
          <li>fry gond in ghee in batches. Approx 10-15 in 1 batch with 2tbsp ghee till thy r swelled up. Fry all gond and put in container.</li>
          <li>Roughly chop or crush kaju and badam. Fry in ghee till light golden colour and put in same container.</li>
          <li>Crush dry dates and fry in ghee. Let it cool. Grind and mix the powder in the same container.</li>
          <li>Saute dry coconut in same ghee till golden aromatic.</li>
          <li>Make 2 string syrup and slowly pour over the mixture. Add elachi powder in mixture.</li>
          <li>Mix well all Ingredients and check the consistency by kneading a pea sized ball. If the mixture takes laddoo/ball shape and cool down the mixture or add some more syrup and check the consistency to make laddoo shape.</li>
          <li>Cool down the mixture till it is warm to touch.</li>
          <li>Let the laddoos cool down completely before storing,</li>
        </ol>

        <h1 >
          <span id='postNote'>Note:</span>
          <ol>
            <li>Fry only on low flame orelse the gond will not bloom and inside it will be undercooked. When chewed it will stick to teeth.</li>
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

export default PostRecipe2