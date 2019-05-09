import React from 'react';

import Header from './header.js';
import Map from './map.js';
import SearchResults from './search-results.js';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Backend />
        <Geocode />
        <Search />
        <Map />
        <h2 class="query-placeholder"></h2>
        <ErrorMessage />
        <SearchResults />
      </main>
    )
  }
}

class Backend extends React.Component {
  render() {
    return (
      <form id="url-form">
        <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
        <input type="text" id="back-end-url" />
      </form>
    )
  }
}

class Geocode extends React.Component {
  render() {
    return (
      <form id="geocode-form">
        <label>Enter your Geocoding API Key:</label>
        <input type="text" id="api-key" />
      </form>
    )
  }
}

class Search extends React.Component {
  render() {
    return (
      <form id="search-form" class="hide">
        <label for="search">Search for a location</label>
        <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}

class ErrorMessage extends React.Component {
  render() {
    return (
      <section class="error-container"></section>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
