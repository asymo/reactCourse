import React, { Component } from 'react';
// import Radium from 'radium';
/* import styled from 'styled-components'; */
import classes from './Person.css';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

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

class Person extends Component {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }

  /* const rnd = Math.random();

  if(rnd > 0.7) {
    throw new Error('Something went wrong');
  } */

  constructor(props) {
    super(props);
    // using this method to create a reference is the more modern way. The other way was used in older versions of React
    this.inputElementRef = React.createRef();
  }

  // React adds the values of AuthContext to this.context. contextType must be static.
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.isAuthenticated)
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      <Aux>
        {this.context.isAuthenticated ? <p>Authorised!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEle) => {this.inputElement = inputEle}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);
