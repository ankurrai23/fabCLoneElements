import {StyleSheet} from 'react-native';
import {DP} from '../../../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../../../utils/Utils';
import {Color} from '../../../../../utils/color/index.fabhotel';

export default StyleSheet.create({
  container: {
    paddingVertical: DP._8,
    paddingHorizontal: DP._16,
    ...shadowObj,
    ...cardStyleObj,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginEnd: DP._16,
  },
  cancellationPolicy: {
    marginTop: DP._4,
    fontSize: DP._10,
    lineHeight: DP._12,
    color: Color.DODGER_BLUE,
  },
  planTitle: {
    fontSize: DP._14,
    lineHeight: DP._17,
    color: Color.DARK,
    marginEnd: DP._16,
  },
  priceContent: {
    marginTop: DP._8,
    flexDirection: 'row',
  },
  planPrice: {
    fontSize: DP._14,
    lineHeight: DP._17,
    marginEnd: DP._4,
    color: Color.DARK,
    alignSelf: 'flex-end',
  },
  gstDetails: {
    fontSize: DP._10,
    lineHeight: DP._17,
    color: Color.FORD_GRAY,
    alignSelf: 'flex-end',
  },
  oopMargin: {
    marginTop: DP._3,
  },
});
