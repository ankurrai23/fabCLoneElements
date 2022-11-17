import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color';
import {DP} from '../../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../../utils/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...shadowObj,
    ...cardStyleObj,
  },
  card: (reduceOpacity) => ({
    opacity: reduceOpacity ? 0.6 : 1,
  }),
  dateAndStatusContainer: {
    flexDirection: 'row',
    marginBottom: DP._12,
    justifyContent: 'space-between',
    paddingTop: DP._12,
    paddingHorizontal: DP._16,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  hyphen: {
    alignSelf: 'center',
    fontSize: DP._12,
    color: Color.BLUEY_GREY,
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
    fontSize: DP._14,
    marginBottom: DP._2,
  },
  hotelLocation: {
    color: Color.GREYISH_PURPLE,
    fontSize: DP._12,
    marginBottom: DP._12,
  },
  date: {
    fontSize: DP._18,
  },
  month: {
    fontSize: DP._12,
    lineHeight: 18,
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
  directionIcon: {bottom: 2, right: 2},
  checkInAndDirectionContainer: {
    marginBottom: DP._12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: DP._12,
    paddingHorizontal: DP._16,
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  flexRowAndAlignCenter: {flexDirection: 'row', alignItems: 'center'},
  cancel: {
    color: Color.PASTEL_RED,
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  reschedule: {
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
    fontSize: DP._12,
  },
  primaryButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._24,
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
  paddingHorizontal_16: {
    paddingHorizontal: DP._16,
  },
  seperatorStyle: {
    marginHorizontal: DP._16,
    backgroundColor: Color.LIGHT_PERIWINKLE,
  },
  direction: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
  },
});
