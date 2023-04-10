import {StyleSheet} from 'react-native';
import {TOOLTIP_HEIGHT, TOOLTIP_WIDTH} from '.';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import {shadowObj} from '../../../../utils/Utils';

export default StyleSheet.create({
  posRelative: {position: 'relative'},
  toolTip: (pos) => ({
    height: TOOLTIP_HEIGHT,
    width: TOOLTIP_WIDTH,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: DP._4,
    borderWidth: DP._0_5,
    borderColor: Color.LIGHT_PERIWINKLE,
    top: pos.yPos,
    left: pos.xPos,
    padding: DP._8,
    zIndex: 1000,
    ...shadowObj,
  }),
  emptySpace: {
    minWidth: DP._30,
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
    aspectRatio: 1,
    minWidth: DP._20,
  }),
  toolTipPassengerName: {
    fontSize: DP._12,
    lineHeight: DP._14,
  },
  toolTipSeatInfoContainer: {
    flexDirection: 'row',
    marginTop: DP._4,
    justifyContent: 'space-between',
  },
  toolTipSeatCode: {
    fontSize: DP._12,
    lineHeight: DP._16,
  },
  toolTipSeatPrice: {
    fontSize: DP._12,
    lineHeight: DP._16,
  },
  frontAisle: {
    paddingTop: DP._24,
    paddingBottom: DP._12,
  },
  text_Center: {
    textAlign: 'center',
  },
  backAisle: {
    paddingTop: DP._12,
    paddingBottom: DP._24,
  },
});
