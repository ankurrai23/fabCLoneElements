import {Dimensions, StyleSheet} from 'react-native';
import {cardStyleObj, shadowObj} from '../../../../utils/Utils';
import {Color} from '../../../../utils/color/index.fabhotel';
import {DP} from '../../../../utils/Dimen';

const {width: Width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    overflow: 'hidden',
    ...cardStyleObj,
    borderRadius: DP._4,
    ...shadowObj,
  },
  hotelImageStyle: {width: 0.7 * Width, height: DP._146, marginRight: DP._1},
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hotelStar: {
    fontSize: DP._12,
    marginStart: DP._4,
    flexGrow: 1,
    color: Color.TWILIGHT_BLUE,
  },
  preferenceText: {
    fontSize: DP._10,
    color: Color.TWILIGHT_BLUE,
    backgroundColor: Color.LINK_WATER,
    paddingVertical: DP._4,
    paddingHorizontal: DP._8,
    overflow: 'hidden',
    borderRadius: DP._10,
  },
  rateType: {
    position: 'absolute',
    fontSize: DP._10,
    color: Color.DARK_SEA_FOAM,
    backgroundColor: Color.WHITE,
    paddingVertical: DP._4,
    paddingHorizontal: DP._8,
    borderRadius: DP._10,
    overflow: 'hidden',
    top: DP._8,
    left: DP._8,
  },
  hotelName: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DARK_BLUE_GREY_TWO,
    marginTop: DP._16,
  },
  hotelAddress: {
    fontSize: DP._12,
    lineHeight: DP._14,
    marginTop: DP._4,
    color: Color.CHARCOAL_GREY_TWO,
  },
  subContainer: {
    padding: DP._16,
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
    marginTop: DP._8,
  },
  reviewsText: {
    color: Color.CHARCOAL_GREY_TWO,
    fontSize: DP._12,
    marginLeft: DP._6,
  },
  ratingsText: {
    color: Color.CHARCOAL_GREY_TWO,
    fontSize: DP._12,
    marginTop: DP._6,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: DP._30,
    marginBottom: DP._16,
  },
  cancellationText: {
    color: Color.BATTLESHIP_GREY_TWO,
    fontSize: DP._10,
  },
  priceAndGstContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  costOfHotel: {
    fontSize: DP._16,
    marginEnd: DP._4,
    marginBottom: -2,
    color: Color.DARK,
  },
  priceDetail: {
    fontSize: DP._10,
    color: Color.BATTLESHIP_GREY_TWO,
  },
  oopMargin: {
    marginTop: DP._2,
  },
  alignFlexEnd: {
    alignItems: 'flex-end',
  },
});
