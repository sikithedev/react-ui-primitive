import PropTypes from 'prop-types';

export const propTypes = {
  backgroundColor: PropTypes.string,
};

export const parseProps = ({ backgroundColor, styles, ...props }) => {
  const newStyles = {
    backgroundColor,
  };

  return {
    style: {
      ...newStyles,
      ...styles,
    },
    ...props,
  };
};
