import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {Specs} from '../../../utils/Utils';

export default StyleSheet.create({
  mainContainer: (marginTop) => ({
    marginTop: marginTop,
  }),
  container: (focused, error) => ({
    flexDirection: 'row',
    borderWidth: DP._1,
    borderColor: error
      ? Color.PASTEL_RED
      : focused
      ? Color.DODGER_BLUE
      : Color.PALE_GREY_THREE,
    borderRadius: DP._4,
    paddingHorizontal: DP._16,
  }),
  iconContainer: (leftIcon) => ({
    alignSelf: 'center',
    height: DP._24,
    width: DP._24,
    overflow: 'hidden',
    marginRight: leftIcon ? DP._8 : 0,
  }),
  element: {
    position: 'relative',
    flex: 1,
  },
  input: (editable) => ({
    color: editable ? Color.BLACK : Color.GREY_PURPLE,
    height: DP._44,
    ...Specs.fontRegular,
  }),
  label: {
    color: Color.GREY_PURPLE,
    position: 'absolute',
    paddingHorizontal: DP._4,
    backgroundColor: Color.WHITE,
    lineHeight: DP._18,
    ...Specs.fontRegular,
  },
  helperTextContainer: (marginBottom) => ({
    minHeight: marginBottom ? DP._16 + marginBottom : DP._16,
    justifyContent: 'flex-end',
  }),
  helperText: (error) => ({
    color: error ? Color.PASTEL_RED : Color.GREY_PURPLE,
    fontSize: DP._12,
    lineHeight: DP._14,
  }),
});
