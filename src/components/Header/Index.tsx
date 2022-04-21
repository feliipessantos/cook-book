import { Link } from 'react-router-dom'
import { AddButton, Container, Logo } from './Style'

function Header() {


  return (
    <Container>
      <Link to='/'>
        <Logo>Cook-Book</Logo>
      </Link>
      <Link to='/new-recipe'>
        <AddButton>Add</AddButton>
      </Link>
    </Container>
  )
}

export default Header