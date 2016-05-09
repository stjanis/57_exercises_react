// 1. prompt for quote
// 2. prompt for author
// 3. add button
// 4. on button click display author + quote

import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: 'I know nothing',
      author: 'Jon Snow',
      clicked: false
    }
    this.update = this.update.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.getAuthor = this.getAuthor.bind(this);
  }
  update(e) {
    this.state.clicked ? this.setState({ clicked: false }) : this.setState({ clicked: true })
  }
  getQuote(e) {
    this.setState({ quote: e.target.value });
  }
  getAuthor(e) {
    this.setState({ author: e.target.value });
  }
  render() {
    return (
      <div>
        <h2>Quote</h2>
        <input type="text" id="app-quote" onChange={this.getQuote} />
        <h2>Author</h2>
        <input type="text" id="app-author" onChange={this.getAuthor} />
        <br/>
        <button onClick={this.update}>{this.state.clicked ? 'Hide quote' : 'Show quote'}</button>
        <div id="quote">
          { this.state.clicked ? <Quote quote={this.state.quote} author={this.state.author} /> : null }
        </div>
      </div>
    )
  }
}

const Quote = (props) => {
  return (
    <div>
      <h2>{props.author} says: &quot;{props.quote}&quot;</h2>
    </div>
  )
}

export default App;



// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       quote: "",
//       name: "",
//       showQuote: false
//     }
//     this.getQuote = this.getQuote.bind(this);
//     this.getName = this.getName.bind(this);
//     this.update = this.update.bind(this);
//   }
//   getQuote(e) {
//     this.setState({ quote: e.target.value });
//   }
//   getName(e) {
//     this.setState({ name: e.target.value });
//   }
//   update(e) {
//     // var someText = document.createTextNode(this.state.name + ' says, "' + this.state.quote + '"');
//     // document.getElementById('test').appendChild(someText);
//     this.setState({ showQuote: true })
//   }
//   render() {
//     return(
//       <div id="quote-wrap">
//         <h2>What is the quote?</h2>
//         <input id="quote" type="text" onChange={this.getQuote} />
//         <br />
//         <h2>Who said it?</h2>
//         <input id="name" type="text" onChange={this.getName} />
//         <br />
//         <button onClick={ this.update }>Output Quote</button>
//         {this.state.showQuote ? <Quote /> : null}
//       </div>
//     )
//   }
// }
//
// class Quote extends React.Component {
//   render() {
//     return (
//       <p id="test">Janis Stipnieks says, &quot;hej hej&quot;</p>
//     )
//   }
// }
//
// export default App;
