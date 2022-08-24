import React from 'react';

import FTouchableOpacity from '../../rn/FTouchableOpacity';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';
import Icon from '../../../assets/icons/Icon';

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
        <Icon.Check
          width={size - DP._4}
          height={size - DP._4}
          stroke={Color.WHITE}
        />
      ) : null}
    </FTouchableOpacity>
  );
};

export default Checkbox;
