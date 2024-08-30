import { useNavigate } from 'react-router-dom';

function SubmittedRecipe() {
  let navigate=useNavigate();
  return (
    <div>
          <button id="arrowRight" style={{width:"5rem"}}onClick={()=>{navigate("/")}}>Home</button>

        <h1 id='congrats'>Congratulations!!!!! Recipe uploaded successfullly</h1>
    </div>
  )
}

export default SubmittedRecipe