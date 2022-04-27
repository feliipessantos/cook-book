import { Link } from 'react-router-dom'

import { SiCodechef } from 'react-icons/si'
import { AddButton, Container, Logo } from './style'

function Header() {
	return (
		<Container>
			<Link to="/">
				<Logo>
					Cook <SiCodechef /> Book
				</Logo>
			</Link>
			<Link to="/new-recipe">
				<AddButton> + RECIPE</AddButton>
			</Link>
		</Container>
	)
}

export default Header
