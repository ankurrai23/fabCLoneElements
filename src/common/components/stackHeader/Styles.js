import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: (shadowVisible) => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: DP._16,
    paddingLeft: DP._16,
    backgroundColor: Color.WHITE,
    zIndex: shadowVisible ? 1 : 0,
    ...(shadowVisible ? shadowObj : null),
  }),
  title: {
    flex: 1,
    fontSize: DP._16,
    marginLeft: DP._16,
    color: Color.DARK,
  },
});
