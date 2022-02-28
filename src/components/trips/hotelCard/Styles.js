import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderRadius: DP._12,
    flex: 1,
    ...shadowObj,
  },
  dateAndStatusContainer: {
    flexDirection: 'row',
    marginBottom: DP._16,
    justifyContent: 'space-between',
    paddingTop: DP._16,
    paddingHorizontal: DP._16,
  },
  statusContainer: {
    backgroundColor: Color.DARK_SEA_FOAM + '1a',
    paddingHorizontal: DP._8,
    paddingVertical: DP._4,
    borderRadius: DP._11,
    overflow: 'hidden',
    color: Color.DARK_SEA_FOAM,
    fontSize: DP._12,
  },
  hotelName: {
    fontSize: DP._16,
    marginBottom: DP._4,
  },
  hotelLocation: {
    color: Color.GREYISH_PURPLE,
    marginBottom: DP._16,
  },
  date: {
    fontSize: DP._18,
  },
  month: {
    fontSize: DP._12,
    color: Color.BLUEY_GREY,
  },
  checkIn: {
    fontSize: DP._10,
    color: Color.DARK_SLATE_BLUE,
    backgroundColor: Color.PALE_GREY,
    paddingHorizontal: DP._6,
    paddingVertical: DP._1,
    borderRadius: DP._10,
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DP._16,
  },
  cancelText: {
    color: Color.PASTEL_RED,
  },
  modifyText: {
    color: Color.DODGER_BLUE,
  },
  icon: {
    width: DP._30,
    height: DP._30,
    marginRight: DP._8,
  },
  dashedLineContainer: {
    position: 'absolute',
    height: '100%',
    zIndex: 1,
    left: 15,
    top: 30,
    paddingTop: DP._4,
    paddingBottom: DP._10,
  },
  flexRow: {flexDirection: 'row'},
  flexRowWithAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  directionIcon: {transform: [{rotateZ: '45deg'}], bottom: 2, right: 2},
  checkInAndDirectionContainer: {
    marginBottom: DP._16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionContainer: (processed) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: processed ? DP._10 : DP._13,
    paddingHorizontal: DP._16,
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  }),
  flexRowAndAlignCenter: {flexDirection: 'row', alignItems: 'center'},
  cancel: {
    color: Color.PASTEL_RED,
    marginLeft: DP._4,
  },
  reschedule: {
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
  },
  primaryButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._26,
  },
  rescheduleIcon: {
    width: DP._18,
    height: DP._18,
    resizeMode: 'contain',
  },
  chevronContainer: {
    backgroundColor: Color.DODGER_BLUE + '12',
    padding: DP._3,
    borderRadius: DP._12,
  },
});
