import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

var config = {
  proxy: {
    host: '127.0.0.1',
    port: 8080
  }
}

axios.get('https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States')
  .then(result => {
    console.log(JSON.stringify(result))
  })

class App extends React.Component{
  render(){
    return(
      <div>Hello World jaja</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))