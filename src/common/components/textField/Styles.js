import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {Specs} from '../../../utils/Utils';

export default StyleSheet.create({
  mainContainer: {
    marginTop: DP._16,
  },
  container: (focused, error) => ({
    flexDirection: 'row',
    borderWidth: DP._1,
    borderColor: error
      ? Color.PASTEL_RED
      : focused
      ? Color.DODGER_BLUE
      : Color.PALE_GREY_THREE,
    borderRadius: DP._4,
    paddingRight: DP._12,
    paddingLeft: DP._16,
  }),
  iconContainer: {
    alignSelf: 'center',
    height: DP._20,
    width: DP._20,
    overflow: 'hidden',
    marginHorizontal: DP._4,
  },
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
  helperText: (error) => ({
    color: error ? Color.PASTEL_RED : Color.GREY_PURPLE,
    fontSize: DP._12,
    minHeight: DP._16,
    lineHeight: DP._16,
    marginLeft: DP._16,
  }),
});
