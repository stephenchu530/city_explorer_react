import React from 'react';
import superagent from 'superagent';

import Header from './header.js';
import SearchForm from './search-form.js';
import Map from './map.js';
import SearchResults from './search-results.js';

localStorage['debug'] = 'fun';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      location: '',
      backendURL: '',
      geocodeAPI: ''
    };
  }

  handleURL = e => {
    e.preventDefault();
    let backendURL = e.target.childNodes[1].value;
    e.target.childNodes[1].value = '';
    if (backendURL[backendURL.length - 1] === '/') {
      backendURL = backendURL.slice(0, backendURL.length - 1);
    }
    this.setState({ backendURL });
  }

  handleGeocode = e => {
    e.preventDefault();
    localStorage['geocode'] = e.target.childNodes[1].value;
    e.target.childNodes[1].value = '';
  }

  handleQuery = e => {
    e.preventDefault();
    let query = e.target.childNodes[1].value;
    e.target.childNodes[1].value = '';
    this.setState({ query });
    let URL = `${this.state.backendURL}/location?data=${query}`;
    superagent.get(URL)
      .then(res => {
        this.setState({ location: res.body });
      });
  }

  render() {
    return (
        <main>
        <Backend handleURL={ this.handleURL } />
        <Geocode handleGeocode={ this.handleGeocode } />
        <SearchForm handleQuery={ this.handleQuery } />
        <Map location={ this.state.location } />
        <ErrorMessage />
        <SearchResults location={ this.state.location } />
      </main>
    )
  }
}

class Backend extends React.Component {
  render() {
    return (
      <form onSubmit={ this.props.handleURL }>
        <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
        <input type="text" />
      </form>
    )
  }
}

class Geocode extends React.Component {
  render() {
    return (
      <form onSubmit={ this.props.handleGeocode }>
        <label>Enter your Geocoding API Key:</label>
        <input type="text" />
      </form>
    )
  }
}

class ErrorMessage extends React.Component {
  render() {
    return (
      <section></section>
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
