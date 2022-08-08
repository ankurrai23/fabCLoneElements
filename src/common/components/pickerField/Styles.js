import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: (error) => ({
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: DP._1,
    borderColor: error ? Color.DARK_CORAL : Color.PALE_GREY_THREE,
    borderRadius: DP._4,
    paddingHorizontal: DP._16,
    height: DP._46,
  }),
  floatLabel: (error, value) => ({
    color: error ? Color.DARK_CORAL : Color.GREY_PURPLE,
    position: 'absolute',
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._4,
    fontSize: value ? DP._12 : DP._14,
    top: DP.minus_8,
    left: DP._12,
  }),
  placeholder: {
    flex: 1,
    color: Color.GREY_PURPLE,
    fontSize: DP._14,
  },
  value: (editable) => ({
    flex: 1,
    fontSize: DP._14,
    color: editable ? Color.DARK : Color.GREY_PURPLE,
  }),
  iconContainer: (isLeftIcon) => ({
    alignSelf: 'center',
    height: DP._16,
    width: DP._16,
    overflow: 'hidden',
    marginRight: isLeftIcon ? DP._8 : 0,
    marginLeft: isLeftIcon ? 0 : DP._8,
  }),
  helperTextContainer: {
    minHeight: DP._14,
    justifyContent: 'flex-end',
  },
  helperText: (error) => ({
    color: error ? Color.DARK_CORAL : Color.GREY_PURPLE,
    marginTop: DP._2,
    fontSize: DP._11,
    lineHeight: DP._12,
  }),
});
