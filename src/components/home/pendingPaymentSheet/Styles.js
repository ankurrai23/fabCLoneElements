import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../utils/Utils';
import {isPlatformIos} from '../../../utils/Utils';
export const CARD_WIDTH = 0.8 * DP.match_width;

export default StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: (isSelected, dotColor) => ({
    width: isSelected ? DP._7 : DP._5,
    height: isSelected ? DP._7 : DP._5,
    borderRadius: isSelected ? DP._4 : DP._3,
    backgroundColor: isSelected ? dotColor : Color.GREY_7,
    marginHorizontal: DP._3,
  }),
  container: {
    paddingTop: DP._16,
    paddingBottom: isPlatformIos() ? DP._20 : DP._10,
  },
  title: {
    fontSize: DP._18,
    lineHeight: DP._22,
    marginHorizontal: DP._24,
  },
  paymentDetail: {
    marginHorizontal: DP._24,
    marginVertical: DP._16,
    lineHeight: DP._20,
  },
  flexRow: {
    flexDirection: 'row',
  },
  inclGSTStyle: {
    color: Color.BATTLESHIP_GREY_TWO,
    fontSize: DP._10,
    lineHeight: DP._12,
  },
  priceContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  priceStyle: {
    fontSize: DP._18,
  },
  flatlistContainerStyle: {
    paddingLeft: DP._24,
    paddingRight: DP._24,
    paddingBottom: DP._8,
  },
  cardStyle: {
    padding: DP._16,
    paddingBottom: DP._10,
    width: CARD_WIDTH,
    ...cardStyleObj,
    ...shadowObj,
  },
  tripTitleStyle: {
    marginVertical: DP._8,
  },
  buttonStyle: {
    marginTop: DP._15,
  },
});
