import React from 'react'
import './App.css'

const isSound = false;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ['white', 'white', 'white','white']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    let colors = [...this.state.colors]
    switch(e.target.name) {
      case 'sdj':
      if (this.state.colors[0] === 'black') {
        this.setState({ colors: ['white', 'white', 'white', 'white'] })
      } else {
        this.setState({ colors: ['black', 'black', 'black', 'black'] })
      }
      break
      case 'pdj':
      colors[0] = 'purple'
      colors[1] = 'purple'
      this.setState({ colors})
      break
      case 'profdj1':
      colors[2] = 'blue'
      this.setState({ colors})
      break
      case 'profdj2':
      colors[3] = 'blue'
      this.setState({ colors})
      break
      case 'bigdj':
      colors[0] = 'yellow'
      this.setState({ colors})
      break
      case 'bigdj2':
      colors[1] = 'green'
      this.setState({ colors})
      break
      case 'bigdj3':
      colors[2] = 'red'
      this.setState({ colors})
      break
      case 'bigdj4':
      colors[3] = 'orange'
      this.setState({ colors})
      break
      console.log(3)
      default:

      
    }
  }





render() {
  return (
    <div>
      <br />
      <div className="squres">
        <div className="squares" style={{backgroundColor:this.state.colors[0]}}>Lets</div>
        <div className="squares" style={{backgroundColor:this.state.colors[1]}}>Party</div>
        <div className="squares" style={{backgroundColor:this.state.colors[2]}}>All</div>
        <div className="squares" style={{backgroundColor:this.state.colors[3]}}>Night</div>
      </div>

        <br />

        <div className="buttons">
          <div className="tinyButton">
            <button name="sdj" onClick={this.handleClick}>Small Time Dj</button>
          </div>
          <div className="tinyButton">
            <button name="pdj" onClick={this.handleClick}>Party Dj</button>
          </div>
           <div className="tinyButton">
             <button name="profdj1" onClick={this.handleClick}>Professional Dj 1</button>
          </div>
           <div className="tinyButton">
             <button name="profdj2" onClick={this.handleClick}>Professional Dj 2</button>
          </div>

           <div className="tinyButton">
             <button name="bigdj" onClick={this.handleClick}>Big Time Dj</button>
          </div>
           <div className="tinyButton">
             <button name="bigdj2" onClick={this.handleClick}>Big Time Dj 2</button>
          </div>
           <div className="tinyButton">
             <button name="bigdj3" onClick={this.handleClick}>Big Time Dj 3</button>
          </div>
          <div className="tinyButton">
             <button name="bigdj4" onClick={this.handleClick}>Big Time Dj 4</button>
          </div>
        </div>
        </div>


  )
}
}









export default App;
