import React from 'react';
import {TouchableOpacity} from 'react-native';

function FTouchableOpacity({children, ...props}) {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
}

FTouchableOpacity.propTypes = {};

FTouchableOpacity.defaultProps = {
  activeOpacity: 1,
};

export default FTouchableOpacity;
