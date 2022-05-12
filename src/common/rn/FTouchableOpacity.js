import React from 'react';
import {TouchableOpacity} from 'react-native';

function FTouchableOpacity({children, ...props}) {
  return (
    <TouchableOpacity
      {...props}
      hitSlop={{top: 80, bottom: 80, left: 80, right: 80}}>
      {children}
    </TouchableOpacity>
  );
}

FTouchableOpacity.propTypes = {};

FTouchableOpacity.defaultProps = {
  activeOpacity: 1,
};

export default FTouchableOpacity;
