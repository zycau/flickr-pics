import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'reactstrap'
import { ImageInfo } from '../components/ImageInfo'
import { BigImage } from '../components/BigImage'


export const Image = ()=>{
    // Get index from url
    const { index } = useParams()

    return (
        <Container>
            <BigImage index={parseInt(index, 10)} />
            <ImageInfo index={parseInt(index, 10)} />            
        </Container>
    )
}