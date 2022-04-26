import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import { Container, Img, InfoWrapper, Preparation, Title } from './styles'

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
			<Container>
				<InfoWrapper>
					<Title>{recipeSelected.title}</Title>
					<Preparation>{recipeSelected.description}</Preparation>
				</InfoWrapper>
			</Container>
		</>
	)
}

export default Recipe

{
	/* <Img/>
	 */
}
