import React from 'react'
import {
    Container,
    Row,
    Col,
    Badge
} from 'reactstrap'
import { usePicInfo } from '../hook/usePicInfo'
import { indexTypes } from '../propTypes/indexType'

export const ImageInfo = ({ index })=>{
    // Custom hook
    const [, picAuthor, picTakenDate, picTags, , , source] = usePicInfo(index)

    return (
        <Container>
            <Row className='border-bottom border-secondary mt-3 image-info-row'>
                <Col sm='4'>
                    <p className='mb-0 text-sm-right font-weight-bold'>Author:</p>
                </Col>
                <Col sm='8' className='pl-sm-2 pl-5'>
                    <p>{picAuthor}</p>
                </Col>
            </Row>
            <Row className='border-bottom border-secondary mt-3 image-info-row'>
                <Col sm='4'>
                    <p className='mb-0 text-sm-right font-weight-bold'>Taken on:</p>
                </Col>
                <Col sm='8' className='pl-sm-2 pl-5'>
                    <p>{picTakenDate}</p>
                </Col>
            </Row>
            <Row className='border-bottom border-secondary mt-3 image-info-row'>
                <Col sm='4'>
                    <p className='mb-0 text-sm-right font-weight-bold'>Flickr address:</p>
                </Col>
                <Col sm='8' className='pl-sm-2 pl-5'>
                    <p><a href={source}>{source}</a></p>
                </Col>
            </Row>
            <Row className='border-bottom border-secondary mt-3 image-info-row'>
                <Col sm='4'>
                    <p className='mb-0 text-sm-right font-weight-bold'>Tags:</p>
                </Col>
                <Col sm='8' className='pl-sm-2 pl-5'>
                    <p>{picTags.map((tag, index)=>
                            <Badge 
                                key={index} 
                                className='mx-1 pb-1'
                                color='primary'
                            >{tag}</Badge>
                        )}</p>
                </Col>
            </Row>
        </Container>
    )
}

ImageInfo.propTypes = {
    index: indexTypes
}