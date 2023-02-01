import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.fabhotel';
import {DP} from '../../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../../utils/Utils';

export default StyleSheet.create({
  container: {
    ...shadowObj,
    ...cardStyleObj,
  },
  subContainer: {
    padding: DP._16,
    paddingBottom: 0,
  },
  addressText: {
    fontSize: DP._12,
    lineHeight: DP._18,
    color: Color.GREYISH_PURPLE,
    marginBottom: DP._16,
  },
  weatherIcon: {
    width: DP._14,
    height: DP._14,
  },
  sectionTitle: {
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
    marginBottom: DP._8,
  },
  cancel: {
    color: Color.PASTEL_RED,
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  modify: {
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  buttonContainer: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  paymentModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: DP._8,
    justifyContent: 'space-between',
  },
  moreInclustion: {
    marginTop: DP._8,
    textAlign: 'right',
    color: Color.DODGER_BLUE,
  },
  separator: {
    backgroundColor: Color.LIGHT_PERIWINKLE,
  },
  hotelNameAndImageContainer: {
    flexDirection: 'row',
    marginBottom: DP._8,
  },
  checkInTIme: {
    fontSize: DP._10,
    paddingHorizontal: DP._8,
    paddingVertical: DP._1,
    color: Color.DARK_SLATE_BLUE,
    backgroundColor: Color.PALE_GREY,
    borderRadius: DP._10,
    overflow: 'hidden',
    marginTop: DP._8,
  },
  coTravellerContainer: (lastItem) => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._8,
    marginBottom: lastItem ? DP._16 : 0,
  }),
  inclusionContainer: (lastItem) => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._8,
    marginBottom: lastItem ? DP._16 : 0,
  }),
  alignCenter: {
    alignItems: 'center',
  },
  flexRowWithSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowWithAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hotelImage: {
    width: DP._88,
    height: DP._80,
    resizeMode: 'cover',
    borderRadius: DP._8,
    backgroundColor: Color.GREY_PURPLE + '1a',
  },
  // directionIcon: {bottom: 2, right: 2},
  searchIcon: {position: 'absolute', bottom: DP._4, right: DP._4},
  bookingDetailsContainer: {flex: 1, marginBottom: DP._8},
  flexRow: {flexDirection: 'row'},
  paymentStatusContainer: {
    lineHeight: DP._16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalHeading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'left',
    marginVertical: DP._20,
  },
  halfFlex: {
    flex: 0.5,
  },
  postTripActionContainer: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    marginBottom: DP._16,
    borderRadius: DP._8,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._0_5,
    ...shadowObj,
  },
  postTripButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactSupportButton: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._14,
    backgroundColor: Color.WHITE,
    marginTop: DP._16,
    borderWidth: 0.5,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderRadius: DP._8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadowObj,
  },
  rescheduleIcon: {
    width: DP._18,
    height: DP._18,
    resizeMode: 'contain',
  },
  modifyButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._16,
  },
  cancelButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewDetailView: {
    paddingVertical: DP._8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    height: 0,
  },
  showMoreTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DODGER_BLUE,
    marginRight: 3,
  },
  viewDetailHitSlop: {
    top: DP._15,
    bottom: DP._15,
    left: DP._15,
    right: DP._15,
  },
  inclusionIcon: {
    height: DP._16,
    width: DP._16,
    marginRight: DP._8,
  },
  actionSeparator: {
    backgroundColor: Color.LIGHT_PERIWINKLE,
    marginHorizontal: DP._16,
  },
  payNowButtonStyle: {
    marginTop: DP._4,
    marginBottom: DP._16,
    borderRadius: DP._30,
  },
});
