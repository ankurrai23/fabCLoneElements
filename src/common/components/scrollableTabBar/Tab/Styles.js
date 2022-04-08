import {StyleSheet} from 'react-native';

import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';

export default StyleSheet.create({
  container: {
    paddingHorizontal: DP._25,
    paddingVertical: DP._16,
  },
  selectedText: {
    fontSize: DP._12,
    textAlign: 'center',
    color: Color.BATTLESHIP_GREY_TWO,
  },
  increasedTouchableArea: {
    left: DP._10,
    top: DP._10,
    right: DP._10,
    bottom: DP._10,
  },
});
