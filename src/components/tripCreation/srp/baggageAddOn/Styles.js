import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  count: (isZero) => ({
    width: DP._12,
    marginHorizontal: DP._12,
    fontSize: DP._16,
    lineHeight: DP._18,
    color: isZero ? Color.FORD_GRAY : Color.DARK,
  }),
  mealDesc: {
    fontSize: DP._12,
    lineHeight: DP._18,
    color: Color.CHARCOAL_GREY_TWO,
  },
  mealPrice: {
    fontSize: DP._14,
    lineHeight: DP._16,
    marginTop: DP._4,
  },
  infoContainer: {
    flex: 1,
    marginRight: DP._28,
    justifyContent: 'center',
  },
});
