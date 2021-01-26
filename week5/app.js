import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <link to="/services">Services</link>

            <switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/services"><Services /></Route>
            </switch>
        </div>
    )
}

export default App