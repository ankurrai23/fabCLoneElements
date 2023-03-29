import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import {shadowObj} from '../../../../utils/Utils';
export default StyleSheet.create({
  container: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
    borderTopWidth: DP._1,
    borderColor: 'rgba(217, 217, 217, 0.25)',
  },
  travellerContainer: (isFirstElement, isSelected) => {
    return {
      padding: DP._8,
      flexDirection: 'row',
      borderWidth: DP._1,
      borderColor: isSelected ? Color.DODGER_BLUE : Color.LIGHT_PERIWINKLE,
      borderRadius: DP._4,
      marginLeft: isFirstElement ? 0 : DP._8,
      backgroundColor: isSelected ? Color.ALICE_BLUE : Color.WHITE,
    };
  },
  trashCanContainer: (selectedInfo, isItemSelected) => ({
    borderWidth: DP._1,
    borderColor: selectedInfo
      ? Color.VERY_LIGHT_PINK_3
      : isItemSelected
      ? Color.ALICE_BLUE
      : Color.WHITE,
    width: DP._24,
    height: DP._24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: DP._24 / 2,
    marginLeft: DP._15,
  }),
  selectedInfo: (selectedInfo) => ({
    color: selectedInfo ? Color.BLACK : Color.GREYISH_PURPLE,
    lineHeight: DP._16,
    fontSize: DP._12,
  }),
  travellerName: {
    marginBottom: DP._4,
    fontSize: DP._12,
    maxWidth: DP._100,
  },
});
