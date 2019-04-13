import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// axios.get('http://localhost:1234/api/search?url=https://example.com/')
//   .then(result => {
//     console.log((result.data))
//   })

function countString(data, str) {}

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "",
      searchTerm: "",
      count: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(`http://localhost:1234/api/search?url=` + this.state.url)
      .then(result => {
        let regexSearch = new RegExp(this.state.searchTerm, "g");
        let count = (result.data.match(regexSearch) || []).length;
        console.log(typeof result.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Valid URL to Scrape"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Enter Term To Search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <div>Hello World jaja</div>;
  }
}

ReactDOM.render(<Search />, document.getElementById("app"));
