import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../../utils/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...shadowObj,
    ...cardStyleObj,
    overflow: 'hidden',
  },
  card: (reduceOpacity) => ({
    opacity: reduceOpacity ? 0.6 : 1,
  }),
  dateAndStatusContainer: {
    flexDirection: 'row',
    marginBottom: DP._12,
    justifyContent: 'space-between',
    paddingTop: DP._12,
    paddingHorizontal: DP._16,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hyphen: {
    alignSelf: 'center',
    fontSize: DP._12,
    color: Color.BLUEY_GREY,
  },
  colorDark: {
    color: Color.DARK,
  },
  statusContainer: {
    backgroundColor: Color.DARK_SEA_FOAM + '1a',
    paddingHorizontal: DP._8,
    paddingVertical: DP._4,
    borderRadius: DP._11,
    overflow: 'hidden',
    color: Color.DARK_SEA_FOAM,
    fontSize: DP._12,
  },
  hotelName: {
    paddingHorizontal: DP._16,
    fontSize: DP._14,
    marginBottom: DP._2,
    lineHeight: DP._20,
  },
  hotelLocation: {
    color: Color.GREYISH_PURPLE,
    paddingHorizontal: DP._16,
    fontSize: DP._12,
    lineHeight: DP._16,
  },
  modificationChargeText: {
    fontSize: DP._12,
    lineHeight: DP._16,
    paddingLeft: DP._16,
    paddingVertical: DP._8,
    backgroundColor: Color.DODGER_BLUE + '12',
  },
  date: {
    fontSize: DP._14,
    lineHeight: DP._16,
  },
  month: {
    fontSize: DP._14,
    lineHeight: DP._16,
    color: Color.BLUEY_GREY,
  },
  checkInContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._16,
  },
  checkIn: (color) => ({
    fontSize: DP._12,
    color: color,
    lineHeight: DP._14,
    marginTop: DP._4,
  }),
  icon: {
    width: DP._30,
    height: DP._30,
    marginRight: DP._8,
  },
  dashedLineContainer: {
    position: 'absolute',
    height: '100%',
    zIndex: 1,
    left: 15,
    top: 30,
    paddingTop: DP._4,
    paddingBottom: DP._10,
  },
  flexRow: {flexDirection: 'row'},
  checkInAndDirectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomTypeAndPriceContainer: {
    marginTop: DP._16,
    flexDirection: 'row',
    paddingHorizontal: DP._16,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  ratePlanContainer: {
    flex: 1,
    marginEnd: DP._10,
  },
  priceAndGstContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: DP._4,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: DP._16,
    marginEnd: DP._4,
    marginBottom: -2,
    color: Color.DARK,
  },
  priceDetail: {
    fontSize: DP._10,
    color: Color.BATTLESHIP_GREY_TWO,
  },
  roomType: {
    fontSize: DP._12,
    color: Color.DARK,
  },
  mealType: {
    fontSize: DP._12,
    color: Color.GREYISH_PURPLE,
    marginTop: DP._4,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: DP._8,
    paddingHorizontal: DP._16,
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  flexRowAndAlignCenter: {flexDirection: 'row', alignItems: 'center'},
  cancel: {
    color: Color.PASTEL_RED,
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  reschedule: {
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  primaryButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._16,
  },
  rescheduleIcon: {
    width: DP._18,
    height: DP._18,
    resizeMode: 'contain',
  },
  chevronContainer: {
    backgroundColor: Color.DODGER_BLUE + '12',
    padding: DP._3,
    borderRadius: DP._12,
  },
  bookingIdText: {
    fontSize: DP._12,
    color: Color.BLUEY_GREY,
    lineHeight: DP._14,
    paddingStart: DP._16,
    paddingVertical: DP._8,
  },
  bookingId: {
    fontSize: DP._12,
    color: Color.DARK,
    lineHeight: DP._14,
    paddingVertical: DP._8,
  },
  separatorStyle: {
    backgroundColor: Color.LIGHT_PERIWINKLE,
    marginHorizontal: DP._16,
  },
  animatedComponent: {
    flex: 1,
    width: DP._60,
  },
  priceLoading: {
    height: DP._20,
    width: DP._60,
    backgroundColor: Color.VERY_LIGHT_PINK,
    borderRadius: DP._2,
  },
  processing: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.GREY_PURPLE,
    marginLeft: DP._4,
  },
  separatorContainerStyle: {
    backgroundColor: Color.HAWKES_BLUE,
    marginHorizontal: DP._16,
  },
});
