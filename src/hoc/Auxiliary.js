const aux = props => props.children;

export default aux;


/****************************** EXAMPLES ******************************/


/* 
** Using an auxiliary allows you to return adjacent JSX elements. The Aux element satisfies the requirement that the return statement only returns one element.
class Person extends Component { 
    render() {
      console.log('[Person.js] rendering...');
  
      return (
        <Aux>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old.
          </p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </Aux>
      );
    }
  };
  
  export default Person; */


  /* 
  ** React has its own built in version of Aux: React.fragment 

  import React, { Component, Fragment } from 'react';
  class Person extends Component { 
    render() {
      console.log('[Person.js] rendering...');
  
      return (
        <Fragment>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old.
          </p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </Fragment>
      );
    }
  };
  
  export default Person;*/