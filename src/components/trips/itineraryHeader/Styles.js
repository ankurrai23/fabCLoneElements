import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.fabhotel';

import {DP} from '../../../utils/Dimen';
import {isPlatformIos} from '../../../utils/Utils';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: DP._16,
  },
  flexRow: {
    flexDirection: 'row',
  },
  title: {
    fontSize: DP._20,
    marginLeft: DP._16,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._56,
    marginTop: DP._12,
  },
  cancelMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._56,
    marginTop: DP._16,
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
  subContainer: {
    marginTop: DP._16,
    paddingHorizontal: DP._16,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: DP._8,
  },
  detailsContainer_2: {
    flexDirection: 'row',
    marginBottom: DP._16,
  },
  detailsTitle: {
    color: Color.GREYISH_PURPLE,
  },
  container: {
    paddingTop: isPlatformIos() ? DP._10 : DP._20,
    backgroundColor: 'white',
  },
  approvalPendingInfoContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.DEEP_SAFFRON + '1a',
    marginTop: DP._8,
  },
  paymentPendingContainer: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
    backgroundColor: Color.PASTEL_RED_10,
    marginTop: DP._8,
  },
  approvalPendingInfoText: {
    fontSize: DP._10,
    lineHeight: DP._12,
  },
  trackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  approvalText: {width: '85%', flexGrow: 1, paddingRight: DP._8},
  paymentPending: {
    fontSize: DP._10,
    color: Color.PASTEL_RED,
    marginBottom: DP._4,
  },
  fontSize10: {
    fontSize: DP._10,
    lineHeight: DP._12,
  },
});
