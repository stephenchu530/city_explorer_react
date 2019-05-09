import React from 'react';

localStorage['debug'] = 'fun';

class SearchForm extends React.Component {
  handleInput = e => {
    e.preventDefault();
    let query = e.target.childNodes[1].value;
    e.target.childNodes[1].value = '';
    this.props.handleQuery(query);
  }

  render() {
    return (
      <form onSubmit={ this.handleInput }>
        <label>Search for a location</label>
        <input type="text" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}

export default SearchForm;
