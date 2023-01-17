import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundContainer: Color.WHITE,
  },
  separator: {
    height: DP._8,
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
  infoContainer: (type) => ({
    paddingHorizontal: DP._16,
    flexDirection: 'row',
    paddingVertical: DP._8,
    alignItems: 'center',
    backgroundColor: type === 'INFO' ? Color.ICE_BLUE : Color.PASTEL_RED_10,
  }),
  infoText: {
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  buttonContainer: {
    padding: DP._16,
    flexDirection: 'row',
    // flex: 1,
  },
  payButton: {
    flex: 0.5,
  },
  infoIcon: {
    transform: [{rotateZ: '180deg'}],
  },
});
