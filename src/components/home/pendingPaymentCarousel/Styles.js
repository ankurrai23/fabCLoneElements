import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBEEEE',
    borderWidth: DP._0_5,
    borderColor: '#FDDDDD',
    paddingBottom: DP._10,
  },
  itemStyle: {
    paddingTop: DP._8,
    paddingHorizontal: DP._16,
    paddingBottom: DP._4,
    width: DP.match_width - DP._1,
  },
  textStyle: {
    fontSize: DP._12,
    lineHeight: DP._16,
    width: '80%',
  },
  payNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._8,
  },
  payNowText: {
    color: Color.DODGER_BLUE,
    fontSize: DP._12,
    lineHeight: DP._14,
  },
});
