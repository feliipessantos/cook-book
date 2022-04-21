import { Link } from 'react-router-dom'
import { Container, Recipe } from './Styles'

function Recipes() {
  return (
    <Container>
      <Link to='/recipe'>
        <Recipe>
          <img src="" alt="" />
          <h3>Arroz</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Ds numquam officia! Voluptas, quae harum.
          </p>

        </Recipe>
      </Link>
    </Container>
  )
}

export default Recipes