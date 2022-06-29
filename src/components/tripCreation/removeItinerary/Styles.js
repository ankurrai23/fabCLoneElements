import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

export default StyleSheet.create({
  removeItinerary: {
    flexDirection: 'row',
    paddingHorizontal: DP._16,
    // marginVertical: DP._5,
    justifyContent: 'space-between',
  },
  itineraryTxt: {
    fontSize: DP._14,
    lineHeight: DP._17,
    color: Color.DARK,
  },
  removeTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.PASTEL_RED,
  },
  errorTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.PASTEL_RED,
    paddingHorizontal: DP._16,
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
