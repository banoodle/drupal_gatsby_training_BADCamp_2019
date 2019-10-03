import React from "react"
import { Link } from "gatsby"

import Img from 'gatsby-image'

const RecipeTeaser = ({recipeTitle, recipeDate, recipeSummary, cookingTime, prepTime, cookingInstructions, recipeImg}) => (
<div>
  <h2>{recipeTitle}</h2>
  <Img fluid={recipeImg} />
  <p>{recipeDate}</p>
  <p>{recipeSummary}</p>
  <div><label>Cooking Time:</label> {cookingTime} minutes</div>
  <div><label>Prep Time:</label> {prepTime} minutes</div>
  <h3>Cooking Instructions</h3>
  <div>{cookingInstructions}</div>
</div>
)

export default RecipeTeaser
