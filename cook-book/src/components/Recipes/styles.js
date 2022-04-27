import styled from 'styled-components'
import { colors } from '../../styles/Colors'
import { SofShadow, textFont, titleFont } from '../../styles/Global'

export const Container = styled.div`
	height: 100%;

	display: flex;
	justify-content: center;
	padding: 2rem 0;

	@media (min-width: 920px) {
		display: inline-flex;
		padding-left: 4rem;
		height: 100%;
	}
`

export const Recipe = styled.div`
	width: 20rem;
	height: 25rem;
	position: relative;

	background-image: url(https://i.pinimg.com/564x/e8/a8/8b/e8a88b54e83ed4c53adda0d37b7b4f77.jpg);
	background-position: center;
	background-size: cover;

	border: 2px solid ${colors.dark};
	border-radius: 12px;

	display: grid;
	align-items: flex-end;
`

export const RecipeTitle = styled.h3`
	${titleFont}
	color: ${colors.light};
`
export const RecipeDescription = styled.p`
	${textFont}
	color: ${colors.light};

	display: none;
`

export const RecipeContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	width: 100%;
	height: 15%;
	padding: 1rem;
	overflow: hidden;

	display: grid;
	justify-items: center;

	background: rgba(0, 0, 0, 0.5);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(6px);
	border-radius: 10px;
	border: 1px solid ${colors.light};
	overflow: hidden;

	transition: 1s all;

	@media (min-width: 920px) {
		&:hover {
			height: 40%;

			${RecipeDescription} {
				display: block;
			}
		}
	}
`
