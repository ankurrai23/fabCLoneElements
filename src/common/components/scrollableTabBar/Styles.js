import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export const MAX_TAB_WIDTH = 100;
export const ANIMATION_DURATION = 250;

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    zIndex: 1,
    borderBottomColor: Color.PALE_GREY_THREE,
    borderBottomWidth: DP._1,
    shadowColor: Color.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    height: DP._2,
    backgroundColor: Color.DODGER_BLUE,
    width: MAX_TAB_WIDTH,
    borderTopLeftRadius: 2.5,
    borderTopRightRadius: 2.5,
    overflow: 'hidden',
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: DP._16,
  },
});
