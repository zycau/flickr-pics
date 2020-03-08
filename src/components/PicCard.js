import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,    
    Badge
} from 'reactstrap'
import { usePicInfo } from '../hook/usePicInfo'
import { indexTypes } from '../propTypes/indexType'

export const PicCard = ({ index })=>{    
    // Custom hook
    const [altText, picAuthor, picTakenDate, picTags, picSrc] = usePicInfo(index)
    
    // Shorter tags list in card
    const shortPicTags = picTags.filter(tag=>tag.length<=10).filter((tag, ind)=>ind<=4)
    
    return (
        <div>
            <Card className='m-2 bg-light phone'>
                <Link to={`/${index}`}>
                    <CardImg 
                        top 
                        width='100%' 
                        height='180' 
                        src={picSrc} 
                        alt={altText}
                        className='thumbnail-pic'
                    />
                </Link>
                <CardBody className='p-3 pic-card-body'>                    
                    <CardText className='mb-0 font-weight-bold'>Author:</CardText>
                    <CardText className='mb-2 pl-2'>{picAuthor}</CardText>

                    <CardText className='mb-0 font-weight-bold'>Taken on:</CardText>
                    <CardText className='mb-2 pl-2'>{picTakenDate}</CardText>

                    <CardText className='mb-1 font-weight-bold'>Tags:</CardText>
                    <CardText className='mb-3 pl-2'>
                        {shortPicTags.map((tag, index)=>
                            <Badge 
                                key={index} 
                                className='mx-1 pb-1'
                                color='primary'
                            >{tag}</Badge>
                        )}
                        {picTags.length>5 && <span className='ml-1'>&#8230;&#8230;</span>}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

PicCard.propTypes = {
    index: indexTypes
}

