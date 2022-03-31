import {StyleSheet} from 'react-native';

import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  container: {
    flexGrow: 1,
  },
  topContainer: {
    flex: 1,
    padding: DP._16,
  },
  separator: {
    borderTopColor: Color.PALE_GREY_THREE,
    borderTopWidth: DP._8,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    marginTop: DP._8,
  },
  textFieldLabel: {
    backgroundColor: Color.WHITE,
  },
  datesContainer: {
    flexDirection: 'row',
  },
  timeSlotTitle: {
    fontSize: DP._12,
    color: Color.DARK,
    lineHeight: DP._18,
  },
  dash: {
    alignSelf: 'center',
  },
  button: {
    margin: DP._16,
    marginTop: 0,
  },
});
