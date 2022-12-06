import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  filledBarStyle: {
    height: DP._4,
    backgroundColor: 'lightgrey',
    position: 'absolute',
  },
  unfilledBar: {
    width: '100%',
    height: DP._4,
    backgroundColor: 'lightgrey',
  },
  thumbStyle: {
    width: DP._24,
    height: DP._24,
    borderRadius: DP._12,
    backgroundColor: Color.TWILIGHT_BLUE,
    borderWidth: DP._2,
    borderColor: Color.WHITE,
  },
  leftThumbStyle: {
    position: 'absolute',
  },
  rightThumbStyle: {
    position: 'absolute',
    // backgroundColor: 'red',
    // right: 0,
  },
});
