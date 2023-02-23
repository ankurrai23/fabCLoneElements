import {StyleSheet} from 'react-native';
import {Color} from '../../../../../utils/color/index.travelPlus';
import {DP} from '../../../../../utils/Dimen';
import {shadowObj} from '../../../../../utils/Utils';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stopButtonStyle: (isSelected, index, arrayLength) => ({
    alignItems: 'center',
    borderWidth: DP._0_5,
    paddingVertical: DP._8,
    flex: 1,
    borderRadius: DP._8,
    borderColor: isSelected ? Color.DODGER_BLUE : Color.LIGHT_PERIWINKLE,
    backgroundColor: isSelected ? Color.ICE_BLUE : Color.WHITE,
    marginRight: index === arrayLength - 1 ? 0 : DP._8,
  }),
  stopCountText: (isSelected) => ({
    fontSize: DP._16,
    lineHeight: DP._18,
    color: isSelected ? Color.DODGER_BLUE : Color.DARK,
  }),
  stopDescText: (isSelected) => ({
    color: isSelected ? Color.DODGER_BLUE : Color.DARK,
  }),
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
  airlineButton: (index, arrayLength) => ({
    flexDirection: 'row',
    paddingTop: index > 0 ? DP._8 : 0,
    paddingBottom: index < arrayLength - 1 ? DP._8 : 0,
    alignItems: 'center',
  }),
  Flex: {
    flex: 1,
  },
  showMoreAirlineButton: {
    marginTop: DP._16,
    alignSelf: 'flex-end',
  },
  entitlementStyle: {
    marginBottom: DP._16,
  },
  airlineIconStyle: {
    width: DP._24,
    height: DP._24,
    borderRadius: DP._12,
    marginRight: DP._5,
    borderWidth: DP._0_2,
    borderColor: Color.GREY_5,
  },
  showMoreAirlineText: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DODGER_BLUE,
  },
  separator: {
    marginHorizontal: DP._24,
    marginBottom: DP._24,
  },
  switchTrackColor: {true: Color.DODGER_BLUE},
  showOOPText: {fontSize: DP._14, color: Color.GREY_PURPLE},
  oopSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: DP._24,
    paddingHorizontal: DP._24,
    justifyContent: 'space-between',
  },
});
