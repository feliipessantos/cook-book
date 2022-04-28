import styled from 'styled-components'
import { colors } from '../../styles/Colors'
import { textFont, titleFont, SofShadow } from '../../styles/Global'

export const Container = styled.div`
	min-height: 30rem;
	padding: 1rem;

	display: flex;
	justify-content: center;
	align-items: baseline;
`

export const ImgRecipe = styled.div`
	background-image: url(https://i.pinimg.com/564x/e8/a8/8b/e8a88b54e83ed4c53adda0d37b7b4f77.jpg);
	background-position: center;
	background-size: cover;
	width: 22rem;
	height: 25rem;

	border: 1px solid ${colors.salmon};

	${SofShadow}

	grid-area: img;
`

export const InfoWrapper = styled.div`
	display: grid;
	gap: 1rem;
	padding: 0 1rem;

	@media (min-width: 920px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 0.2fr 0.8fr;
		gap: 16px 16px;
		grid-template-areas:
			'img title'
			'img description';
	}
`

export const Title = styled.h1`
	${titleFont}
	text-align: center;

	padding: 1rem;

	border: 1px solid ${colors.orange};
	border-radius: 10px;

	box-shadow: 0px 5px 5px -5px ${colors.dark},
		inset 0px 0px 5px 0px ${colors.light};

	background-color: ${colors.salmon};

	grid-area: title;
`

export const Preparation = styled.p`
	${textFont}
	text-align: center;

	padding: 1rem;

	border: 1px solid ${colors.orange};
	border-radius: 10px;

	box-shadow: 0px 5px 5px -5px ${colors.dark},
		inset 0px 0px 5px 0px ${colors.light};

	background-color: ${colors.salmon};

	grid-area: description;
`
