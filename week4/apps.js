import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            list: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            list: event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <input type="text" placeholder="list" onChange={this.handleChange} />
                <h1>{this.state.list}</h1>
            </form>
        )
    }
}

export default App