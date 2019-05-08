import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </header>
    )
  }
}

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
        <div class="column-container hide">
          <Results />
          <Results />
          <Results />
          <Results />
          <Results />
        </div>
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

class Map extends React.Component {
  render() {
    return (
      <img id="map" class="hide" src="https://maps.googleapis.com/maps/api/staticmap?center=47.606210%2c%20-122.332071&zoom=13&size=600x300&maptype=roadmap%20%20&key=AIzaSyBfOxvSAEhF0bINfqhSTthhNKEBb8eHfHc" alt="Map of search query" />
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

class Results extends React.Component {
  render() {
    return (
      <section>
        <h3>Results from the Lorem Ipsum</h3>
        <ul class="Lorem Ipsum"></ul>
      </section>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
