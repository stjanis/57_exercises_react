// 1. prompt for user name
// 2. say hello to user
// 3. add random greetings

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: '',
      greeting: ''
    }
    this.getName = this.getName.bind(this);
  }
  getName() {
    var name = prompt("what is your name?");
    if(name) {
      this.setState({ txt: name });
    } else {
      this.getName();
    }
  }
  setGreeting() {
    var greetings = ['Hello', 'Hola', 'Hej', 'Labdien'];
    this.setState({ greeting: greetings[Math.floor(Math.random() * greetings.length)] });
  }
  componentWillMount() {
    this.getName();
    this.setGreeting();
  }
  render() {
    return (
      <div>
        <h1>{ this.state.greeting }, { this.state.txt }!</h1>
        <p>{ this.state.txt }, how is your day?</p>
      </div>
    )
  }
}

export default App;
