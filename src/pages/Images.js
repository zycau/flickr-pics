import React, {useContext} from 'react'
import { picsContext } from '../context/picsContext'
import { Container } from 'reactstrap'
import { PicCard } from '../components/PicCard'

export const Images = ()=>{
    const { pics } = useContext(picsContext)

    return (
        <Container className='py-3 m-0 mx-auto d-flex flex-wrap justify-content-center images-page'>         
                {pics.map((pic, index)=>
                    <PicCard 
                        index={index} 
                        key={index}
                    />
                )}            
        </Container>
        
    )
}