import React from 'react'

function Services() {
    return (
        <div style={{display:"flex", backgroundColor:"lightblue"}}>
            <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Mr.Plumber" style={{width:"300px", padding:"10px"}} />
            <div style={{paddingTop:"25px", paddingLeft:"40px"}}>
                <ul>
                    <li>Water damage cleanup</li>
                    <li>Sump pump repair</li>
                    <li>Drain cleaning</li>
                </ul>
            </div>
        </div>
    )
}

export default Services