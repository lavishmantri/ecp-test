import React from 'react';
import PropTypes from 'prop-types';

const RandomColor = props =>
  <div
    onClick={props.onClick}
    style={{
      backgroundColor: props.color,
      color: props.color === '#000' ? '#fff' : '#000',
    }}
    className="random-color"
  >
    {props.isLoading ? 'Loading color.....' : props.text}
  </div>;

RandomColor.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
};

export default RandomColor;
