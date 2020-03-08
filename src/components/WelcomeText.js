import React from 'react'
import { Container } from 'reactstrap'

export const WelcomeText = ()=>{
    return (
        <Container className='pt-5 mt-5 text-center text-white'>
            <h1 className='mb-5'>Welcome to Flickr-Pics</h1>
            <h2 className='mb-5'>Please enter the keywords...</h2>
            <ul className='text-left d-inline-block'>
                <li>Home to tens of billions of photos</li>
                <li>Explore the amazing world here</li>
                <li>Find your inspiration</li>
            </ul>
        </Container>
    )
}