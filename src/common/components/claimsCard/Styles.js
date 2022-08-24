import {StyleSheet, Dimensions} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: (backgroundColor) => ({
    borderRadius: DP._12,
    backgroundColor: backgroundColor,
    width: 0.44 * width,
    ...shadowObj,
  }),
  containerSecondary: {
    marginRight: DP._8,
  },
  quantity: {
    fontSize: DP._18,
    color: Color.WHITE,
    marginBottom: DP._8,
  },
  title: {
    color: Color.WHITE,
    fontSize: DP._16,
    lineHeight: DP._18,
  },
  amount: {
    fontSize: DP._20,
    color: Color.WHITE,
  },
  amountSecondary: {
    fontSize: DP._28,
    color: Color.WHITE,
  },
  plusCircle: {
    marginBottom: DP._16,
  },
  lowerCase: {
    textTransform: 'lowercase',
  },
  claimsText: {
    color: Color.WHITE,
    fontSize: DP._16,
    textTransform: 'capitalize',
    marginTop: DP._16,
  },
  dateText: {
    fontSize: DP._12,
    color: Color.WHITE,
    borderRadius: DP._7,
    paddingHorizontal: DP._3,
    overflow: 'hidden',
  },
  dateAndArrowContainer: (boolean) => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._16,
    justifyContent: boolean ? 'space-between' : 'flex-end',
    height: DP._18,
  }),
  Flex: {
    flex: 1,
  },
  amountContainer: {
    marginTop: DP._8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  color_White: {color: 'white'},
  rightTriangle: (ref, color, noClaim) => ({
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: ref.width,
    borderTopWidth: ref.height,
    borderRightColor: 'transparent',
    borderTopColor: color,
    borderRadius: DP._12,
    transform: [{rotate: '180deg'}],
  }),
  rightArrowView: {
    height: DP._24,
    width: DP._24,
    borderRadius: DP._24,
    borderWidth: 1,
    borderColor: 'rgb(109,157,239)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleView: {
    height: DP._8,
    width: DP._8,
    borderRadius: DP._8,
    backgroundColor: '#D65656',
  },
  actionNeedTxt: {
    fontSize: DP._12,
    color: Color.WHITE,
    marginLeft: 5,
  },
  largeCardGradientStyle: {
    padding: DP._16,
    borderRadius: DP._12,
  },
  smallCardGradientStyle: {
    padding: DP._12,
    paddingTop: DP._16,
    borderRadius: DP._12,
  },
});
