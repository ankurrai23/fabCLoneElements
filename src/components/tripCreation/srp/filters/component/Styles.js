import {StyleSheet} from 'react-native';
import {Color} from '../../../../../utils/color/index.travelPlus';
import {DP} from '../../../../../utils/Dimen';
import {shadowObj} from '../../../../../utils/Utils';

export default StyleSheet.create({
  filterContainer: {
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._0_5,
    borderRadius: DP._12,
    overflow: 'hidden',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  filterButton: {
    paddingHorizontal: DP._12,
    paddingVertical: DP._11,
    backgroundColor: Color.TWILIGHT_BLUE,
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
    paddingRight: 0,
    // paddingRight: DP._48,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DP._16,
    marginHorizontal: DP._24,
    marginBottom: DP._24,
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
    marginHorizontal: DP._24,
    marginVertical: DP._8,
    marginBottom: DP._24,
  },
  applyText: {
    fontSize: DP._16,
    lineHeight: DP._24,
  },
  button: (isSelected, addMarginRight) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: DP._0_5,
    // paddingVertical: DP._8,
    flex: 1,
    borderRadius: DP._8,
    borderColor: isSelected ? Color.DODGER_BLUE : Color.LIGHT_PERIWINKLE,
    backgroundColor: isSelected ? Color.ICE_BLUE : Color.WHITE,
    marginRight: addMarginRight ? DP._8 : 0,
    height: DP._52,
    ...shadowObj,
  }),
  buttonText: (isSelected) => ({
    color: isSelected ? Color.DODGER_BLUE : Color.DARK,
  }),
  sectionTitle: {
    fontSize: DP._14,
    lineHeight: DP._16,
    color: Color.GREY_PURPLE,
    marginBottom: DP._8,
  },
  filterAppliedDot: {
    position: 'absolute',
    width: DP._8,
    height: DP._8,
    right: 14,
    top: 12,
    borderWidth: DP._1,
    borderColor: Color.WHITE,
    borderRadius: DP._4,
    backgroundColor: Color.PASTEL_RED,
    zIndex: 1,
  },
});
