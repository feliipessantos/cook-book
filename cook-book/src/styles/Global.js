import { createGlobalStyle, css } from 'styled-components'

export const logoFont = css`
	font-family: 'Mukta';
`
export const titleFont = css`
	font-family: 'Roboto';
	font-weight: 700;
`
export const textFont = css`
	font-family: 'Roboto';
	font-weight: 400;
`

export const reset = css`
	* {
		padding: 0;
		margin: 0;
		border: 0;
		box-sizing: border-box;
		text-decoration: none;
	}

	a,
	a:hover,
	a:focus,
	a:active,
	a:visited {
		text-decoration: none;
		color: inherit;
	}
`

export const GlobalStyle = createGlobalStyle`
  ${reset} 
`
