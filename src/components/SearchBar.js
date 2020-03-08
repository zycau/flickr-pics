import React, { useContext, useRef, useEffect } from 'react'
import {
    Container,
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap'
import debounce from 'lodash.debounce'
import { useHistory } from 'react-router-dom'
import { picsContext } from '../context/picsContext'

export const SearchBar = ()=>{
    
    const { startSearch, isLoading } = useContext(picsContext)

    // Focus on searching bar
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    // For redirect
    const history = useHistory()

    // Debounce and search
    const handlerDebounce = debounce(value=>{
        history.push('/')        

        const queryArr = value.replace(/,/g, ' ').split(' ').filter(item=>item!==' ' && item!=='')       
        
        startSearch(queryArr)
    }, 1000)
    
    const inputHandler = e=>{
        e.persist()        
        handlerDebounce(e.target.value)        
    }

    // Select all text in searching bar when click it
    const selectAll = e=>{
        e.target.setSelectionRange(0, e.target.value.length)
    }

    return (
        <Container className='mb-3 search-container'>
            <Form className='' onSubmit={e=>e.preventDefault()}>           
                <FormGroup className='mb-0'>
                    <Label for='search-bar' hidden>Search</Label>
                    <Input 
                        type='text' 
                        id='search-bar' 
                        name='search-bar'
                        placeholder='Search for pictures...' 
                        bsSize='lg'      
                        onChange={inputHandler}
                        onClick={selectAll}
                        innerRef={inputRef}
                        disabled={isLoading}
                    />                    
                </FormGroup>               
            </Form>
        </Container>         
    )
}
