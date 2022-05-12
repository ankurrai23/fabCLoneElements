import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';

import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: DP._16,
  },
  title: {
    fontSize: DP._20,
    marginLeft: DP._10,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._52,
    marginTop: DP._12,
  },
  cancelMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._50,
    marginTop: DP._20,
    fontSize: DP._14,
    color: Color.DARK,
  },
  dates: {
    fontSize: DP._12,
  },
  tripId: {
    fontSize: DP._12,
    color: Color.BLUEY_GREY,
    marginRight: DP._16,
  },
  subContainer: {marginTop: DP._24, paddingHorizontal: DP._16},
  detailsContainer: {flexDirection: 'row', marginBottom: DP._8},
  detailsContainer_2: {flexDirection: 'row', marginBottom: DP._16},
  detailsTitle: {color: Color.GREYISH_PURPLE},
});
