/*
** App class upto lecture 86 in section 7
*/

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
    // CSS is limited when writing it inline. Unable to apply :hover
    // As writing CSS as JS have to use camel case, or wrap in quotes: "background-color"
    /* const style = { // used for inline styling
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '0.5rem',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }; */

    // this is the prefered way of adding conditional content, as it keeps the return JSX cleaner
    let persons = null;

    // let btnClass = [classes.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler} />
        </div>
      );


      /* 
      ** Using an ErrorBoundary with the Person component as a child
      if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.changeNameHandler(event, person.id)}
            /></ErrorBoundary>;
          })}
        </div>
      ); */

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      // btnClass.push(classes.Red);
    }


    // JSX reserves all lower case keyword e.g. div. Could create a Div component
    // Using an arrow function within the onClick event can have issues with performance. Recommended to use the bind method.
    
    return (
        <div className={classes.App}>
          <Cockpit 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons} />
          {persons}
        </div>
    );
    
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Here is the Element title'));
  }
}




// *******************************************************************************

/*
 ** Using React Hooks
 */

/* const app = props => {
  // can have multiple setStates in a functional component
  // when setting a new state, you would need to pass in the whole state as setPersonState overwrites the state, unlike this.setState that looks for changes and merges them in.
  const [ personState, setPersonState] = useState({
    persons: [
      { name: 'Chris', age: 34 },
      { name: 'Bob', age: 26 },
      { name: 'Ru', age: 29 },
    ]
  });

  const [ otherState, setOtherState ] = useState('some other state');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Christopher', age: 34 },
        { name: 'Bob', age: 26 },
        { name: 'Ru', age: 30 },
      ]
    })
  }

  //; functional components must return JSX, similar to the render method in class Components
  return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <p>Add another header</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies: Racing</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
}

export default app; */
