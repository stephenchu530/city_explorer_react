import React from 'react';

class Geocode extends React.Component {
  handleInput = e => {
    e.preventDefault();
    let geocode = e.target.childNodes[1].value;
    e.target.childNodes[1].value = '';
    localStorage['geocode'] = geocode;
    this.props.handleGeocode(1);
  }

  render() {
    return (
      <form onSubmit={ this.handleInput }>
        <label>Enter your Geocoding API Key:</label>
        <input type="text" />
      </form>
    )
  }
}

export default Geocode;
