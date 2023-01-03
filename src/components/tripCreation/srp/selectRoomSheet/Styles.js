import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  containerStyle: {
    padding: DP._8,
    paddingRight: DP._48,
  },
  titleContainer: (error) => ({
    marginTop: DP._16,
    marginHorizontal: DP._24,
    marginBottom: error ? DP._4 : DP._18,
  }),
  applyButton: {
    flex: 1,
    marginLeft: DP._8,
    paddingVertical: DP._8,
  },
  applyText: {
    fontSize: DP._16,
    lineHeight: DP._24,
  },
  titleText: {
    fontSize: DP._18,
    lineHeight: DP._22,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: DP._8,
    marginRight: DP._8,
    backgroundColor: 'transparent',
    borderWidth: DP._1,
  },
  cancelText: {
    fontSize: DP._14,
    lineHeight: DP._20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._24,
    paddingVertical: DP._16,
  },
  separator: {
    marginHorizontal: DP._24,
  },
  roomInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: DP._24,
    paddingTop: DP._16,
    paddingBottom: DP._18,
  },
  roomTitle: {
    fontSize: DP._14,
    lineHeight: DP._17,
    color: Color.GREY_PURPLE,
  },
  noOfAdultsText: {
    fontSize: DP._14,
    lineHeight: DP._17,
    color: Color.DARK,
    marginTop: DP._4,
  },
  addRemoveAdultsContainer: {
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
  adultCountText: {
    fontSize: DP._20,
    lineHeight: DP._24,
    marginHorizontal: DP._14,
    width: DP._12,
  },
  addRemoveRoomButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._24,
    justifyContent: 'space-between',
    paddingVertical: DP._16,
  },
  removeRoomText: (disabled) => ({
    lineHeight: DP._20,
    color: disabled ? Color.FORD_GRAY : Color.RED_2,
  }),
  addRoomText: (disabled) => ({
    lineHeight: DP._20,
    color: disabled ? Color.FORD_GRAY : Color.DODGER_BLUE,
  }),
  subTitle: {
    lineHeight: DP._14,
    fontSize: DP._12,
    color: Color.PASTEL_RED,
  },
});
