import React from 'react';

localStorage['debug'] = 'fun';

class SearchForm extends React.Component {
  render() {
    return (
      <form onSubmit={ this.props.handleQuery}>
        <label>Search for a location</label>
        <input type="text" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}

export default SearchForm;
