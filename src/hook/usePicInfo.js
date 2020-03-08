import { useContext } from 'react'
import { picsContext } from '../context/picsContext'


export const usePicInfo = index=>{
    const { pics, queryInput } = useContext(picsContext)   

    // Alt attribute in img tag
    const altText = `Result number ${index+1} of ${queryInput.join(', ')}`

    // Image author
    const picAuthor = pics[index].author.replace(/^.*\("(.*)"\)$/, '$1')
    
    // Taken date
    const picTakenDate = pics[index].date_taken.substr(0, 10)

    // Tags
    const picTags = pics[index].tags.split(' ')

    // Get picture src
    const picSrc = pics[index].media.m

    // Get big picture src
    const bigPicSrc = pics[index].media.m.replace(/_m\./, '_b.')

    // Link to Flickr
    const source = pics[index].link
    
    return [altText, picAuthor, picTakenDate, picTags, picSrc, bigPicSrc, source]
}