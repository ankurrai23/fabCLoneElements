import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {BUTTON_TYPE} from './index';

export default StyleSheet.create({
  container: (type, selected, disabled) => ({
    borderRadius: DP._20,
    paddingVertical: DP._12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      type === BUTTON_TYPE.PRIMARY ? Color.SUN_YELLOW : Color.WHITE_3,
    ...(selected && {
      backgroundColor:
        type === BUTTON_TYPE.SECONDARY ? Color.ICE_BLUE : Color.SUN_YELLOW,
      borderColor: Color.DODGER_BLUE,
      borderWidth: type === BUTTON_TYPE.SECONDARY ? 0.5 : 0,
    }),
    ...(disabled && {
      backgroundColor: Color.HAWKES_BLUE,
    }),
    ...(type === BUTTON_TYPE.NO_COLOR && {
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
      type === BUTTON_TYPE.PRIMARY
        ? disabled
          ? Color.WHITE
          : Color.DARK
        : type === BUTTON_TYPE.NO_COLOR
        ? Color.TWILIGHT_BLUE
        : Color.DODGER_BLUE,
  }),
});
