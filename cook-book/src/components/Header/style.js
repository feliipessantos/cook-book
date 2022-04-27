import styled from 'styled-components'
import { colors } from '../../styles/Colors'
import { logoFont, SofShadow, titleFont } from '../../styles/Global'

export const Container = styled.div`
	width: 100%;
	height: 6rem;
	padding: 0.5rem 0;

	background: ${colors.orange};
	box-shadow: 0px 5px 5px -5px ${colors.dark},
		inset 0px 0px 5px 0px ${colors.light};

	display: grid;
	justify-content: center;
	justify-items: center;
	align-items: center;
`
export const Logo = styled.h1`
	${logoFont};

	color: ${colors.dark};
	text-shadow: 1px 2px 2px ${colors.light};
`

export const AddButton = styled.button`
	${titleFont};
	${SofShadow}

	width: 6rem;
	height: 1.6rem;
	cursor: pointer;

	border-radius: 12px;
	border: 2px solid ${colors.dark};

	background-color: ${colors.light};
	color: ${colors.dark};

	transition: 0.4s;

	&:hover {
		box-shadow: inset 6.5em 0 0 0 ${colors.green};
		color: ${colors.light};

		border: 2px solid ${colors.light};
	}
`
