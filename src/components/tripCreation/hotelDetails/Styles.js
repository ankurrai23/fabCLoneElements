import {StyleSheet} from 'react-native';

import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    marginTop: DP._32,
    // marginBottom: DP._8,
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
    fontSize: DP._14,
    color: Color.PASTEL_RED,
    lineHeight: DP._18,
    marginTop: 5,
  },
  hitSlop: {
    top: DP._15,
    bottom: DP._15,
    left: DP._10,
    right: 0,
  },
});
