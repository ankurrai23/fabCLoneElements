import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

export default StyleSheet.create({
  uploadReceiptContainer: {
    marginBottom: DP._16,
  },
  uploadReceiptText: {
    fontSize: DP._14,
    color: Color.DARK,
    marginBottom: DP._8,
    lineHeight: DP._17,
  },
  imageStyle: (list) => ({
    width: list ? DP._154 : null,
    height: list ? DP._80 : DP._154,
    borderRadius: DP._10,
    marginHorizontal: list ? 0 : DP._16,
    backgroundColor: '#F2F4F9',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  separator: {width: DP._4},
  paddingHorizontal_16: {paddingHorizontal: DP._16},
  uploadReceiptView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: DP._16,
    marginBottom: DP._12,
  },
  addMoreTxt: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
    lineHeight: DP._14,
  },
  hitSlop: {
    top: DP._10,
    bottom: DP._10,
    left: DP._10,
    right: 0,
  },
  imgView: {
    height: '100%',
    width: '100%',
    borderRadius: DP._10,
  },
  deleteView: {
    position: 'absolute',
    top: DP._8,
    bottom: 0,
    right: DP._8,
    height: DP._24,
    width: DP._24,
    borderRadius: DP._24,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hitSlopDelete: {
    top: DP._10,
    bottom: DP._8,
    left: DP._8,
    right: 0,
  },
  imgStyle: (itemLength) => ({
    height: itemLength === 1 ? DP._32 : DP._26,
    width: itemLength === 1 ? DP._28 : DP._22,
    marginTop: DP._12,
  }),
  titleText: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DARK_SLATE_BLUE,
    marginTop: DP._8,
  },
  alignments: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: DP._8,
  },
});
