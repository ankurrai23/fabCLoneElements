import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    padding: DP._16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: DP._144,
    marginBottom: DP._34,
  },
  title: {
    color: Color.DARK,
    fontSize: DP._26,
    marginBottom: DP._8,
  },
  subTitle: {
    color: Color.GREY_PURPLE,
    lineHeight: DP._18,
    fontSize: DP._12,
    textAlign: 'center',
  },
});
