import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  fill: {
    flex: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    height: DP._2,
    overflow: 'hidden',
  },
  tabHeadingContainer: {
    flexDirection: 'row',
    borderBottomWidth: DP._1,
    borderBottomColor: Color.PALE_GREY_THREE,
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: DP._16,
    flex: 1,
  },
  tabHeading: (isActive) => ({
    fontSize: DP._16,
    color: isActive ? Color.DARK : Color.BATTLESHIP_GREY_TWO,
    textAlign: 'center',
  }),
  tabChildContainer: {
    flex: 1,
  },
});
