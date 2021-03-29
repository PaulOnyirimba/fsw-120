import React from 'react'

function About() {
    return (
        <div style={{display:"flex", backgroundColor:"lightblue"}}>
            <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Mr.Plumber" style={{width:"300px", padding:"10px"}} />
            <div style={{width:"100%", textAlign:"center", paddingTop:"50px"}}>
                Here at Mr.Plumber we focus on good customer service and efficiency. We have been around since 1985 and we are continuing to expand.
            </div>
        </div>
    )
}

export default About