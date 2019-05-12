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
      query: null,
      location: null,
      backendURL: `https://still-caverns-25372.herokuapp.com`,
      geocode: null
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
    this.makeQuery();
  }

  makeQuery = () => {
    let URL = `${this.state.backendURL}/location`;
    superagent.get(URL)
      .query({ data: this.state.query })
      .then(res => {
        this.setState({ location: null });
        this.setState({ location: res.body });
      });
  }

  render() {
    return (
        <main>
        {/*
        <If condition={ this.state.backendURL === null }>
          <BackendURL handleBackendURL={ this.handleURL } />
        </If>
         */}
        <If condition={localStorage.getItem('geocode') === null }>
          <Geocode handleGeocode={ this.handleGeocode } />
        </If>
        <SearchForm handleQuery={ this.handleQuery } />
        <If condition={ this.state.location !== null }>
          <Map location={ this.state.location } />
          <ErrorMessage />
        <SearchResults location={ this.state.location } backend={ this.state.backendURL } />
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
