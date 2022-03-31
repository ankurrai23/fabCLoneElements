import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    padding: DP._16,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    marginBottom: DP._16,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  initialsContainer: {
    height: DP._40,
    width: DP._40,
    backgroundColor: Color.PURPLEY_20,
    borderRadius: DP._50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: DP._8,
  },
  initials: {
    fontSize: DP._22,
    color: Color.PURPLEY,
  },
  managerName: {
    fontSize: DP._14,
    color: Color.DARK,
    lineHeight: DP._18,
  },
  designation: {
    fontSize: DP._14,
    color: Color.GREY_PURPLE,
    lineHeight: DP._18,
  },
});
