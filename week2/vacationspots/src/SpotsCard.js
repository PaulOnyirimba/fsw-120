import React from 'react'

function SportsCard(props) {
    return (
        <div>
            <h3 style={{display: !props.place && "none"}}>Place: {props.place}</h3>
            <h3 style={{display: !props.place && "#888888"}}>Price: {props.price}</h3>
            <h3 style={{display: !props.timeToGo && "none"}}>TimeToGo: {props.timeToGo}</h3>
            <h3 style={{display: !props.bgcolor && "none"}}>Bgcolor: {props.bgcolor}</h3>
            <h3 style={{display: !props.color && "none"}}>Color: {props.color}</h3>
            <hr/>  
        </div>
    )
}

export default SportsCard