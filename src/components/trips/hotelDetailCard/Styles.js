import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    borderRadius: DP._12,
    backgroundColor: Color.WHITE,
    marginTop: DP._8,
    ...shadowObj,
  },
  subContainer: (modified) => ({
    opacity: modified ? 0.4 : 1,
    padding: DP._16,
  }),
  addressText: {
    fontSize: DP._12,
    lineHeight: DP._18,
    color: Color.GREYISH_PURPLE,
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
  },
  modify: {
    color: Color.DODGER_BLUE,
  },
  buttonContainer: {
    padding: DP._16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.DODGER_BLUE + '12',
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
    marginVertical: DP._16,
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
  coTravellerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: DP._8,
  },
  inclusionContainer: {
    flexDirection: 'row',
    marginVertical: DP._8,
  },
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
  directionIcon: {transform: [{rotateZ: '45deg'}], bottom: 2, right: 2},
  searchIcon: {position: 'absolute', bottom: DP._4, right: DP._4},
  bookingDetailsContainer: {marginLeft: DP._8, flex: 1},
  flexRow: {flexDirection: 'row'},
  paymentStatusContainer: {lineHeight: DP._16, flexDirection: 'row'},
  modalHeading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'center',
    marginVertical: DP._20,
  },
  halfFlex: {
    flex: 0.5,
  },
  postTripActionContainer: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    marginBottom: DP._4,
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
});
