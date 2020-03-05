import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a react app</h1>
            <p className={assignedClasses.join(' ')}>Add another header</p>
            <button className={btnClass} onClick={props.clicked}>
                Show Persons
            </button>
        </div>
    )
}
export default Cockpit;