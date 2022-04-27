import { Link } from 'react-router-dom'
import {
	Container,
	Recipe,
	RecipeContainer,
	RecipeDescription,
	RecipeTitle
} from './styles'

function Recipes({ addNewRecipe }) {
	return (
		<Container>
			<Link to={`recipe/${addNewRecipe.id}`}>
				<Recipe>
					<RecipeContainer>
						<RecipeTitle>{addNewRecipe.title}</RecipeTitle>
						<RecipeDescription>{addNewRecipe.description}</RecipeDescription>
					</RecipeContainer>
				</Recipe>
			</Link>
		</Container>
	)
}

export default Recipes
