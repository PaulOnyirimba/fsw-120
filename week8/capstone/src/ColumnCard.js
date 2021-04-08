import React from 'react'

const ColumnCard = ( {username, content} ) => {
    return (
        <div>
        <div style={{fontSize:'14px', fontWeight:'bold'}}>{username} wrote: </div>
        <div style={{fontSize:'14px'}}>{content}</div>
        <br />
        </div> 
    )
}

export default ColumnCard