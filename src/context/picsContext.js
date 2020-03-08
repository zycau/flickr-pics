import React, { createContext, useState, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'

export const picsContext = createContext()

export const PicsProvider = ({ children })=>{
    // Store pictures information
    const [pics, setPics] = useState([])

    // If isLoading is true, show spinner
    const [isLoading, setIsLoading] = useState(false)

    // Store user input as an array
    const [queryInput, setQueryInput] = useState([])

    // Add background picture to home page
    useEffect(()=>{
        if(!queryInput.length){
            document.body.classList.remove('nobg')
        }else{
            if(!document.body.classList.contains('nobg')){
                document.body.classList.add('nobg')
            }
        }
    }, [queryInput])

    // Fetch data from Flickr
    const startSearch = (arr)=>{
        if(arr.length){
            setIsLoading(true)

            setQueryInput(arr)
        
            const query = arr.join(',')

            const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${query}`    
            
            fetchJsonp(url, {
                jsonpCallbackFunction: 'jsonFlickrFeed',
                timeout: 10000
            })
                .then(res=>res.json())
                .then(data=>setPics(data.items))
                .then(()=>setIsLoading(false))
        }else{
            setPics([])
            setQueryInput([])
        }
    }


    return (
        <picsContext.Provider value={{pics, setPics, isLoading, queryInput, setQueryInput, startSearch}}>
            {children}
        </picsContext.Provider>
    )
}