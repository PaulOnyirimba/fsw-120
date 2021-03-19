import React from 'react'


class App extends React.Component {
   constructor() {
     super()
     this.state = {
       name: '',
       names: ['Bradley Penny', 'Jordan Carter', 'Reggie Carter', 'Franklin Saint']
     }
     this.handleChange = this.handleChange.bind(this)
   }

   handleChange = (e) => {
     this.setState({ name: e.target.value})
   }

   handleClick = (e) => {
     e.preventDefault()
     this.setState({
       names: [ this.state.name, ...this.state.names],
       name: ''
     })
   }

render() {
  return (
    <div style={{margin:"auto", width:"200px", padding:"10px"}}>
      <br />
      <form>
        <input
        type="text"
        name="inputName"
        placeholder="Applicant's Name"
        onChange={this.state.name}
        // style={{width:90%}}
        /><br />
        <p name="dispName" style={{textAlign:"center"}}>{this.state.name}</p>
        <button style={{width:"90%"}} onClick={this.handleClick}>Submit Name</button>
        <ol>
          {this.state.names.map((item, i) => {
            return <li key={i}> {item}</li>
          })}
          </ol>
          </form>
    </div>
  )
}
}


export default App;
