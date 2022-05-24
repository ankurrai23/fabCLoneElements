import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

export default StyleSheet.create({
  removeItinerary: {
    flexDirection: 'row',
    paddingHorizontal: DP._16,
    marginVertical: DP._5,
    marginTop: DP._21,
    justifyContent: 'space-between',
  },
  itineraryTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DARK,
  },
  removeTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.PASTEL_RED,
  },
  removeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeSlope: {
    top: 20,
    bottom: 10,
    left: 20,
    right: 10,
  },
});
