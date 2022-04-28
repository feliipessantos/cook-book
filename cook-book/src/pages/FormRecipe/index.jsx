import AddRecipe from '../../components/AddRecipeForm'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Background } from '../../styles/Global'
import { Container } from './styles'

function NewRecipe() {
	return (
		<>
			<Header />
			<Background>
				<Container>
					<AddRecipe />
				</Container>
			</Background>
			<Footer />
		</>
	)
}

export default NewRecipe
