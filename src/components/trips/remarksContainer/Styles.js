import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._24,
    backgroundColor: Color.WHITE,
  },
  remark: (received) => ({
    backgroundColor: received ? Color.DODGER_BLUE + '1a' : Color.WHITE_3,
    borderRadius: DP._8,
    overflow: 'hidden',
    paddingVertical: DP._12,
    paddingHorizontal: DP._16,
    maxWidth: '80%',
    marginTop: DP._14,
    alignSelf: received ? 'flex-start' : 'flex-end',
  }),
});
