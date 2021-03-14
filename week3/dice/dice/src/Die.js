import React from 'react'

class Die extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.handleClick(this.props.handleClick());
}
    
render() {
    // this.props.pips
    return (
        <p>{this.props.pips}</p>
    )
}
}

export default Die