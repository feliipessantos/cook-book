import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  `

export const Form = styled.form`
  display: grid;
  justify-content: center;
  gap: 1rem;
  border: 1px solid red;
`
export const Title = styled.h1`
  color: red;
  text-align: center;
`
export const Label = styled.label`
  display: grid;
  justify-content: center;
`
export const Name = styled.input`
  border: 1px solid red;
  height: 3rem;
  width: 25rem;
  padding: 1rem;
`
export const Preparation = styled.textarea`
  border: 1px solid red;
  height: 11rem;
  width: 25rem;
  padding: 1rem;
`

export const ImagesWrapper = styled.div`
  display: flex;
`

export const Images = styled.img`
  width: 8.5rem;
  height: 12rem;
`
export const Confirm = styled.button`
  background-color: green;
`
