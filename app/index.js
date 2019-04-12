import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

axios.get('http://localhost:1234/api/search?url=https://example.com/')
  .then(result => {
    console.log((result.data))
  })

class App extends React.Component{
  render(){
    return(
      <div>Hello World jaja</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))