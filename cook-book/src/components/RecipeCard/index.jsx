import { useEffect, useState } from 'react'
import axios from 'axios'
import Recipes from '../../components/Recipes'

function RecipeCard() {
	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/posts').then(response => {
			setRecipes(response.data)
		})
	}, [])

	return (
		<>
			{recipes.map(addNewRecipe => (
				<Recipes addNewRecipe={addNewRecipe} />
			))}
		</>
	)
}

export default RecipeCard
