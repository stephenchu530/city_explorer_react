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
          <ListItem resource={ this.props.resource } data={ this.state.data } />
        </If>
        </ul>
      </section>
    )
  }
}

class ListItem extends React.Component {
  template = {
    'weather': (e) => this.props.data.map((e, i) => (<li key={ i }>The forecast for { e.time } is: { e.forecast  }</li>)),
    'events': (e) => this.props.data.map((e, i) => (<li key={ i }><a href={ e.link }>{ e.name }</a><p>Event Date: { e.event_date }</p><p>{ e.summary }</p></li>)),
    'yelp': (e) => this.props.data.map((e, i) => (<li key={ i }><a href={ e.url }>{ e.name }</a><p>The average rating is { e.rating } out of 5 and the average cost is { e.price } out of 4</p><img src={ e.image_url } /></li>)),
    'movies': (e) => this.props.data.map((e, i) => (<li key={ i }><p><span>{ e.title }</span> was relased on { e.released_on }. Out of { e.total_votes } total votes, { e.title } has an average vote of { e.average_votes } and a popularity score of { e.popularity }.</p><img src={ e.image_url } /><p>{ e.overview }</p></li>)),
    'trails': (e) => this.props.data.map((e, i) => (<li key={ i }><p>Hike Name: <a href={ e.trail_url }>{ e.name }</a>, Location: { e.location }, Distance: { e.length } miles</p><p>On { e.condition_date } at { e.condition_time }, trail conditions were reported as: { e.conditions }</p><p>This trail has a rating of { e.stars } stars (out of { e.star_votes } votes)</p><p>{ e.summary }</p></li>))
  }

  render() {
    let renderListItems = this.template[this.props.resource](this.props.data);
    return (
      <>
        { renderListItems }
      </>
    )
  }
}

export default Result;
