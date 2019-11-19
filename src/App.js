import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andre', age: 43 },
      { name: 'Marcus', age: 33 },
      { name: 'Sophia', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

 switchNameHandler = (newName) => {
      //console.log('Was clicked!');
      //DO NOT THIS: this.state.persons[0].name = 'Andre';
     this.setState( {
      persons: [
        { name: 'newName', age: 43 },
        { name: 'Marcus', age: 33 },
        { name: 'Sophia', age: 25 }
      ]
    } )
 }

 nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      { name: 'Andre', age: 43 },
      { name: event.target.value, age: 33 },
      { name: 'Sophia', age: 25 }
    ]
  } )
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});  
  }

    render () {
      const style= {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      return (
        <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { 
          this.state.showPersons === true ?
         <div> 
         <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
         <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Andre!')} 
            cahnged={this.nameChangedHandler}>My Hobbies: Racing</Person>
         <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
          </div> : null
          }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  } 
}

export default App;

