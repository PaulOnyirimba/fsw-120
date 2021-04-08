import React from 'react'
// import './ForumApp.css'
import {Link, Switch, Route} from 'react-router-dom'
import Home from '../Home'
import ColumnForm from '../ColumnForm'


function Nav () {
    const linkStyle = {color:'white', textDecoration:'none', fontSize:'large'}
    return (
        <div className='CapstoneNav'>
            <div className='CapstoneNavLinks'>
                <Link style={linkStyle} to='/'>Home</Link>
                <Link style= {linkStyle} to= '/columnform'>columnform</Link>
            </div>
            <div>
                <Switch>
                    <Route exact path= '/'>
                        <Home />
                    </Route>
                    <Route path= '/columnform'>
                        <ColumnForm />
                    </Route>
                </Switch>
                
            </div>
        </div>
    )
}
export default Nav