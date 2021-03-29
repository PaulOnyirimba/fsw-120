import React from 'react'
import './RouterApp.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './Home'
import Services from './Services'
import About from './About'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function RouterApp() {
    return (
        <div>
            <br /><br />
            <div style={{marginLeft:"30%", width:"800px"}}>
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path='/Services'><Services /></Route>
                        <Route exact path='/About'><About /></Route>
                        <Route path='/'><Home /></Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        </div>
    )
}

export default RouterApp