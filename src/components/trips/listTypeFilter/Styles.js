import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: DP._24,
  },
  renderItem: (isSelected, index) => ({
    paddingHorizontal: DP._4,
    flex: 1,
    paddingVertical: DP._10,
    backgroundColor: isSelected ? Color.ICE_BLUE : Color.WHITE_3,
    borderColor: Color.DODGER_BLUE,
    borderWidth: isSelected ? 0.5 : 0,
    borderRadius: DP._12,
    marginLeft: index ? DP._8 : 0,
  }),
  filterTag: (isSelected) => ({
    fontSize: DP._14,
    color: isSelected ? Color.DODGER_BLUE : Color.CHARCOAL_GREY_TWO,
    textAlign: 'center',
  }),
});
