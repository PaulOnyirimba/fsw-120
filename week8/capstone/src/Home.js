import React from 'react'

function Home() {
    const divStyle = {
        paddingBottom: '25px',
        paddingTop: '30px',
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'lightgreen'
    }
    return (
        <div style={{textAlign:'center', height:'450px', backgroundColor:'darkgreen'}}>
            <div style={divStyle}>Welcome to my<br />Blog</div>
        </div>
    )
}

export default Home