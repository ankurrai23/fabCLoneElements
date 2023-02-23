import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export const bottomSheetHeight = 0.5 * DP.match_height;

export default StyleSheet.create({
  bar: {
    width: DP._56,
    height: DP._6,
    backgroundColor: Color.WHITESH_GREY,
    marginTop: DP._8,
    marginBottom: DP._24,
    borderRadius: DP._8,
    alignSelf: 'center',
  },
  sheet: {
    backgroundColor: Color.WHITE,
    height: bottomSheetHeight,
    width: DP.match_width,
    borderRadius: DP._24,
    // paddingHorizontal: DP._24,
    // paddingBottom: DP._24,
  },
  backdrop: {
    backgroundColor: '#32323280',
    ...StyleSheet.absoluteFill,
  },
  titleText: {
    fontSize: DP._18,
    lineHeight: DP._22,
    color: Color.BLACK,
  },
});
