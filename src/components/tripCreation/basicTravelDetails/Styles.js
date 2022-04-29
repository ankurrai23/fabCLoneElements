import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    padding: DP._16,
    // marginBottom: DP._8,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    marginTop: DP._8,
  },
  innerContainer: {
    marginTop: DP._10,
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
    marginTop: DP._8,
  },
  btnStyle: {
    marginTop: DP._10,
    borderWidth: 1,
    borderColor: Color.DODGER_BLUE,
    backgroundColor: Color.WHITE,
  },
  listContainer: {
    borderWidth: 1,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderRadius: DP._8,
    paddingVertical: DP._16,
    paddingHorizontal: DP._16,
    marginTop: DP._6,
  },
  sourceTxt: {
    fontSize: DP._17,
    lineHeight: DP._21,
    color: Color.DARK_BLUE,
  },
  iteneryView: {
    height: DP._16,
    width: DP._63,
    paddingHorizontal: DP._8,
    backgroundColor: Color.PURPLEY,
    borderRadius: DP._9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itineraryTxt: {
    fontSize: DP._10,
    lineHeight: DP._12,
    color: Color.WHITE,
  },
  flex6: {
    flex: 6,
  },
  flexView: (margin) => ({
    flexDirection: 'row',
    alignItems: 'center',
    ...(margin && {
      marginTop: DP._9,
    }),
  }),
  editTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DODGER_BLUE,
    marginLeft: DP._6,
  },
  dateTxt: {
    fontSize: DP._14,
    lineHeight: DP._18,
    color: Color.DARK,
  },
  touchView: {
    top: 10,
    bottom: 10,
    left: 20,
    right: 15,
  },
  addCityBtnView: {
    paddingVertical: DP._8,
    borderWidth: 1,
    borderColor: Color.DODGER_BLUE,
    borderStyle: 'dashed',
    marginTop: DP._16,
    borderRadius: DP._8,
    alignItems: 'center',
  },
  addCityTxt: {
    fontSize: DP._14,
    lineHeight: DP._18,
    color: Color.DODGER_BLUE,
  },
  removeItinarary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DP._15,
  },
  removeTxt: {
    fontSize: DP._14,
    lineHeight: DP._18,
    marginLeft: DP._4,
  },
});
