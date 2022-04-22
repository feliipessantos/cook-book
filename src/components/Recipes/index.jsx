import { Link } from 'react-router-dom'
import { Container, Recipe } from './styles'

function Recipes({addNewRecipe}) {


  return (
    <Container>
      <Link to={`recipe/${addNewRecipe.id}`}>
        <Recipe > 
            <h3>{addNewRecipe.title}</h3>
            <p>{addNewRecipe.description}</p>
        </Recipe>
      </Link>
    </Container>
  )
}

export default Recipes