import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from './props';

const Element = ({ as, children, ...props }) => {
  return React.createElement(as || 'div', props, children);
};

Element.displayName = 'Element';

Element.propTypes = {
  ...propTypes,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType,
  ]),
};

Element.defaultProps = {
  as: 'div',
};

export default Element;
