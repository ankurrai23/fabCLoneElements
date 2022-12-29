import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    // paddingHorizontal: DP._16,
    // paddingVertical: DP._24,
    flexGrow: 1,
  },
  requestForModificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FlexGrow: {
    flexGrow: 1,
  },
  price: {
    fontSize: DP._18,
    lineHeight: DP._21,
  },
  priceContainer: {
    flex: 0.6,
  },
  gstIncl: {
    fontSize: DP._10,
    lineHeight: DP._12,
    color: Color.BATTLESHIP_GREY,
    marginTop: DP._4,
  },
  requestForModifyContainer: {
    paddingVertical: DP._24,
    paddingHorizontal: DP._16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestToModifyStyle: {
    flex: 1,
    lineHeight: DP._24,
  },
  notifyText: {
    color: Color.DODGER_BLUE,
    lineHeight: DP._16,
  },
  infoContainer: (bgColor) => ({
    paddingHorizontal: DP._16,
    flexDirection: 'row',
    paddingVertical: DP._8,
    alignItems: 'center',
    backgroundColor: bgColor ?? Color.ICE_BLUE,
  }),
  infoText: {
    fontSize: DP._12,
    marginLeft: DP._4,
  },
  buttonContainer: {
    padding: DP._16,
    flexDirection: 'row',
    flex: 1,
  },
  rejectButtonStyle: {
    flex: 0.5,
    marginRight: DP._6,
    backgroundColor: 'transparent',
    borderWidth: DP._1,
    borderColor: Color.PASTEL_RED,
    paddingVertical: DP._8,
  },
  rejectText: {
    color: Color.PASTEL_RED,
  },
  approveButtonStyle: {
    flex: 0.5,
    marginLeft: DP._6,
    paddingVertical: DP._8,
  },
  requestModification: {
    margin: DP._16,
    borderRadius: DP._30,
  },
  requestModificationText: {
    fontSize: DP._16,
    lineHeight: DP._24,
  },
  amountPaidContainer: {
    padding: DP._16,
  },
  flexRow: {
    flexDirection: 'row',
  },
  paidAmountText: {
    flex: 1,
    lineHeight: DP._16,
    alignSelf: 'flex-end',
  },
  amountStyle: {
    fontSize: DP._18,
    lineHeight: DP._21,
  },
  amountInfo: {
    fontSize: DP._10,
    color: Color.BATTLESHIP_GREY,
  },
  flex1: {
    flex: 1,
  },
  separator: {
    height: DP._8,
  },
});
