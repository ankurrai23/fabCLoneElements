import {StyleSheet} from 'react-native';
import {Color} from '../../../../../utils/color/index.travelPlus';
import {DP} from '../../../../../utils/Dimen';

export default StyleSheet.create({
  filterContainer: {
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._0_5,
    borderRadius: DP._12,
    overflow: 'hidden',
  },
  filterButton: {
    position: 'absolute',
    paddingHorizontal: DP._12,
    paddingVertical: DP._11,
    backgroundColor: Color.TWILIGHT_BLUE,
    right: 0,
    borderTopRightRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  sortOption: (isSelected) => ({
    paddingHorizontal: DP._12,
    paddingVertical: DP._8,
    borderWidth: DP._0_5,
    borderRadius: DP._8,
    borderColor: isSelected ? Color.DODGER_BLUE : Color.LIGHT_PERIWINKLE,
    marginRight: DP._8,
  }),
  sortText: (isSelected) => ({
    fontSize: DP._12,
    lineHeight: DP._14,
    color: isSelected ? Color.DODGER_BLUE : Color.GREY_PURPLE,
  }),
  containerStyle: {
    padding: DP._8,
    paddingRight: DP._48,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DP._16,
    marginBottom: DP._24,
  },
  mainContainer: {
    paddingHorizontal: DP._24,
    paddingBottom: DP._24,
  },
  filterText: {
    fontSize: DP._18,
    lineHeight: DP._22,
  },
  clearAllText: {
    fontSize: DP._12,
    lineHeight: DP._16,
    color: Color.DODGER_BLUE,
  },
  applyButton: {
    borderRadius: DP._24,
  },
  applyText: {
    fontSize: DP._16,
    lineHeight: DP._24,
  },
});
