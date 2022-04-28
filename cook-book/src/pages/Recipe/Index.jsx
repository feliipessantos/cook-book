import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'

import Header from '../../components/Header'
import { Background } from '../../styles/Global'
import { Container, ImgRecipe, InfoWrapper, Preparation, Title } from './styles'

function Recipe() {
	const [recipeSelected, setRecipeSelected] = useState([])
	const { id } = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/posts/${id}`).then(response => {
			setRecipeSelected(response.data)
		})
	}, [])

	return (
		<>
			<Header />
			<Background>
				<Container>
					<InfoWrapper>
						<Title>{recipeSelected.title}</Title>
						<ImgRecipe />
						<Preparation>{recipeSelected.description}</Preparation>
					</InfoWrapper>
				</Container>
			</Background>
			<Footer />
		</>
	)
}

export default Recipe
