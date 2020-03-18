import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // Changing the class to extend a PureComponent means it will run the shouldComponentUpdate and check all props. This saves having to implement loads of different checks in the if statement.
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    // this only works as in App.js when there are changes to the state new arrays are created. This means that the shallow comparison below works as it compares the reference of the array rather than the content of its properties.
    if(nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  } */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons;
