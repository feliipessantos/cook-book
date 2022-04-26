import AddRecipe from '../../components/AddRecipeForm'
import Header from '../../components/Header'
import { Container } from './styles'


function NewRecipe() {

  return (
    <>
      <Header/>
      <Container>
        <AddRecipe />
      </Container>
    </>
  )
}

export default NewRecipe