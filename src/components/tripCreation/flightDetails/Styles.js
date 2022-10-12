import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';

import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: (request) => ({
    backgroundColor: Color.WHITE,
  }),
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderRoute: {
    backgroundColor: Color.WHITE,
    padding: DP._15,
    borderRadius: DP._12,
    marginTop: DP._16,
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
    fontSize: DP._11,
    color: Color.PASTEL_RED,
    lineHeight: DP._12,
    marginTop: DP._2,
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
  hitSlop: {
    top: DP._15,
    bottom: DP._15,
    left: DP._10,
    right: 0,
  },
  airplane: {
    transform: [{rotate: '90deg'}],
  },
  Flex: {
    flex: 1,
  },
  itemContainer: {
    marginTop: DP._8,
  },
});
