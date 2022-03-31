import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';

import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    paddingVertical: DP._20,
    marginBottom: DP._5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
  },
  flexRow: {
    flexDirection: 'row',
  },
  addDetails: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
  },
  renderRoute: {
    backgroundColor: Color.WHITE,
    padding: DP._15,
    borderRadius: DP._12,
    marginTop: DP._13,
    ...shadowObj,
    borderWidth: 0.3,
    borderColor: Color.LIGHT_PERIWINKLE,
  },
  routeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DP._15,
  },
  cityName: {
    fontSize: DP._14,
    color: Color.GREY_PURPLE,
  },
  date: {
    fontSize: DP._12,
    color: Color.DARK,
    marginVertical: DP._4,
  },
  slotContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  slotText: {
    fontSize: DP._12,
    lineHeight: DP._17,
    color: Color.TWILIGHT_BLUE,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderValue: {
    fontSize: DP._16,
    color: Color.DARK,
    lineHeight: DP._20,
  },
  monthlabel: {
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
  },
  cityCodeLabel: {
    fontSize: DP._16,
    color: Color.DARK,
    marginTop: DP._4,
  },
  cityCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
  },
  errorDetailTxt: {
    fontSize: DP._14,
    color: Color.PASTEL_RED,
    lineHeight: DP._18,
    marginTop: 5,
  },
  addFlightTxt: {
    fontSize: DP._14,
    color: Color.DODGER_BLUE,
  },
  renderNewRoute: {
    backgroundColor: Color.WHITE,
    // padding: DP._15,
    borderRadius: DP._12,
    // marginTop: DP._13,
    ...shadowObj,
    borderWidth: 0.3,
    borderColor: Color.LIGHT_PERIWINKLE,
    marginTop: DP._12,
    alignItems: 'center',
    paddingVertical: DP._36,
    justifyContent: 'center',
  },
  innerViewFlight: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: DP._14,
    borderColor: Color.DODGER_BLUE,
    alignItems: 'center',
    height: DP._28,
    justifyContent: 'center',
    width: 187,
  },
});
