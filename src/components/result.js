import React from 'react';

import superagent from 'superagent';
import If from './if.js';


class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  componentDidMount(){
    let URL = `${this.props.backend}/${this.props.resource}`;
    superagent.get(URL)
      .query({ data: this.props.location })
      .then(res => {
        let data = res.body;
        this.setState({ data });
      });
  }
  render() {
    return (
      <section>
        <h3>Results from the { this.props.title } API</h3>
        <ul>
        <If condition={ this.state.data !== null }>
          <If condition={ this.props.resource === 'weather' }>
            <Weather data={ this.state.data } />
          </If>
          <If condition={ this.props.resource === 'events' }>
            <Events data={ this.state.data } />
          </If>
          <If condition={ this.props.resource === 'yelp' }>
            <Yelp data={ this.state.data } />
          </If>
          <If condition={ this.props.resource === 'movies' }>
            <Movies data={ this.state.data } />
          </If>
          <If condition={ this.props.resource === 'trails' }>
            <Trails data={ this.state.data } />
          </If>
        </If>
        </ul>
      </section>
    )
  }
}

class Weather extends React.Component {
  render() {
    let renderItems = this.props.data.map((e, i) => (<li key={ i }>The forecast for { e.time } is: { e.forecast  }</li>));
    return (
      <>
        { renderItems }
      </>
    )
  }
}

class Events extends React.Component {
  render() {
    let renderItems = this.props.data.map((e, i) => (<li key={ i }><a href={ e.link }>{ e.name }</a><p>Event Date: { e.event_date }</p><p>{ e.summary }</p></li>));
    return (
      <>
        { renderItems }
      </>
    )
  }
}

class Yelp extends React.Component {
  render() {
    let renderItems = this.props.data.map((e, i) => (<li key={ i }><a href={ e.url }>{ e.name }</a><p>The average rating is { e.rating } out of 5 and the average cost is { e.price } out of 4</p><img src={ e.image_url } /></li>));
    return (
      <>
        { renderItems }
      </>
    )
  }
}

class Movies extends React.Component {
  render() {
    let renderItems = this.props.data.map((e, i) => (<li key={ i }><p><span>{ e.title }</span> was relased on { e.released_on }. Out of { e.total_votes } total votes, { e.title } has an average vote of { e.average_votes } and a popularity score of { e.popularity }.</p><img src={ e.image_url } /><p>{ e.overview }</p></li>));
    return (
      <>
        { renderItems }
      </>
    )
  }
}

class Trails extends React.Component {
  render() {
    let renderItems = this.props.data.map((e, i) => (<li key={ i }><p>Hike Name: <a href={ e.trail_url }>{ e.name }</a>, Location: { e.location }, Distance: { e.length } miles</p><p>On { e.condition_date } at { e.condition_time }, trail conditions were reported as: { e.conditions }</p><p>This trail has a rating of { e.stars } stars (out of { e.star_votes } votes)</p><p>{ e.summary }</p></li>));
    return (
      <>
        { renderItems }
      </>
    )
  }
}

export default Result;
