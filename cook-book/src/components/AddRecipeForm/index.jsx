import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Confirm, Form, Label, Name, Preparation, Title } from './Styles'

function AddRecipe() {
	const [values, setValues] = useState({
		title: '',
		description: ''
	})

	const navigate = useNavigate()

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	function handleSubmit(event) {
		event.preventDefault()

		axios.post('http://localhost:3000/posts', values).then(() => {
			navigate('/')
		})
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Title>Add New Recipe</Title>
			<Label htmlFor="title">
				Name
				<Name
					type="text"
					id="title"
					name="title"
					placeholder="Name your recipe.."
					onChange={handleChange}
				/>
			</Label>
			<Label htmlFor="description">
				Preparation
				<Preparation
					name="description"
					id="description"
					onChange={handleChange}
					placeholder="Describe your recipe.."
				/>
			</Label>
			{/* <Label>Chose your recipe image
          <ImagesWrapper>
            <Images/>
            <Images/>
            <Images/>
          </ImagesWrapper> */}
			<Confirm type="submit" onClick={handleSubmit}>
				Confirm
			</Confirm>
			<Confirm>Cancel</Confirm>
			{/* </Label> */}
		</Form>
	)
}

export default AddRecipe
