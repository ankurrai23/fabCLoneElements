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
    marginRight: addRightMargin ? DP._26_3 : 0,
  }),
  text: {
    color: Color.WHITE,
    fontSize: DP._12,
  },
  textContainer: (error) => ({
    height: DP._18,
    width: DP._18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.TWILIGHT_BLUE,
    borderRadius: DP._15,
    marginRight: DP._8,
    marginTop: error ? DP._10 : DP._12,
  }),
  dashedLine: {
    left: DP._8,
    top: DP._40,
    position: 'absolute',
    height: '100%',
    zIndex: -1,
  },
  closeButton: {
    marginLeft: DP._8,
    marginTop: DP._12,
  },
});
