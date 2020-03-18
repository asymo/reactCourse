import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
// Used for managing state in functional components
/* import React, { useState } from 'react'; */
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

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
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'asdf', name: 'Chris', age: 34 },
        { id: 'fghh', name: 'Bob', age: 26 },
        { id: 'xcvb', name: 'Ru', age: 29 }
      ],
      otherState: 'this is another state',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      isAuthenticated: false
    };
  }
  // state = {
  // 	persons: [
  // 		{ id: 'asdf', name: 'Chris', age: 34 },
  // 		{ id: 'fghh', name: 'Bob', age: 26 },
  // 		{ id: 'xcvb', name: 'Ru', age: 29 }
  // 	],
  // 	otherState: 'this is another state',
  // 	showPersons: false
  // };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // this.setState({ persons: persons });
    // passing a function into the setState function allows you to be sure that the state you are changing is the previous state. Using the other method can cause issues on larger apps, as the state may get changed in multiple locations.
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  loginHandler = () => {
    this.setState({isAuthenticated: true});
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log('[App.js] getDerivedStateFromProps', props);
  //     return state;
  //   }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextprops, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // can make calls for external data here e.g. http requests
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
          isAuth={this.state.isAuthenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            isAuthenticated: this.state.isAuthenticated,
            login: this.loginHandler
          }}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              showPersons={this.state.showPersons}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
        
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
