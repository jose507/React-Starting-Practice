import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


 
const app = props =>{
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Jose', age: 22},
      {name: 'Sharon', age: 21},
      {name: 'Alek', age: 27}
  
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () =>{
    //console.log('was clicked!');
    // Dont do this   this.state.persons[0].name = 'Jose Luis';
     setPersonsState({
       persons:[
         {name: 'Jose Luis', age: 22},
         {name: 'Sharon Virginia ', age: 21},
         {name: 'Alek Rutherford', age: 27}
   
       ]
     });
   };

     return (
      <div className="App">
        <h1>Hi I´m a react App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch  Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Racing and coding</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this  work for now'));
  }



export default app;


