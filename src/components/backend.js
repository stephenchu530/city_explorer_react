import React from 'react';

class BackendURL extends React.Component {
  handleInput = e => {
    e.preventDefault();
    let URL = e.target.childNodes[1].value;
    e.target.childNodes[1].value = '';
    if (URL[URL.length - 1] === '/') {
      URL = URL.slice(0, URL.length - 1);
    }
    this.props.handleBackendURL(URL);
  }

  render() {
    return (
      <form onSubmit={ this.handleInput }>
        <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
        <input type="text" />
      </form>
    )
  }
}

export default BackendURL;
