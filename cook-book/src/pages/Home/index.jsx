import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipeCard from '../../components/RecipeCard'
import { Background } from '../../styles/Global'

function Home() {
	return (
		<>
			<Header />
			<Background>
				<RecipeCard />
			</Background>
			<Footer />
		</>
	)
}

export default Home
