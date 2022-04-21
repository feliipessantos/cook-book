import Header from '../../components/Header/Index'
import { Confirm, Container, Form, Images, ImagesWrapper, Label, Name, Preparation, Title } from './Styles'

function NewRecipe() {
  
  return (
    <>
      <Header/>
      <Container>
        <Form >
          <Title>Add New Recipe</Title>
            <Label>Name
              <Name type="text" name="name" placeholder="Name your recipe.."/>
            </Label>
            <Label>Preparation
              <Preparation placeholder="Describe your recipe.."/>
            </Label>
            <Label>Chose your recipe image
              <ImagesWrapper>
                <Images/>
                <Images/>
                <Images/>
              </ImagesWrapper>
              <Confirm>Confirm</Confirm>
              <Confirm>Cancel</Confirm>
            </Label>
        </Form>
      </Container>
    </>
  )
}

export default NewRecipe