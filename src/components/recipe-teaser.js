import React from "react"

import Img from 'gatsby-image'

const RecipeTeaser = ({recipeTitle, recipeDate, recipeSummary, cookingTime, prepTime, cookingInstructions, recipeImg, slug}) => (
<div>
  <h2><a href={slug}>{recipeTitle}</a></h2>
  <Img fluid={recipeImg} />
  <p>{recipeDate}</p>
  <p>{recipeSummary}</p>
  <div><label style={{
    fontWeight: 'bold'
  }}>Cooking Time:</label> {cookingTime} minutes</div>
  <div><label style={{
    fontWeight: 'bold'
  }}>Prep Time:</label> {prepTime} minutes</div>
  <h3 style={{
    marginTop: '2rem'
  }}>Cooking Instructions</h3>
  <span dangerouslySetInnerHTML={{__html: cookingInstructions}}></span>
</div>
)

export default RecipeTeaser
