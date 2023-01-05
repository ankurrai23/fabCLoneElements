import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  animatedComponent: (width) => ({
    flex: 1,
    width: DP._60,
  }),
  loader: (width, height, radius) => ({
    height,
    width,
    backgroundColor: Color.VERY_LIGHT_PINK,
    borderRadius: radius ?? DP._2,
  }),
});
