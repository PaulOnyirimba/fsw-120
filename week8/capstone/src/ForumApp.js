import React from 'react'
import './ForumApp.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Home'
import ColumnForm from './ColumnForm'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function RouterApp() {
    return (
        <div>
            <br /><br />
            <div style={{margin: '0 auto', width: '500px'}}>
                <Router>
                    <Nav />
                    <Switch>
                        <Route exact path='/ColumnForm'><ColumnForm /></Route>
                        <Route path='/'><Home /></Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        </div>
    )
}

export default RouterApp