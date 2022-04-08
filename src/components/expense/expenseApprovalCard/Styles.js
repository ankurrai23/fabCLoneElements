import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
  },
  storyContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.WHITE_TWO,
  },
  subContainer: {
    flexDirection: 'row',
    marginLeft: DP._23,
  },
  leftView: {
    width: '82%',
  },
  rightView: (val, index) => ({
    width: '18%',
    backgroundColor: Color.PALE_GREY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: val === true ? DP._35 : DP._15,
    borderTopLeftRadius: index === 1 ? DP._8 : 0,
  }),
  checkBox: {
    height: DP._18,
    width: DP._18,
    borderWidth: 2,
    borderColor: '#767676',
    borderRadius: 2,
  },
  Flex: {
    flex: 1,
  },
  image: {
    width: DP._40,
    height: DP._40,
    borderRadius: DP._8,
  },
  amount: {
    fontSize: DP._16,
    color: Color.DARK,
  },
  date: {
    marginTop: DP._4,
    fontSize: DP._11,
    color: Color.BATTLESHIP_GREY_TWO,
    alignSelf: 'center',
  },
  imageContainer: {
    marginRight: DP._16,
  },
  name: {
    color: Color.DARK,
    marginBottom: DP._8,
  },
  outOfPolicyContainer: {
    paddingVertical: DP._2,
    paddingHorizontal: DP._6,
    justifyContent: 'center',
    marginLeft: DP._8,
  },
  outOfPolicyText: {
    fontSize: DP._10,
    paddingVertical: DP._2,
    paddingHorizontal: DP._6,
    color: Color.PASTEL_RED,
  },
  outOfPolicyBackground: {
    opacity: 0.1,
    marginVertical: DP._2,
    marginHorizontal: DP._6,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Color.PASTEL_RED,
    borderRadius: DP._9,
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
    borderRadius: DP._15,
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
  Viewcontainer: {
    backgroundColor: Color.WHITE,
    paddingVertical: DP._15,
    flexDirection: 'row',
    borderBottomWidth: DP._1,
    borderBottomColor: Color.VERY_LIGHT_PINK,
  },
  subContainer1: {
    paddingVertical: DP._16,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginVertical: 8,
  },
  selectAllTxt: {
    color: Color.GREY_PURPLE,
  },
  secondView: {
    flex: 4,
    alignItems: 'flex-end',
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: DP._16,
    color: Color.DARK,
  },
  selectTxt: {
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
  },
  chevronStyle: {marginRight: 10},
});
