import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jose', age: 22},
      {name: 'Sharon', age: 21},
      {name: 'Alek', age: 27}

    ]
  }

  render() {
     return (
      <div className="App">
        <h1>Hi I´m a react App</h1>
        <p>This is really working!</p>
        <button>Switch  Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Racing and coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this  work for now'));
  }
}

export default App;
