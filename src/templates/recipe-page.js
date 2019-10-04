import React from "react"
import { graphql } from 'gatsby'

import Img from 'gatsby-image'

const RecipePage = ({ data }) => (
<layout>
  <div style={{
    margin: '2rem'
  }}>
    <h1>{data.nodeRecipe.title}</h1>
    <i><p className="publication-date">{data.nodeRecipe.created}</p></i>
    <Img fluid={data.nodeRecipe.relationships.field_image.localFile.childImageSharp.fluid} />
    <div class="details" style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '1em 0',
    }}>
      <h2>Overview</h2>
      <span>Preparation time: {data.nodeRecipe.field_preparation_time}</span>
      <span>Cooking time: {data.nodeRecipe.field_cooking_time}</span>
      <span>Difficulty: {data.nodeRecipe.field_difficulty}</span>
      <span>Number of servings: {data.nodeRecipe.field_number_of_servings}</span>
    </div>
    <h2>Instructions</h2>
    <span dangerouslySetInnerHTML={{__html: data.nodeRecipe.field_recipe_instruction.processed}}></span>
  </div>
</layout>
)

export const query = graphql`
	query($slug: String!) {
	  nodeRecipe(fields: {slug: {eq: $slug}}) {
      id
      title
      field_cooking_time
      field_preparation_time
      field_recipe_instruction {
        value
        format
        processed
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
	}
`


export default RecipePage
