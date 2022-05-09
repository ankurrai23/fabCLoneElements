import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: DP._16,
  },
  sectionTitle: {
    fontSize: DP._16,
    color: Color.DARK,
  },
  seeMore: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
  },
});
