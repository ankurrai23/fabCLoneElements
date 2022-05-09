import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: DP._24,
    right: DP._16,
  },
  button: {
    // position: 'absolute',
    height: DP._48,
    width: DP._48,
    borderRadius: DP._12,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadowObj,
  },
  addBtn: {
    backgroundColor: Color.DANDELION,
  },
  newView: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    right: 5,
  },
  optionView: {
    height: DP._38,
    width: DP._38,
    backgroundColor: Color.PALE_GREY_THREE,
    borderRadius: DP._9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPosition: {
    position: 'absolute',
    right: 45,
  },
  floatTxt: {
    fontSize: DP._14,
    position: 'absolute',
    right: 35,
    bottom: -9,
    color: Color.DARK,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
