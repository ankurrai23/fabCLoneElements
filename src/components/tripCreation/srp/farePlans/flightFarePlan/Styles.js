import {StyleSheet} from 'react-native';
import {DP} from '../../../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../../../utils/Utils';
import {Color} from '../../../../../utils/color/index.fabhotel';

export default StyleSheet.create({
  container: {
    paddingBottom: DP._18,
    ...shadowObj,
    ...cardStyleObj,
  },
  flex: {
    flex: 1,
  },
  header: {
    paddingVertical: DP._8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: DP._16,
    paddingEnd: DP._18,
    justifyContent: 'space-between',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._6,
  },
  planTitle: {
    fontSize: DP._14,
    lineHeight: DP._17,
    color: Color.DARK,
    marginEnd: DP._16,
  },
  planPrice: {
    fontSize: DP._14,
    lineHeight: DP._17,
    marginEnd: DP._12,
    color: Color.DARK,
  },
  abovePricePolicy: {
    flexWrap: 'wrap',
  },
  abovePricePolicyText: {
    fontSize: DP._10,
    paddingVertical: DP._1,
    paddingHorizontal: DP._4,
    backgroundColor: Color.PASTEL_RED_10,
    borderRadius: DP._2,
    color: Color.PASTEL_RED,
  },
  planDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._18,
    marginStart: DP._16,
    marginEnd: DP._18,
  },
  planDetailTitle: {
    fontSize: DP._12,
    lineHeight: DP._14,
    marginEnd: DP._8,
    color: Color.GREY_PURPLE,
  },
  planIcon: {
    width: DP._20,
    marginEnd: DP._6,
    height: DP._20,
  },
  planDetailValue: (color) => ({
    fontSize: DP._12,
    lineHeight: DP._14,
    flex: 1,
    textAlign: 'right',
    color: color ?? Color.DARK,
  }),
});
