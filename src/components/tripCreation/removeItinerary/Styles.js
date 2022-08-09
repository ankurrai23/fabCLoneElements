import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

export default StyleSheet.create({
  marginBottom: (margin, itinerary) => ({
    marginBottom: margin ? margin : 0,
    marginTop: itinerary === 1 ? 0 : DP._8,
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
    paddingTop: DP._2,
    fontSize: DP._11,
    lineHeight: DP._12,
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
