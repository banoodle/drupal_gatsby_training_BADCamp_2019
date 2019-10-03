import React from "react"
import RecipeTeaser from "../components/recipe-teaser.js"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const RecipeListingPage = ({data}) => (
  <Layout>
    <SEO title="Recipes" />
    <h1>Recipes</h1>
    { data.allNodeRecipe.edges.map((recipe) => ( /* for each recipe in the data object */
      <RecipeTeaser
        key={recipe.node.id}
        imgSrc="https://placeimg.com/100/100/any"
        recipeDate={recipe.node.created}
        recipeTitle={recipe.node.title}
        recipeSummary={recipe.node.field_summary.value}
        cookingTime={recipe.node.field_cooking_time}
        prepTime={recipe.node.field_preparation_time}
        cookingInstructions={recipe.node.field_recipe_instruction.value}
        recipeImg={recipe.node.relationships.field_image.localFile.childImageSharp.fluid}
      />
    )) }
  </Layout>
)

export const query = graphql`
 query RecipeQuery {
  allNodeRecipe {
    edges {
      node {
        id
        title
        field_image {
          alt
          width
          height
        }
        field_summary {
          value
          format
          processed
        }
        created(formatString: "MMMM Do, YYYY")
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
  }
 }`

export default RecipeListingPage
