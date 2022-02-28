import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: (type, selected, disabled) => ({
    borderRadius: DP._20,
    paddingVertical: DP._12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'PRIMARY' ? Color.SUN_YELLOW : Color.ICE_BLUE,
    ...(selected && {
      backgroundColor:
        type === 'PRIMARY' ? Color.SUN_YELLOW : Color.DODGER_BLUE,
    }),
    ...(disabled && {
      backgroundColor: Color.BLUEY_GREY,
    }),
  }),
  textStyle: (type, disabled) => ({
    fontSize: DP._14,
    color:
      type === 'PRIMARY'
        ? disabled
          ? Color.WHITE
          : Color.DARK
        : Color.DODGER_BLUE,
  }),
});
