import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: (offline) => ({
    backgroundColor: Color.WHITE,
    padding: offline && DP._16,
    borderRadius: DP._4,
    ...shadowObj,
  }),
  buttonStyle: (preference) => ({
    borderWidth: 1,
    padding: DP._10,
    borderRadius: DP._18,
    borderColor: preference ? Color.SUN_YELLOW : Color.TWILIGHT_BLUE,
    alignItems: 'center',
    backgroundColor: preference ? Color.SUN_YELLOW : 'transparent',
  }),
  preferenceContainer: {
    position: 'absolute',
    width: DP._30,
    height: DP._30,
    backgroundColor: 'white',
    borderRadius: DP._15,
    alignItems: 'center',
    justifyContent: 'center',
    right: 3,
    top: 3,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DP._8,
  },
  hotelName: (offline) => ({
    color: Color.DARK_BLUE_GREY_TWO,
    marginBottom: offline ? DP._8 : DP._4,
  }),
  flexRow: {flexDirection: 'row'},
  hotelAddress: {
    flex: 0.5,
    paddingTop: DP._2,
    fontSize: DP._10,
    color: Color.GREYISH_PURPLE,
  },
  costOfHotel: {
    flex: 0.5,
    fontSize: DP._20,
    textAlign: 'right',
    color: Color.CHARCOAL_GREY_TWO,
  },
  mapAndCostInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: DP._16,
  },
  viewOnMap: {fontSize: DP._10, color: Color.DODGER_BLUE},
  priceDetail: {fontSize: DP._12, color: Color.BATTLESHIP_GREY_TWO},
  marginBottom_16: {marginBottom: DP._16},
  hotelStar: (offline) => ({
    fontSize: DP._12,
    color: offline ? Color.DARK_SLATE_BLUE : Color.MANGO,
  }),
  preferenceText: {fontSize: DP._18},
  setAndResetPreferenceText: {color: Color.TWILIGHT_BLUE},
  icon: {marginRight: DP._4},
  companyPreferred: {
    position: 'absolute',
    fontSize: DP._10,
    color: Color.WARM_BLUE,
    backgroundColor: Color.WHITE,
    padding: DP._4,
    borderRadius: DP._4,
    overflow: 'hidden',
    top: DP._8,
    left: DP._8,
  },
  subContainer: {
    paddingHorizontal: DP._8,
    paddingTop: DP._12,
  },
  ratingBarEmpty: {
    width: DP._20,
    height: DP._6,
    backgroundColor: Color.DARK_SEA_FOAM + '66',
    borderRadius: DP._2,
    marginRight: DP._2,
  },
  ratingBarFill: (width) => ({
    position: 'absolute',
    height: '100%',
    width: width,
    backgroundColor: Color.DARK_SEA_FOAM,
    borderRadius: DP._2,
  }),
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DP._6,
  },
  cancellationInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: DP._16,
    alignItems: 'flex-end',
  },
  hotelLocality: {
    fontSize: DP._11,
    color: Color.CHARCOAL_GREY_TWO,
    marginBottom: DP._4,
  },
  reviewsText: {
    color: Color.CHARCOAL_GREY_TWO,
    fontSize: DP._12,
    marginLeft: DP._6,
  },
  ratingsText: {
    color: Color.CHARCOAL_GREY_TWO,
    fontSize: DP._12,
    marginBottom: DP._16,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancellationText: {color: Color.BATTLESHIP_GREY_TWO, fontSize: DP._10},
  buttonContainer: {paddingHorizontal: DP._8, paddingBottom: DP._16},
  inclusions: {
    fontSize: DP._12,
    color: Color.DARK_SEA_FOAM,
    marginLeft: DP._4,
  },
  secondaryAddr: {
    fontSize: DP._11,
    color: Color.CHARCOAL_GREY_TWO,
    marginBottom: DP._12,
  },
});
