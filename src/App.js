import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
     return (
      <div className="App">
        <h1>Hi I´m a react App</h1>
        <p>This is really working!</p>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this  work for now'));
  }
}

export default App;
