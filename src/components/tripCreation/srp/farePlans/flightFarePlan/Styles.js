import {StyleSheet} from 'react-native';
import {DP} from '../../../../../utils/Dimen';
import {cardStyleObj} from '../../../../../utils/Utils';
import {Color} from '../../../../../utils/color/index.fabhotel';

export default StyleSheet.create({
  container: {
    paddingBottom: DP._18,
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
    marginTop: DP._6,
    alignItems: 'flex-start',
  },
  planTitle: {
    fontSize: DP._14,
    lineHeight: DP._17,
    color: Color.DARK,
    marginEnd: DP._16,
  },
  planPrice: (isOOP) => ({
    fontSize: DP._14,
    lineHeight: DP._17,
    marginEnd: DP._12,
    color: Color.DARK,
    marginBottom: isOOP ? DP._4 : 0,
  }),
  planDetailItem: {
    flexDirection: 'row',
    margin: DP._16,
    marginBottom: 0,
  },
  planDetailTitle: {
    fontSize: DP._12,
    lineHeight: DP._14,
    marginEnd: DP._8,
    color: Color.GREY_PURPLE,
    marginLeft: DP._4,
    flex: 1,
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
  perAdultStyle: {
    fontSize: DP._10,
    color: Color.FORD_GRAY,
  },
});
