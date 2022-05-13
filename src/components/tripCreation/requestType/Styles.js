import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    marginTop: DP._25,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DP._12,
  },
  buttonStyle: {
    flex: 1,
    borderRadius: DP._12,
  },
  middleButton: {
    marginHorizontal: DP._8,
  },
  textText: {
    color: Color.DARK,
    fontSize: DP._12,
    lineHeight: DP._15,
  },
});
