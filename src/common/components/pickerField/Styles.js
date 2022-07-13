import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: (error, marginTop) => ({
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderWidth: DP._1,
    borderColor: error ? Color.DARK_CORAL : Color.PALE_GREY_THREE,
    borderRadius: DP._4,
    paddingHorizontal: DP._16,
    paddingVertical: DP._12,
    marginTop: marginTop,
  }),
  floatLabel: (error) => ({
    color: error ? Color.DARK_CORAL : Color.GREY_PURPLE,
    position: 'absolute',
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._4,
    fontSize: DP._12,
    top: DP.minus_6,
    left: DP._12,
  }),
  placeholder: (error) => ({
    flex: 1,
    color: error ? Color.DARK_CORAL : Color.GREY_PURPLE,
    fontSize: DP._14,
  }),
  value: (editable, error) => ({
    flex: 1,
    fontSize: DP._14,
    color: editable
      ? !error
        ? Color.DARK
        : Color.GREY_PURPLE
      : Color.GREY_PURPLE,
  }),
  iconContainer: (isLeftIcon) => ({
    alignSelf: 'center',
    height: DP._24,
    width: DP._24,
    overflow: 'hidden',
    marginRight: isLeftIcon ? DP._8 : 0,
  }),
  helperTextContainer: (marginBottom) => ({
    minHeight: marginBottom ? DP._16 + marginBottom : DP._16,
    justifyContent: 'flex-end',
  }),
  helperText: (error) => ({
    color: error ? Color.DARK_CORAL : Color.GREY_PURPLE,
    fontSize: DP._12,
    lineHeight: DP._16,
  }),
});
