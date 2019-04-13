import React from "react";

class Table extends React.Component {
  render() {
    const { table } = this.props;
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
