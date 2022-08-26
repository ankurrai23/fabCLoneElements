import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: (moreButton) => ({
    paddingLeft: DP._16,
    paddingRight: moreButton ? DP._8 : DP._16,
    paddingVertical: DP._10,
    backgroundColor: Color.WHITE_3,
    borderRadius: DP._12,
    marginRight: DP._8,
    alignItems: 'center',
    flexDirection: 'row',
  }),
  buttonSelected: {
    backgroundColor: Color.ICE_BLUE,
    borderWidth: 0.5,
    borderColor: Color.DODGER_BLUE,
  },
  date: {
    color: Color.DODGER_BLUE,
  },
  unselectedDate: {
    color: Color.DARK,
  },
  moreButton: {
    flexDirection: 'row',
  },
  calender: {
    marginRight: DP._4,
  },
  chevron: {
    marginLeft: DP._4,
  },
});
