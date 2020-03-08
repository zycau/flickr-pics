import React from 'react'
import { Container } from 'reactstrap'

export const NoResultText = ()=>{
    return (
        <Container className='pt-5 mt-5 text-center text-dark'>
            <h1 className='mb-5'>Sorry, no results.</h1>
            <h2 className='mb-5'>Please try other keywords...</h2>        
        </Container>
    )
}