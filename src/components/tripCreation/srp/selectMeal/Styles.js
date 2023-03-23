import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addRemoveButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addRemoveButtonStyle: (disabled) => ({
    padding: DP._4,
    backgroundColor: disabled
      ? Color.FORD_GRAY + '1a'
      : Color.DODGER_BLUE + '1a',
    borderRadius: DP._2,
  }),
  count: {
    width: DP._12,
    marginHorizontal: DP._12,
    fontSize: DP._16,
    lineHeight: DP._18,
  },
  mealDesc: {
    fontSize: DP._12,
    lineHeight: DP._18,
    color: Color.CHARCOAL_GREY_TWO,
  },
  mealPrice: (showPrice) => ({
    fontSize: DP._14,
    lineHeight: DP._16,
    marginTop: DP._4,
    ...(!showPrice && {color: Color.DARK_SEA_FOAM}),
  }),
  infoContainer: {
    flex: 1,
    marginRight: DP._28,
    justifyContent: 'center',
  },
});
