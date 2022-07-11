import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

export default StyleSheet.create({
  marginBottom: (margin) => ({
    marginBottom: margin ? margin : 0,
  }),
  removeItinerary: {
    flexDirection: 'row',
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
    paddingTop: DP._5,
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
