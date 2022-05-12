import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: (shadowVisible) => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: DP._16,
    paddingLeft: DP._8, // actual is 16 as Feather icon has its own padding.
    backgroundColor: Color.WHITE,
    zIndex: shadowVisible ? 1 : 0,
    ...(shadowVisible ? shadowObj : null),
  }),
  title: {
    fontSize: DP._20,
    marginLeft: DP._8,
    color: Color.DARK,
  },
});
