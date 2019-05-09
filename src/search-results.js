import React from 'react';

import Result from './result.js';

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <Result title="Darksky" />
        <Result title="Yelp" />
        <Result title="EventBrite" />
        <Result title="MovieDB" />
        <Result title="Trails" />
      </div>
    )
  }
}

export default SearchResults;