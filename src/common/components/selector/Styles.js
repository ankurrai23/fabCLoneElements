import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    paddingVertical: DP._24,
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
    marginHorizontal: DP._24,
  },
});
