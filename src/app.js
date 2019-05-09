import React from 'react';
import superagent from 'superagent';

import If from './if.js'
import Header from './header.js';
import BackendURL from './backend.js';
import Geocode from './geocode.js';
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
      geocode: ''
    };
  }

  handleURL = async backendURL => {
    await this.setState({ backendURL });
  }

  handleGeocode = async geocode => {
    await this.setState({ geocode });
  }

  handleQuery = async query => {
    await this.setState({ query });
    let URL = `${this.state.backendURL}/location?data=${this.state.query}`;
    superagent.get(URL)
      .then(res => {
        this.setState({ location: res.body });
      });
  }

  render() {
    return (
        <main>
        <If condition={ this.state.backendURL === ''}>
          <BackendURL handleBackendURL={ this.handleURL } />
        </If>
        <If condition={localStorage.getItem('geocode') === null}>
          <Geocode handleGeocode={ this.handleGeocode } />
        </If>
        <If condition={ (this.state.backendURL !== '') && (localStorage.getItem('geocode') !== null) }>
          <SearchForm handleQuery={ this.handleQuery } />
        </If>
        <If condition={ this.state.location !== '' }>
          <Map location={ this.state.location } />
          <ErrorMessage />
          <SearchResults location={ this.state.location } />
        </If>
      </main>
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
