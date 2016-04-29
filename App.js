// 1. prompt for user name
// 2. say hello to user
// 3. add random greetings

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      greeting: ''
    }
    this.getName = this.getName.bind(this);
  }
  getName(e) {
    this.setState({ name: e.target.value });
  }
  setGreeting() {
    var greetings = ['Hello', 'Hola', 'Hej', 'Labdien'];
    this.setState({ greeting: greetings[Math.floor(Math.random() * greetings.length)] });
  }
  componentWillMount() {
    this.setGreeting();
  }
  render() {
    return (
      <div>
        <h3>Please enter your name</h3>
        <input id="get-name" type="text" onChange={this.getName} />
        <h1>{ this.state.greeting }, { this.state.name }!</h1>
        <p>{ this.state.name }, how is your day?</p>
      </div>
    )
  }
}

export default App;
