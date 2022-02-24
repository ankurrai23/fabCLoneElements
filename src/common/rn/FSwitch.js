import React from 'react';
import {Switch} from 'react-native';
import PropTypes from 'prop-types';

import {Color} from '../../utils/color';

function FSwitch(props) {
  return (
    <Switch
      trackColor={{
        false: Color.SILVER,
        true: Color.DODGER_BLUE,
      }}
      thumbColor={Color.WHITE}
      onValueChange={props.onChange}
      value={props.value}
    />
  );
}

FSwitch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

FSwitch.defaultProps = {
  value: false,
};

export default FSwitch;
