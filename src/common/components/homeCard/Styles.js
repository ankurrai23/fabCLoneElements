import {StyleSheet, Dimensions} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: (backgroundColor, noClaim) => ({
    paddingTop: DP._16,
    paddingHorizontal: DP._12,
    paddingBottom: DP._12,
    borderRadius: DP._12,
    backgroundColor: backgroundColor,
    ...(noClaim ? {width: 0.4222 * width} : {width: 0.4222 * width}),
    ...shadowObj,
    overflow: 'hidden',
    flex: 1,
  }),
  containerSecondary: {
    paddingTop: DP._24,
    paddingHorizontal: DP._16,
    paddingBottom: DP._16,
    marginRight: DP._8,
  },
  quantity: {
    fontSize: DP._18,
    color: Color.WHITE,
    marginBottom: DP._8,
  },
  title: {
    color: Color.WHITE,
    marginBottom: DP._8,
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
    marginBottom: DP._24,
  },
  plusCircle: {
    color: Color.WHITE,
    marginBottom: DP._24,
  },
  lowerCase: {
    textTransform: 'lowercase',
  },
  claimsText: {
    color: Color.WHITE,
    fontSize: DP._16,
    lineHeight: DP._18,
    textTransform: 'capitalize',
  },
  dateText: {
    fontSize: DP._12,
    color: Color.WHITE,
    borderRadius: DP._7,
    paddingHorizontal: DP._3,
    overflow: 'hidden',
  },
  dateAndArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._16,
    justifyContent: 'space-between',
    height: DP._18,
  },
  Flex: {
    flex: 1,
  },
  amountContainer: {
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
});
