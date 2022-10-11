import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  flexRow: {flexDirection: 'row', alignItems: 'center'},
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLableStyle: {
    marginLeft: DP._10,
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
  },
  width_48: {
    width: '48%',
  },
  textAlign_right: {
    textAlign: 'right',
  },
});
