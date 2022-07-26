import {StyleSheet} from 'react-native';

import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  btnStyle: (isDirty, marginBottom) => ({
    borderWidth: 1,
    borderColor: !isDirty ? Color.HAWKES_BLUE : Color.DODGER_BLUE,
    backgroundColor: Color.WHITE,
    marginBottom: marginBottom ? marginBottom : DP._32,
  }),
  btnTextStyle: (isDirty) => ({
    fontSize: !isDirty ? DP._16 : DP._14,
    lineHeight: DP._18,
    color: !isDirty ? Color.HAWKES_BLUE : Color.DODGER_BLUE,
  }),
  container: {
    backgroundColor: Color.WHITE,
    // paddingHorizontal: DP._16,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    // marginTop: DP._8,
  },
  innerContainer: {
    // marginTop: DP._10,
  },
  textFieldLabel: {
    backgroundColor: Color.WHITE,
  },
  datesContainer: {
    flexDirection: 'row',
  },
  errorTitle: {
    fontSize: DP._12,
    color: Color.PASTEL_RED,
    // marginTop: DP._8,
  },
  addCityBtnView: {
    paddingVertical: DP._8,
    borderWidth: 1,
    borderColor: Color.DODGER_BLUE,
    borderStyle: 'dashed',
    // marginHorizontal: DP._16,
    // marginVertical: DP._14,
    borderRadius: DP._8,
    alignItems: 'center',
  },
  addCityTxt: {
    fontSize: DP._14,
    lineHeight: DP._18,
    color: Color.DODGER_BLUE,
  },
  briefCardStyle_container: {
    borderWidth: 1,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderRadius: DP._8,
    padding: DP._16,
    // marginHorizontal: DP._16,
  },
  briefCardBottomMargin: (margin) => ({
    marginBottom: margin ? margin : DP._16,
  }),
  briefCardStyle_flexView: (margin) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...(margin && {
      marginTop: DP._8,
    }),
  }),
  briefCardStyle_sourceTxt: {
    fontSize: DP._17,
    lineHeight: DP._21,
    color: Color.DARK_BLUE,
  },
  briefCardStyle_iteneryView: {
    height: DP._16,
    width: DP._66,
    paddingHorizontal: DP._8,
    backgroundColor: Color.PURPLEY,
    borderRadius: DP._9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  briefCardStyle_itineraryTxt: {
    fontSize: DP._10,
    lineHeight: DP._12,
    color: Color.WHITE,
  },
  briefCardStyle_flex6: {
    flex: 6,
  },
  briefCardStyle_editTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
  },
  briefCardStyle_dateTxt: {
    fontSize: DP._14,
    lineHeight: DP._18,
    color: Color.DARK,
  },
  briefCardStyle_touchView: {
    top: DP._10,
    bottom: DP._10,
    left: DP._10,
    right: DP._14,
  },
  errorTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.PASTEL_RED,
    paddingHorizontal: DP._16,
    paddingTop: DP._4,
  },
});
