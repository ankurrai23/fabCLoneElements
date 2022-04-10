import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import {shadowObj, Specs} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    // paddingHorizontal: DP._16,
    // flex: 1,
  },
  errorText: {
    fontSize: DP._12,
    color: Color.PASTEL_RED,
    ...Specs.fontRegular,
  },
  searchList: {
    // maxHeight: DP._100,
    zIndex: 2,
    backgroundColor: Color.WHITE,
    position: 'absolute',
    width: '100%',
    top: DP._63,
    borderColor: Color.WHITE,
    borderWidth: DP._1,
    ...shadowObj,
    borderBottomLeftRadius: DP._8,
    borderBottomRightRadius: DP._8,
    paddingVertical: DP._10,
  },
  separator: {
    height: DP._1,
    backgroundColor: Color.SILVER,
  },
  searchItem: {
    padding: DP._12,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  renderItemView: {
    marginLeft: DP._10,
  },
  imgView: {
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: DP._16,
    lineHeight: DP._19,
    color: Color.DARK,
  },
  subHeadingText: {
    fontSize: DP._14,
    lineHeight: DP._16,
    color: Color.BLUEY_GREY,
    marginTop: DP._5,
  },
  subTitleText: {
    fontSize: DP._16,
    lineHeight: DP._16,
  },
});
