import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    padding: DP._16,
    // marginBottom: DP._8,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    marginTop: DP._8,
  },
  innerContainer: {
    marginTop: DP._10,
  },
  textFieldLabel: {
    backgroundColor: Color.WHITE,
  },
  datesContainer: {
    flexDirection: 'row',
  },
  errorTitle: {
    fontSize: DP._12,
    color: Color.PASTEL_RED,
    marginTop: DP._8,
  },
});
