import { Component } from 'react';

export class Filter extends Component {
  handleChange = event => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    return (
      <div>
        <h2>Filter Contacts</h2>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search contacts..."
        />
      </div>
    );
  }
}
