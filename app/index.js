import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Table from "./Table";
require("./index.css");

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      searchTerm: "",
      count: null,
      source: "",
      table: {}
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
      .get(`http://localhost:1234/api/search?url=${this.state.url}`)
      .then(result => {
        let regexSearch = new RegExp(this.state.searchTerm, "g");
        let count = (result.data.match(regexSearch) || []).length;
        let resultTable = {
          date: Date(),
          url: this.state.url,
          searchTerm: this.state.searchTerm,
          count: count
        };
        this.setState({
          count: count,
          source: result.data,
          table: resultTable
        });
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="column">
          <input
            placeholder="Enter Valid URL to Scrape"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
            type="url"
          />
          <br />
          <input
            placeholder="Enter Term To Search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            required
          />
          <br />
          <button className="button">Submit</button>
        </form>
        <br />
        <Table table={this.state.table} />
        <textarea className="container" value={this.state.source} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("app"));
