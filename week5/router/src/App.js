import React from 'react'
import './RouterApp.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './Home'
import Services from './Services'
import About from './About'

import { Link,  Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div>
           <br />
           <br />
            <div style={{marginLeft:"30%", width:"800px"}}>
              
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Services'>Services</Link>

           
                    
                    <Switch>
                        <Route path='/Services'><Services /></Route>
                        <Route path='/About'><About /></Route>
                        <Route exact path='/'><Home /></Route>
                    </Switch>
                
                 <Footer /> 
            </div>
        </div>
    )
}

export default App 
