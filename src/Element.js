import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from './props';

const Element = ({ as, theme, ...props }) => {
  return React.createElement(as || 'div');
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
