import React from "react";
import ReactDOM from "react-dom";

class Table extends React.Component {
  render() {
    let table = this.props.table;
    return (
      <table class="my_table">
        <tr>
          <th>Date/Time</th>
          <th>Domain</th>
          <th>Search Term</th>
          <th>Count</th>
        </tr>
        <tr>
          <td>{table.date}</td>
          <td>{table.url}</td>
          <td>{table.searchTerm}</td>
          <td>{table.count}</td>
        </tr>
      </table>
    );
  }
}

export default Table;
