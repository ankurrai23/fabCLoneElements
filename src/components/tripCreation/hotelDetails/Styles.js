import {StyleSheet} from 'react-native';

import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    lineHeight: DP._20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addDetails: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
    marginLeft: DP._6,
    lineHeight: DP._16,
  },
  innerContainer: {
    backgroundColor: Color.WHITE,
    flexWrap: 'wrap',
    paddingHorizontal: DP._16,
    paddingBottom: DP._16,
    borderRadius: DP._12,
    marginTop: DP._16,
    ...shadowObj,
    borderWidth: 0.3,
    borderColor: Color.LIGHT_PERIWINKLE,
  },
  renderItem: {
    marginTop: DP._16,
    width: '100%',
  },
  rendercity: {
    marginTop: DP._10,
  },
  renderValue: {
    fontSize: DP._16,
    color: Color.DARK,
    lineHeight: DP._20,
  },
  renderCityTxt: {
    fontSize: DP._16,
    color: Color.DARK,
  },
  renderLocality: {
    fontSize: DP._14,
    color: Color.GREY_PURPLE,
    marginTop: DP._6,
  },
  flexdirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthlabel: {
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
  },
  errorDetailTxt: {
    fontSize: DP._11,
    lineHeight: DP._12,
    color: Color.PASTEL_RED,
    marginTop: DP._2,
  },
  hitSlop: {
    top: DP._15,
    bottom: DP._15,
    left: DP._10,
    right: 0,
  },
  itemContainer: {
    marginTop: DP._8,
  },
});
