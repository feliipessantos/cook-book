import styled from 'styled-components'
import { colors } from '../../styles/Colors'
import { textFont } from '../../styles/Global'

export const Container = styled.div`
	${textFont}
	height: 9rem;
	padding-top: 1rem;

	background-color: ${colors.dark};
	color: ${colors.light};
	box-shadow: 5px 5px 0px -5px ${colors.dark},
		inset 0px 0px 5px 0px ${colors.light};

	display: grid;
	justify-content: center;
	justify-items: center;
`

export const Newsletter = styled.div`
	display: grid;
	justify-content: center;
	justify-items: center;
	gap: 0.5rem;

	@media (min-width: 920px) {
		display: flex;
	}
`

export const NewsletterInput = styled.input`
	height: 19px;
	padding: 10px;
	margin-bottom: 1rem;

	background-color: ${colors.salmon};
	color: ${colors.dark};
	border: 1px solid ${colors.light};
	box-shadow: 2px 4px 5px -5px ${colors.light};
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
`

export const SendButton = styled.button`
	height: 23px;
	width: 48px;
	cursor: pointer;
	margin-left: 6px;

	background-color: ${colors.orange};
	color: ${colors.light};
	border: 1px solid ${colors.light};
	box-shadow: 2px 4px 5px -5px ${colors.light};
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;

	transition: 0.6s;

	&:hover {
		opacity: 0.5;
	}
`
export const Social = styled.div`
	height: 1rem;
	width: 15rem;
	margin-bottom: 1rem;

	display: flex;
	justify-content: space-around;

	&a {
		cursor: pointer;
	}
`
export const Copyrights = styled.p`
	font-size: 12px;
`
