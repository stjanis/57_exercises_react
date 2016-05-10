// 1. prompt for noun
// 2. prompt for verb
// 3. prompt for adjective
// 4. prompt for adverb
// 5. add button
// 6. on button click display sentence

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noun: '',
      verb: '',
      adjective: '',
      adverb: '',
      clicked: false
    }
    this.checkClick = this.checkClick.bind(this);
    this.getTxt = this.getTxt.bind(this);
  }
  checkClick(e) {
    this.state.clicked ? this.setState({ clicked: false }) : this.setState({ clicked: true })
  }
  getTxt(e) {
    var targetInput = e.target.id;
    switch(targetInput) {
      case 'app-noun':
        this.setState({ noun: e.target.value });
        break;
      case 'app-verb':
        this.setState({ verb: e.target.value });
        break;
      case 'app-adjective':
        this.setState({ adjective: e.target.value });
        break;
      case 'app-adverb':
        this.setState({ adverb: e.target.value });
        break;
    }
  }
  getAuthor(e) {
    this.setState({ author: e.target.value });
  }
  render() {
    return (
      <div>
        <h2>Noun</h2>
        <input type="text" id="app-noun" onChange={this.getTxt} />
        <h2>Verb</h2>
        <input type="text" id="app-verb" onChange={this.getTxt} />
        <br/>
        <h2>Adjective</h2>
        <input type="text" id="app-adjective" onChange={this.getTxt} />
        <br/>
        <h2>Adverb</h2>
        <input type="text" id="app-adverb" onChange={this.getTxt} />
        <br/>
        <button onClick={this.checkClick}>{this.state.clicked ? 'Hide text' : 'Show result'}</button>
        <div id="result-wrap">
          { this.state.clicked ? <Quote
            noun={this.state.noun}
            verb={this.state.verb}
            adjective={this.state.adjective}
            adverb={this.state.adverb} /> : null }
        </div>
      </div>
    )
  }
}

const Quote = (props) => {
  return (
    <div>
      <h2>Do you {props.verb} your {props.adjective} {props.noun} {props.adverb}?</h2>
    </div>
  )
}

export default App;
