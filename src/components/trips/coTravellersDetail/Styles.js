import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: DP._16,
    paddingTop: DP._26,
    paddingBottom: DP._24,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: DP._12,
    color: Color.GREYISH_PURPLE,
  },
  cotravelerCount: {
    fontSize: DP._12,
    color: Color.DARK_SLATE_BLUE,
    backgroundColor: Color.DARK_SLATE_BLUE + '1a',
    paddingHorizontal: DP._8,
    paddingVertical: DP._2,
    borderRadius: DP._12,
    overflow: 'hidden',
  },
  marginTop_24: {
    marginTop: DP._24,
  },
  marginTop_8: {
    marginTop: DP._8,
  },
});
