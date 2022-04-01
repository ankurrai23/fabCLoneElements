import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  imageText: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingVertical: DP._22,
    paddingHorizontal: DP._20,
    flexDirection: 'row',
  },
  priceView: {
    flex: 3,
    alignItems: 'flex-end',
  },
  allExpenseText: {
    fontSize: DP._16,
    color: Color.WHITE,
  },
  regularText: {
    fontSize: DP._14,
    color: Color.WHITE,
    paddingVertical: 10,
  },
  priceTxt: {
    fontSize: DP._20,
    color: Color.WHITE,
  },
});
