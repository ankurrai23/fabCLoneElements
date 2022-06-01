import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  textFieldContainer: (addRightMargin) => ({
    flex: 1,
    marginRight: addRightMargin ? DP._22_3 : 0,
  }),
  text: {
    color: Color.WHITE,
    fontSize: DP._12,
  },
  textContainer: {
    height: DP._18,
    width: DP._18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.TWILIGHT_BLUE,
    borderRadius: DP._15,
    marginRight: DP._8,
    marginTop: DP.minus_8,
  },
  dashedLine: {
    left: DP._8,
    top: DP._34,
    position: 'absolute',
    height: '100%',
    zIndex: -1,
  },
  closeButton: {
    marginLeft: DP._4,
    marginTop: DP.minus_8,
  },
});
