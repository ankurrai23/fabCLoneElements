import {StyleSheet, Dimensions} from 'react-native';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: DP._111,
    backgroundColor: Color.WHITE,
    padding: DP._16,
    borderRadius: DP._12,
    borderWidth: DP._0_5,
    borderColor: Color.LIGHT_PERIWINKLE,
    marginVertical: DP._8,
    marginHorizontal: DP._16,
    ...shadowObj,
  },
  title: {
    color: Color.DARK,
    fontSize: DP._12,
    lineHeight: DP._21,
  },
  message: {
    color: Color.DARK,
    fontSize: DP._12,
    lineHeight: DP._16,
    marginTop: DP._4,
  },
  date: {
    color: Color.DARK,
    fontSize: DP._12,
    lineHeight: DP._14,
    marginTop: DP._8,
  },
  arrowContainer: {
    position: 'absolute',
    padding: DP._4,
    bottom: DP._16,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DODGER_BLUE_14,
    borderTopLeftRadius: DP._11,
    borderBottomLeftRadius: DP._11,
  },
});
