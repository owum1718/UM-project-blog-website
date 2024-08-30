import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  let nameRef=useRef(),mailRef=useRef(),phoneRef=useRef();
  let recipeNameRef=useRef(),ingRef=useRef(),methodRef=useRef(),imgRef=useRef();
  
  let navigate=useNavigate();
  return (
    <div>
    <button id="arrowRight" onClick={()=>{navigate("/")}}>&#11013;</button>
    <div id='addRecipeLayout'> 
        <form>
          <caption>Recipe Submission</caption>

          <fieldset>
            <legend>Personal information</legend>

            <div>
              <label htmlFor="">Name</label>
              <input type="text" ref={nameRef}/>
            </div>

            <div>
              <label htmlFor="">E-mail</label>
              <input type="email" ref={mailRef}/>
            </div>

            <div>
              <label htmlFor="">Phone</label>
              <input type="tel" ref={phoneRef}/>
            </div>
          </fieldset>

          <fieldset>
            <legend>Recipe Details</legend>

            <div>
              <label htmlFor="">Recipe Name</label>
              <input type="text" ref={recipeNameRef}/>
            </div>

            <div>
              <label htmlFor="">Ingredients</label>
              <input type="text" name="" id="" ref={ingRef}/>
              {/* <span ref={inref}></span> */}
              <button id='addIng' onClick={()=>{}}>&#10133;</button>
            </div>

            <div>
              <label htmlFor="">Method</label>
              <textarea name="" id="" style={{width:"15rem"}} ref={methodRef}></textarea>
            </div>

            <div id='recipeImgLayout'>
              <label htmlFor="">Recipe Image</label>
              <div id='recipeImg' ref={imgRef}></div>
              <input type="file" name="" id="" />
            </div>


          </fieldset>

          <button type='button' id='recipeSubmit' onClick={()=>{
            if(nameRef.current.value && mailRef.current.value && phoneRef.current.value &&
               recipeNameRef.current.value && methodRef.current.value && ingRef.current.value
            )navigate("/congrats"); 
            else alert("Enter details")}}>Submit
          </button>
        </form>
    </div>
    </div>
  )
}

export default AddRecipe