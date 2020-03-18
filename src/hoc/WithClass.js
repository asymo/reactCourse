import React from 'react';

// this style of Higher Order Component is good for adding addional HTML elements or classes
/* const withClass = props => (
  <div className={props.classes}>{props.children}</div>
); */

// this style of HOC is better for adding functionality e.g. error handling, HTTP requests
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
