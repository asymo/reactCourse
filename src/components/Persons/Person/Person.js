import React from 'react';
// import Radium from 'radium';
/* import styled from 'styled-components'; */
import classes from './Person.css';

// the styled-components package returns a new React component, this is why it has to be created outside of the person component
/* const StyledDiv = styled.div`
  width: 60%;
  margin: 1rem auto;
  border: 1px solid #eee;
  padding: 1rem;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`; */

const person = props => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }

  /* const rnd = Math.random();

  if(rnd > 0.7) {
    throw new Error('Something went wrong');
  } */

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
