import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  text: (color) => ({
    fontSize: DP._12,
    color: color,
    paddingVertical: DP._4,
    paddingHorizontal: DP._8,
    lineHeight: DP._16,
  }),
  gradientStyle: {
    position: 'absolute',
    width: DP._50,
    height: '100%',
  },
  shimmerContainer: {
    backgroundColor: Color.SHAMROCK_31,
    borderRadius: DP._11,
    overflow: 'hidden',
  },
  container: (color) => ({
    backgroundColor: color,
    borderRadius: DP._11,
    overflow: 'hidden',
  }),
  wrap: {
    flexWrap: 'wrap',
  },
});
