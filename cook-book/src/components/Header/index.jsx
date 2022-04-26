
import { Link } from 'react-router-dom'

import { AddButton, Container, Logo } from './style'

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