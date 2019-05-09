import React from 'react';

class Map extends React.Component {
  render() {
    let lat = this.props.location.latitude;
    let lng = this.props.location.longitude
    let src = `https://maps.googleapis.com/maps/api/staticmap?center=${lat}%2c%20${lng}&zoom=13&size=600x300&maptype=roadmap%20%20&key=${localStorage.geocode}`
    return (
        <img src={src} alt="Map of search query" />
    )
  }
}

export default Map;
