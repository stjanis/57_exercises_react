// 1. prompt for user input
// 2. display original string + it's length

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      string: "",
      count: ""
    }
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({ string: document.getElementById('text-1').value });
  }
  render() {
    return(
      <div>
        <input id="text-1" type="text" />
        <button onClick={ this.update }>Count</button>
        <p>{ this.state.string } = { this.state.string.length } characters</p>
      </div>
    )
  }
}

export default App;
