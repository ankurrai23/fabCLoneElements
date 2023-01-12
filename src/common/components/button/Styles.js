import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: (type, selected, disabled) => ({
    borderRadius: DP._20,
    paddingVertical: DP._12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === 'PRIMARY' ? Color.SUN_YELLOW : Color.WHITE_3,
    ...(selected && {
      backgroundColor: type === 'SECONDARY' ? Color.ICE_BLUE : Color.SUN_YELLOW,
      borderColor: Color.DODGER_BLUE,
      borderWidth: type === 'SECONDARY' ? 0.5 : 0,
    }),
    ...(disabled && {
      backgroundColor: Color.HAWKES_BLUE,
    }),
    ...(type === 'NOCOLOR' && {
      borderWidth: DP._1,
      borderRadius: DP._25,
      borderColor: Color.TWILIGHT_BLUE,
      backgroundColor: Color.WHITE,
      textColor: Color.TWILIGHT_BLUE,
    }),
  }),
  textStyle: (type, disabled) => ({
    fontSize: DP._14,
    color:
      type === 'PRIMARY'
        ? disabled
          ? Color.WHITE
          : Color.DARK
        : type === 'NOCOLOR'
        ? Color.TWILIGHT_BLUE
        : Color.DODGER_BLUE,
  }),
});
