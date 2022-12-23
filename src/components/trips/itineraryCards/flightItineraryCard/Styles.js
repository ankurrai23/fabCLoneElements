import {StyleSheet} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color/index.travelPlus';
import {cardStyleObj, shadowObj} from '../../../../utils/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...shadowObj,
    ...cardStyleObj,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: DP._8,
    paddingHorizontal: DP._16,
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
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
  flexDirectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  airplane: {
    transform: [{rotate: '90deg'}],
  },
  portName: {
    marginTop: DP._8,
    color: Color.GREYISH_PURPLE,
    lineHeight: DP._16,
    fontSize: DP._14,
  },
  time: {
    fontSize: DP._16,
    lineHeight: DP._20,
  },
  date: {
    fontSize: DP._14,
    lineHeight: DP._20,
  },
  slotDetail: {
    fontSize: DP._12,
    color: Color.TWILIGHT_BLUE,
  },
  marginTop_16: {
    marginTop: DP._16,
  },
  duration: {
    fontSize: DP._10,
    color: Color.GREYISH_PURPLE,
  },
  baseline: {alignItems: 'center'},
  card: (reduceOpacity) => ({
    paddingHorizontal: DP._16,
    paddingTop: DP._12,
    paddingBottom: DP._8,
    opacity: reduceOpacity ? 0.6 : 1,
  }),
  alignItem_flexEnd: {
    alignItems: 'flex-end',
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
  justifyContent_around: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowAndAlignCenter: {flexDirection: 'row', alignItems: 'center'},
  primaryButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DP._24,
  },
  chevronContainer: {
    backgroundColor: Color.DODGER_BLUE + '12',
    padding: DP._3,
    borderRadius: DP._12,
  },
  rescheduleIcon: {
    width: DP._18,
    height: DP._18,
    resizeMode: 'contain',
  },
  flex: {
    flex: 1,
  },
  dot_two: {
    width: DP._4,
    height: DP._4,
    borderRadius: DP._2,
    backgroundColor: Color.LIGHT_BLUEY_GREY,
    marginHorizontal: DP._4,
  },
  durationContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: DP._14,
  },
  marginTop_12: {
    marginTop: DP._12,
  },
  seperatorStyle: {
    backgroundColor: Color.LIGHT_PERIWINKLE,
  },
  headerMonth: {
    color: Color.BLUEY_GREY,
    fontSize: DP._14,
    lineHeight: DP._20,
    marginLeft: DP._4,
  },
  animatedComponent: {
    flex: 1,
    width: DP._60,
  },
  priceLoading: {
    height: DP._20,
    width: DP._60,
    backgroundColor: Color.VERY_LIGHT_PINK,
    borderRadius: DP._2,
  },
  flightParticulars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: DP._12,
  },
  imageStyle: {
    width: DP._32,
    height: DP._32,
    borderRadius: DP._32,
  },
  nameAndNumberContainer: {flex: 1, marginStart: DP._8},
  flightName: {
    color: Color.DARK,
  },
  flightNumber: {
    color: Color.BLUEY_GREY,
    marginTop: DP._2,
    fontSize: DP._12,
  },
  flightPrice: {
    alignSelf: 'flex-end',
    fontSize: DP._16,
    lineHeight: DP._19,
    color: Color.DARK,
  },
  oopMargin: {
    marginTop: DP._20,
  },
  pnr: {
    marginLeft: DP._16,
    marginVertical: DP._4,
    color: Color.BLUEY_GREY,
    fontSize: DP._12,
    lineHeight: DP._14,
  },
  modificationChargeText: {
    fontSize: DP._12,
    lineHeight: DP._16,
    paddingLeft: DP._16,
    paddingVertical: DP._8,
    backgroundColor: Color.DODGER_BLUE + '12',
  },
  reasonBox: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
    backgroundColor: Color.DODGER_BLUE + '12',
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  reasonTitle: {
    fontSize: DP._12,
    lineHeight: DP._14,
  },
  reasonText: {
    fontSize: DP._12,
    lineHeight: DP._16,
  },
  marginBottom_12: {
    marginBottom: DP._12,
  },
  terminal: {
    marginTop: DP._4,
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.GREYISH_PURPLE,
  },
  preBookingSource: {
    fontSize: DP._14,
    lineHeight: DP._20,
  },
  preBookingPort: {
    marginTop: DP._2,
    fontSize: DP._12,
    lineHeight: DP._16,
    color: Color.GREYISH_PURPLE,
  },
});
