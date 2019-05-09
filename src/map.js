import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <img id="map" class="hide" src="https://maps.googleapis.com/maps/api/staticmap?center=47.606210%2c%20-122.332071&zoom=13&size=600x300&maptype=roadmap%20%20&key=AIzaSyBfOxvSAEhF0bINfqhSTthhNKEBb8eHfHc" alt="Map of search query" />
    )
  }
}

export default Map;
