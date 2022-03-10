import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  container: {
    flex: 1,
    padding: DP._16,
  },
  topContainer: {
    flex: 1,
  },
  textFieldLabel: {
    backgroundColor: Color.WHITE,
  },
  datesContainer: {
    flexDirection: 'row',
  },
});
