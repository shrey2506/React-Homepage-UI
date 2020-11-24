import React from 'react';
import {
     Container,
     FormWrap,
     Icon, 
     FormContent, 
     Form,
     FormH1,
     FormInput,
     FormButton
    } from './ContactElements';

const Contact = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">NanaRocks</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>
                            Contact Us
                        </FormH1>
                        <FormInput type="email" required />
                        <FormButton type="submit"></FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Contact;
