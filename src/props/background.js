import PropTypes from 'prop-types';

export const propTypes = {
  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export const parseProps = ({
  background,
  backgroundColor,
  backgroundImage,
  classname,
  ...props
}) => ({
  ...props,
  background,
  backgroundColor,
  backgroundImage,
  classname,
});
