import React from 'react';

class Map extends React.Component {
  render() {
    let src = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap%20%20&key=${localStorage.geocode}`
    return (
      <>
        <img src={src} alt="Map of search query" />
        <h2>Here are the results for: { this.props.location.formatted_query }</h2>
      </>
    )
  }
}

export default Map;
