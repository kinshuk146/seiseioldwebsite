import React from 'react'
import { Container,FormWrap,FormButton, FormInput, FormLabel,Text,Icon,Form,FormContent,FormH1 } from './SigninElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/"> RgenAI</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Embrace the Future</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forget password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn;