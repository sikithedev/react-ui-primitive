const splitProps = (props, keys) => {
  const matchedProps = {};
  const remainingProps = {};
  const propKeys = Object.keys(props);

  propKeys.forEach((key) => {
    if (keys.include(key)) {
      matchedProps[key] = props[key];
    } else {
      remainingProps[key] = props[key];
    }
  });

  return { matchedProps, remainingProps };
};

export default splitProps;
