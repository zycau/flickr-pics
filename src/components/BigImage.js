import React from 'react'
import { Container } from 'reactstrap'
import { usePicInfo } from '../hook/usePicInfo'
import { indexTypes } from '../propTypes/indexType'

export const BigImage = ({ index })=>{
    // Custom hook
    const [altText, , , , , bigPicSrc] = usePicInfo(index)

    return (
        <Container className='mb-4 px-0'>
            <img src={bigPicSrc} alt={altText} width='100%' />
        </Container>        
    )
}

BigImage.propTypes = {
    index: indexTypes
}