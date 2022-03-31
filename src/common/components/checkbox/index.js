import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FTouchableOpacity from '../../rn/FTouchableOpacity';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

import Styles from './Styles';

const Checkbox = ({
  toggleChecked,
  isChecked = false,
  size = 20,
  style,
  activeBorderColor = Color.DODGER_BLUE,
  inActiveBorderColor = Color.BATTLESHIP_GREY_TWO,
  ...props
}) => {
  return (
    <FTouchableOpacity
      style={[
        Styles.checkBox,
        {
          height: size,
          width: size,
          backgroundColor: isChecked ? activeBorderColor : undefined,
          borderColor: isChecked ? activeBorderColor : inActiveBorderColor,
        },
        style,
      ]}
      onPress={toggleChecked}
      {...props}>
      {isChecked ? (
        <MaterialIcons
          name="check"
          style={{
            color: Color.WHITE,
            fontSize: size - DP._4,
          }}
        />
      ) : null}
    </FTouchableOpacity>
  );
};

export default Checkbox;
