import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: (shadowVisible) => ({
    flexDirection: 'row',
    // alignItems: 'center',
    padding: DP._16,
    paddingLeft: DP._16,
    backgroundColor: Color.TWILIGHT_BLUE,
    zIndex: shadowVisible ? 1 : 0,
    ...(shadowVisible ? shadowObj : null),
  }),
  titleContainer: {
    flex: 1,
    marginLeft: DP._16,
    alignSelf: 'center',
  },
  title: {
    fontSize: DP._16,
    color: Color.WHITE,
  },
  subTitle: {
    marginTop: DP._4,
    fontSize: DP._12,
    color: Color.WHITE,
  },
});
