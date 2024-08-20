import React from 'react'

function PostRecipe() {
  return (
    <div className='postLayout'>
        <h1 id='postHead' className='postColor'>HB Roti</h1>
        <h6 id='postStar'> ⭐⭐⭐⭐</h6>
        <h3 className="postFont postColor">Ingredients</h3>
        <ul className='postColor'>
          <li>Palak/Spinach </li>
          <li>Fenugreek Leaves/Methi </li>
          <li>Green Chilli Paste</li>
          <li>Garlic Cloves</li>
          <li>Wheat Flour</li>
          <li>Salt</li>
        </ul>

        <h1 className="postFont postColor">Method</h1>
        <ol className='postColor'>
          <li>Mix flour, torn palak leaves and methi leaves, salt, crushed garlic cloves and green chilli paste all together.</li>
          <li>Knead well as a semi soft dough. Rest for only 5min.</li>
          <li>Roll out dough and make chapatis. Pan must be hot enough to make softer rotis.</li>
        </ol>

        <h1 >
          <span id='postNote'>Note:</span>
          <ol>
            <li>Hand torn green leafy veggies instead of using knife. Chopping results in loss of nutrition.</li>
            <li>Dont Leave kneaded dough for long time as salt leaves water and greens in it also starts to leave water and you cannot roll out chapatis</li>
          </ol>
        </h1>
    </div>
  )
}

export default PostRecipe