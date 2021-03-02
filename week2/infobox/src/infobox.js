import React from "react"
// import Infobox from "./infobox"

function Infobox(props) {
    return (
        <div classname="info">
          <h1  style={{backgroundColor: props.background}}   >Hello world</h1>
            <p>{props.Title}</p>
            <p>{props.Subtitle}</p>
            <p>{props.Information}</p>
        </div>
    )
}

export default Infobox