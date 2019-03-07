import React from 'react';

const Spinner = (props) => {
  return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{props.showMessage}</div>
      </div>
  );
};

export default Spinner;
