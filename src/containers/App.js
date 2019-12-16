import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
    persons: [
      { id: 'youcan', name: 'Andre', age: 43 },
      { id: 'youcan2', name: 'Marcus', age: 33 },
      { id: 'youcan3', name: 'Sophia', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

 nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
   });

   const person = {
     ...this.state.persons[personIndex] 
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

   this.setState({ persons: persons });
};
 
  deletePersonHandler = personIndex => {
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
};

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });  
  };

    render() {
      let persons  = null;
      let btnClass = '';

      if ( this.state.showPersons ) {
        persons = (
          <div>
            <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
          </div> 
        );
      }           
       
      return (
        <div className={classes.App}>
          {persons}
        </div>
     );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  } 
}

export default App;

