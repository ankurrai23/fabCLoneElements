import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: {
    padding: DP._24,
  },
  titleText: {
    fontSize: DP._20,
    lineHeight: DP._28,
    marginBottom: DP._14,
  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: DP._18,
  },
  valueText: {
    fontSize: DP._16,
    lineHeight: DP._21,
  },
});
