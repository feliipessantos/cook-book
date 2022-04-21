import Header from '../../components/Header/Index'
import { Container, Img, InfoWrapper, Preparation, Title } from './Styles'

function Recipe() {
  return (
    <>
      <Header/>
      <Container>
        <Img/>
        <InfoWrapper>
          <Title>Arroz</Title>
          <Preparation>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Sit, nemo. Cumque tenetur vel porro accusantium perferendis fuga totam. 
            Excepturi voluptatibus, sed doloremque laborum est modi perferendis eveniet earum autem? Sequi.
          </Preparation>
        </InfoWrapper>
      </Container>
    </>
  )
}

export default Recipe