import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  posRelative: {position: 'relative'},
  toolTip: (x, y) => ({
    height: DP._25,
    width: DP._25,
    backgroundColor: 'black',
    position: 'absolute',
    top: y,
    left: x,
  }),
  emptySpace: {
    minWidth: DP._48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatRow: {
    flexDirection: 'row',
    marginBottom: DP._16,
    justifyContent: 'space-between',
  },
  seatStyle: (seatColor) => ({
    flex: 1,
    backgroundColor: seatColor,
    borderWidth: DP._0_5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.PALE_GREY_THREE,
    borderTopLeftRadius: DP._8,
    borderTopRightRadius: DP._8,
    marginLeft: DP._4,
    marginRight: DP._4,
    minHeight: DP._40,
    minWidth: DP._40,
  }),
});
