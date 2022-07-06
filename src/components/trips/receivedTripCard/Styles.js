import {StyleSheet} from 'react-native';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    padding: DP._16,
    marginBottom: DP._16,
    ...shadowObj,
    ...cardStyleObj,
  },
  tripIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: DP._8,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DP._8,
  },
  listIcon: {
    height: DP._18,
    width: DP._18,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._24,
  },
  approveText: {
    fontSize: DP._12,
    marginLeft: DP._4,
    color: Color.DARK_SEA_FOAM,
  },
  actionText: (color) => ({
    fontSize: DP._12,
    marginLeft: DP._4,
    color: color,
  }),
  rejectText: {
    fontSize: DP._12,
    marginLeft: DP._4,
    color: Color.PASTEL_RED,
  },
  detailsText: {
    fontSize: DP._12,
    marginLeft: DP._4,
    color: Color.DODGER_BLUE,
  },
  tripId: {
    fontSize: DP._10,
    color: Color.GREY_PURPLE,
  },
  weatherImg: {
    marginRight: DP._5,
    height: DP._14,
    width: DP._14,
  },
  destination: {
    fontSize: DP._14,
    color: Color.DARK,
  },
  date: {
    fontSize: DP._14,
    color: Color.DARK,
  },
  hotelText: {
    flex: 1,
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
    marginLeft: DP._8,
  },
  footer: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'flex-end',
    borderColor: Color.SILVER,
    borderTopWidth: DP._1,
    paddingTop: DP._16,
    marginTop: DP._8,
  },
  linkText: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
    marginLeft: DP._8,
  },
  cancelledDot: {
    backgroundColor: Color.PASTEL_RED,
    height: DP._14,
    width: DP._14,
    marginHorizontal: DP._2,
    borderRadius: DP._100,
  },
  cancelledText: {
    fontSize: DP._12,
    color: Color.PASTEL_RED,
    marginLeft: DP._8,
  },
  flexRows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelRequest: {
    fontSize: DP._12,
    marginLeft: DP._4,
    color: Color.PASTEL_RED,
  },
  imageStyle: {
    width: DP._24,
    height: DP._24,
    marginRight: DP._4,
    resizeMode: 'contain',
  },
  action: (type) => ({
    fontSize: DP._12,
  }),
  rescheduleIcon: {
    width: DP._18,
    height: DP._18,
    tintColor: Color.BLUEY_GREY,
    marginRight: DP._4,
  },
  flexRowAndAlignCenter: {flexDirection: 'row', alignItems: 'center'},
  flexDirectionRow: {flexDirection: 'row'},
  modalHeading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'center',
    marginVertical: DP._20,
  },
  bell: {width: DP._24, height: DP._24, resizeMode: 'contain'},
  justifyBetween: {justifyContent: 'space-between'},
  flex: {
    flex: 1,
  },
});
