import React from 'react'
import { Container, Spinner } from 'reactstrap'

export const LoadingText = ()=>{
    return (
        <Container className='text-center pt-5'>
            <Spinner color='dark' />
        </Container>
    )
}