import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import withClass from '../../hoc/WithClass';
import Aux from '../../hoc/Auxiliary';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  // in functional components the useRef hook has to be used instead of React.createRef()
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext);

  console.log(`Cockpit context ${authContext.isAuthenticated}`);

  // Can determine when to run useEffect when a certain piece of data changes
  // To run useEffect only once (on itilisation) pass an empty array
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //  http request...
    /* setTimeout(() => {
      alert('Saved to the cloud');
    }, 1000); */

    // as useEffect is called after the render method, toggleBtnRef now has a reference to the button. If placed outside of useEffect an error would occur, as no reference has been created.
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] clean up useEffect');
    };
  }, []);

  // Can have multiple useEffect calls
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up 2nd');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Add another header</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Show Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
      {/* <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
    </Aux>
  );
};

// React.memo() is the functional component equivalent for shouldComponentUpdate()
// Why it may be good to put these checks on all components, this means that the check gets ran each time the component renders. If a component only displays data from its parent component then these checks are not required on the child component, as it is handled in the parent component.
export default withClass(React.memo(Cockpit), classes.Cockpit);
