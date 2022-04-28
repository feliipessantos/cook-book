import styled from 'styled-components'
import { colors } from '../../styles/Colors'
import { SofShadow, textFont, titleFont } from '../../styles/Global'

export const Form = styled.form`
	margin: auto;
	padding: 1rem;

	display: grid;
	gap: 1rem;
	justify-content: center;
	border: 1px solid ${colors.salmon};

	${SofShadow}

	@media (min-width: 920px) {
		width: 50rem;
	}
`
export const Title = styled.h1`
	color: ${colors.dark};
	background-color: ${colors.salmon};
	border: 1px solid ${colors.orange};
	border-radius: 10px;

	text-align: center;

	${SofShadow}
	${titleFont}
`
export const Label = styled.label`
	display: grid;
	justify-content: center;

	color: ${colors.dark};
	${titleFont}
`
export const Name = styled.input`
	height: 3rem;
	width: 25rem;
	padding: 1rem;

	color: ${colors.dark};
	background-color: ${colors.light};
	border: 1px solid ${colors.orange};
	border-radius: 10px;

	${titleFont}
	${SofShadow}
`
export const Preparation = styled.textarea`
	height: 11rem;
	width: 25rem;
	padding: 1rem;

	color: ${colors.dark};
	background-color: ${colors.light};
	border: 1px solid ${colors.orange};
	border-radius: 10px;

	${textFont}
	${SofShadow}
`

export const ImagesWrapper = styled.div`
	display: flex;
`

export const Images = styled.img`
	width: 8.5rem;
	height: 12rem;
`
export const ConfirmBtn = styled.button`
	${titleFont};
	${SofShadow}

	width: 16rem;
	height: 1.6rem;
	cursor: pointer;

	justify-self: center;

	border-radius: 12px;
	border: 2px solid ${colors.dark};

	background-color: ${colors.salmon};
	color: ${colors.dark};

	transition: 0.4s;

	&:hover {
		box-shadow: inset 16rem 0 0 0 ${colors.green};
		color: ${colors.light};
	}
`

export const CancelBtn = styled.button`
	${titleFont};
	${SofShadow}

	width: 16rem;
	height: 1.6rem;
	cursor: pointer;

	justify-self: center;

	border-radius: 12px;
	border: 2px solid ${colors.dark};

	background-color: ${colors.light};
	color: ${colors.dark};

	transition: 0.4s;

	&:hover {
		box-shadow: inset 16rem 0 0 0 ${colors.red};
		color: ${colors.light};
	}
`
