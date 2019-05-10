import React from 'react';

import Result from './result.js';

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <Result title="Dark Sky" resource="weather" location={ this.props.location } backend={ this.props.backend } />
        <Result title="Yelp" resource="yelp" location={ this.props.location } backend={ this.props.backend } />
        <Result title="Eventbrite" resource="events" location={ this.props.location } backend={ this.props.backend } />
        <Result title="The Movie DB" resource="movies" location={ this.props.location } backend={ this.props.backend } />
        <Result title="Hiking Project" resource="trails" location={ this.props.location } backend={ this.props.backend } />
      </div>
    )
  }
}

export default SearchResults;
