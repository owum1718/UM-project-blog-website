import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  let inref=useRef();
  let navigate=useNavigate();
  return (
    <div id='addRecipeLayout'> 
        <form>
          <caption>Recipe Submission</caption>

          <fieldset>
            <legend>Personal information</legend>

            <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">E-mail</label>
            <input type="email" />
          </div>

          <div>
            <label htmlFor="">Phone</label>
            <input type="tel" />
          </div>
          </fieldset>

          <fieldset>
            <legend>Recipe Details</legend>

            <div>
            <label htmlFor="">Recipe Name</label>
            <input type="text" />
            </div>

            <div>
            <label htmlFor="">Ingredients</label>
            <input type="text" name="" id="" />
            <span ref={inref}></span>
            <button id='addIng' onClick={()=>{}}>&#10133;</button>
          </div>

          <div>
            <label htmlFor="">Method</label>
            <textarea name="" id="" style={{width:"15rem"}}></textarea>
          </div>

          <div id='recipeImgLayout'>
            <label htmlFor="">Recipe Image</label>
            <div id='recipeImg'></div>
            <input type="file" name="" id="" />
          </div>
          </fieldset>

          <button type='button' id='recipeSubmit' onClick={()=>{navigate("/congrats")}}>Submit</button>

          

        </form>
    </div>
  )
}

export default AddRecipe