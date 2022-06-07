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
  value: (editable) => ({
    flex: 1,
    fontSize: DP._14,
    color: editable ? Color.DARK : Color.GREY_PURPLE,
  }),
  iconContainer: {
    alignSelf: 'center',
    height: DP._20,
    width: DP._20,
    overflow: 'hidden',
    marginHorizontal: DP._4,
  },
  helperText: (error, marginBottom) => ({
    color: error ? Color.DARK_CORAL : Color.GREY_PURPLE,
    fontSize: DP._12,
    minHeight: marginBottom ? DP._16 + marginBottom : DP._16,
    lineHeight: DP._16,
    marginLeft: DP._16,
  }),
});
