import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// Used for managing state in functional components
/* import React, { useState } from 'react'; */
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
/* import styled from 'styled-components'; */
/* import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'; */

/* const StyledButton = styled.button`
  background-color: ${props => props.show ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.show ? 'salmon' : 'lightgreen'};
    color: black;
  }
`; */

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Chris', age: 34 },
      { id: 'fghh', name: 'Bob', age: 26 },
      { id: 'xcvb', name: 'Ru', age: 29 }
    ],
    otherState: 'this is another state',
    showPersons: false
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler} />;
    }
    
    return (
        <div className={classes.App}>
          <Cockpit 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons} />
          {persons}
        </div>
    );
  }
}

export default App;