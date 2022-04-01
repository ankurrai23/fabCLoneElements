import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  titleTxt: {
    color: Color.DARK_BLUE,
    fontSize: DP._20,
    marginVertical: DP._15,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: DP._20,
  },
  monthTxt: {
    color: Color.DARK_80,
    fontSize: DP._16,
  },
  iconView: {
    flex: 3,
    alignItems: 'flex-end',
  },
  clearAll: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
  },
  clearAllView: {
    alignItems: 'flex-end',
    marginVertical: 4,
  },
  cancelButton: {
    backgroundColor: Color.WHITE,
    width: '46%',
    height: DP._48,
    borderRadius: DP._24,
    borderWidth: 1,
    borderColor: Color.DARK_BLUE,
  },
  cancelText: {
    color: Color.DARK_SLATE_BLUE_TWO,
    fontSize: DP._16,
  },
  applyButton: {
    backgroundColor: Color.SUN_YELLOW,
    width: '46%',
    height: DP._48,
    borderRadius: DP._24,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: DP._15,
    marginBottom: 20,
  },
});
