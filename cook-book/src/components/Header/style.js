import styled from 'styled-components'
import { colors } from '../../styles/Colors'
import { titleFont } from '../../styles/Global'

export const Container = styled.div`
	width: 100%;
	height: 5rem;
	background: red;
	display: grid;
	justify-content: center;
	align-items: center;
`

export const Logo = styled.h1`
	color: ${colors.dark};
	${titleFont};
`

export const AddButton = styled.button`
	background-color: green;
	color: blue;
	border-radius: 12px;
`
