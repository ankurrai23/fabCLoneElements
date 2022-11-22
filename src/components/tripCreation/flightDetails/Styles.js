import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';

import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  headerStyle: (data) => ({
    marginBottom: data?.length ? DP._16 : 0,
  }),
  cardStyle: (data, index) => ({
    marginBottom: data?.length - 1 === index ? 0 : DP._16,
  }),
  errorDetailText: {
    fontSize: DP._11,
    color: Color.PASTEL_RED,
    lineHeight: DP._12,
    marginTop: DP._2,
  },
});
