import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.fabhotel';

export default StyleSheet.create({
  container: {
    paddingTop: DP._14,
  },
  titleText: {
    fontSize: DP._20,
    lineHeight: DP._28,
    marginBottom: DP._14,
    marginLeft: DP._24,
  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: DP._18,
    marginHorizontal: DP._24,
  },
  valueText: {
    fontSize: DP._16,
    lineHeight: DP._21,
  },
  separator: {
    marginVertical: DP._12,
    marginHorizontal: DP._24,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  subTitle: {
    fontSize: DP._14,
    marginLeft: DP._4,
    color: Color.FORD_GRAY,
  },
  feeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: DP._4,
    marginHorizontal: DP._24,
  },
  buttonStyle: {
    marginTop: DP._4,
    marginHorizontal: DP._24,
    borderRadius: DP._30,
  },
  buttonText: {
    fontSize: DP._16,
    lineHeight: DP._24,
  },
  paidAmountText: {
    marginBottom: DP._20,
  },
  exclConvMsg: {
    marginLeft: DP._24,
    fontSize: DP._11,
  },
});
