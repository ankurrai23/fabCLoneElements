import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

export default StyleSheet.create({
  container: {
    paddingVertical: DP._24,
  },
  head: {
    color: Color.DARK_BLUE,
    textAlign: 'center',
    fontSize: DP._16,
    lineHeight: DP._24,
    marginBottom: DP._20,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: DP._14,
    paddingHorizontal: DP._24,
  },
  option: {
    color: Color.BATTLESHIP_GREY_TWO,
    fontSize: DP._14,
  },
  icon: {
    color: Color.BATTLESHIP_GREY_TWO,
    marginRight: DP._10,
    fontSize: DP._24,
  },
});
