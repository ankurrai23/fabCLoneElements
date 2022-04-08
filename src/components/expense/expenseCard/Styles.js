import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: (showSeparator) => ({
    backgroundColor: Color.WHITE,
    paddingVertical: DP._15,
    flexDirection: 'row',
    borderBottomWidth: showSeparator ? DP._1 : 0,
    borderBottomColor: Color.VERY_LIGHT_PINK,
  }),
  Flex: {
    flex: 1,
  },
  image: {
    width: DP._40,
    height: DP._40,
    borderRadius: DP._8,
  },
  amount: (faded) => ({
    fontSize: DP._16,
    color: faded ? Color.DARK + '66' : Color.DARK,
  }),
  date: {
    marginTop: DP._4,
    fontSize: DP._11,
    color: Color.BATTLESHIP_GREY_TWO,
    alignSelf: 'center',
  },
  imageContainer: {
    marginRight: DP._16,
  },
  name: (faded) => ({
    color: faded ? Color.DARK + '66' : Color.DARK,
    marginBottom: DP._8,
  }),
  outOfPolicyText: {
    marginLeft: DP._8,
    fontSize: DP._10,
    paddingHorizontal: DP._6,
    paddingVertical: DP._2,
    backgroundColor: Color.PASTEL_RED + '1a',
    color: Color.PASTEL_RED,
    borderRadius: DP._9,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  uploadReceiptButton: {
    flexWrap: 'wrap',
  },
  uploadReceiptText: {
    color: Color.DODGER_BLUE,
    fontSize: DP._12,
    paddingVertical: DP._5,
    paddingHorizontal: DP._8,
    borderWidth: 1,
    borderRadius: DP._12,
    borderColor: Color.DODGER_BLUE,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: DP._8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FlexDirectionRow: {
    flexDirection: 'row',
  },
  typeOfClaim: (color) => ({
    fontSize: DP._12,
    color: color,
    backgroundColor: color + '1a',
    paddingVertical: DP._2,
    paddingHorizontal: DP._8,
    borderRadius: DP._10,
    overflow: 'hidden',
    marginRight: DP._8,
    textTransform: 'capitalize',
  }),
});
