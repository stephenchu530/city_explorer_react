import React from 'react';

import superagent from 'superagent';

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
        console.log(data);
      });
  }
  render() {
    return (
      <section>
        <h3>Results from the { this.props.title } API</h3>
        <ul></ul>
      </section>
    )
  }
}

export default Result;
