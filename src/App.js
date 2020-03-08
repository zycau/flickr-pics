import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

import { picsContext } from './context/picsContext'
import { Header } from './components/Header'
import { Images } from './pages/Images'
import { Image } from './pages/Image'
import { SearchBar } from './components/SearchBar'
import { LoadingText } from './components/LoadingText'
import { WelcomeText } from './components/WelcomeText'

export const App = ()=>{
    const { isLoading, pics } = useContext(picsContext)
    
    return (
        <Router>
            <div>
                <Header />
                <SearchBar />
                {isLoading ?
                    <LoadingText /> :                    
                    (!pics.length ?
                        <WelcomeText /> :
                        <Switch>
                            <Route path='/' exact>
                                <Images />
                            </Route>                    
                            <Route path='/:index'>
                                <Image />
                            </Route> 
                        </Switch>
                    )
                }        
            </div>           
        </Router>
    )
}

