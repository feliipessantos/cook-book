import {
	Container,
	Copyrights,
	Newsletter,
	NewsletterInput,
	SendButton,
	Social
} from './style'
import {
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoSend
} from 'react-icons/io5'

function Footer() {
	return (
		<Container>
			<Newsletter>
				<p>Newsletter</p>
				<div>
					<NewsletterInput type="email" placeholder="e-mail..." />
					<SendButton>
						<IoSend />
					</SendButton>
				</div>
			</Newsletter>
			<Social>
				<a href="#">
					<IoLogoInstagram size={25} />
				</a>
				<a href="#">
					<IoLogoGithub size={25} />
				</a>
				<a href="#">
					<IoLogoLinkedin size={25} />
				</a>
			</Social>
			<Copyrights>&copy; Cook-Book BR, Inc. All rights reserved.</Copyrights>
		</Container>
	)
}

export default Footer
