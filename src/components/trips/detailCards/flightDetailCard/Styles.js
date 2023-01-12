import {StyleSheet} from 'react-native';
import {DP} from '../../../../utils/Dimen';
// import {Color} from '../../../utils/color';
import {Color} from '../../../../utils/color/index.travelPlus';
import {cardStyleObj, shadowObj} from '../../../../utils/Utils';

export default StyleSheet.create({
  container: {
    // marginHorizontal: DP._16,
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
    // backgroundColor: Color.DODGER_BLUE + '12',
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
    color: Color.GREYISH_PURPLE,
    fontSize: DP._14,
    lineHeight: DP._16,
    marginTop: DP._8,
  },
  time: {
    fontSize: DP._16,
    lineHeight: DP._18,
  },
  date: {
    fontSize: DP._14,
    lineHeight: DP._16,
  },
  headerMonth: {
    color: Color.BLUEY_GREY,
    fontSize: DP._14,
    marginLeft: DP._2,
    lineHeight: DP._16,
  },
  marginTop_16: {
    marginTop: DP._16,
  },
  marginTop_12: {
    marginTop: DP._12,
  },
  duration: {
    fontSize: DP._10,
    color: Color.GREYISH_PURPLE,
  },
  baseline: {alignItems: 'baseline'},
  card: (modified) => ({
    paddingHorizontal: DP._16,
    paddingTop: DP._12,
    paddingBottom: DP._8,
    opacity: modified ? 0.6 : 1,
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
  justifyContent_around: (duration) => ({
    justifyContent: duration ? 'space-around' : 'flex-start',
    alignItems: 'center',
  }),
  flexRowAndAlignCenter: {flexDirection: 'row', alignItems: 'center'},
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
  flex: {
    flex: 1,
  },
  heading: {
    marginBottom: DP._16,
  },
  dot_two: {
    padding: DP._3,
    borderRadius: DP._4,
    backgroundColor: Color.LIGHT_BLUEY_GREY,
    marginHorizontal: DP._5,
  },
  durationContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: DP._14,
  },
  separator: {
    marginVertical: DP._16,
  },
  actionsSeperator: {
    // marginHorizontal: DP._16,
    backgroundColor: Color.LIGHT_PERIWINKLE,
  },
  travelerNameStyle: {
    marginBottom: DP._8,
    fontSize: DP._12,
    lineHeight: DP._16,
    marginLeft: DP._8,
    color: Color.GREY_PURPLE,
  },
  contactSupport: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
  },
  travelerDetailContainer: {
    paddingHorizontal: DP._16,
    paddingTop: DP._12,
    paddingBottom: DP._8,
  },
  travelerDetailStyle: {
    fontSize: DP._12,
    marginBottom: DP._12,
    lineHeight: DP._15,
  },
  bookingIdTitle: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._4,
    color: Color.BLUEY_GREY,
    fontSize: DP._12,
    lineHeight: DP._14,
  },
  airlineIcon: {
    width: DP._32,
    height: DP._32,
    borderRadius: DP._16,
  },
  terminal: {
    marginTop: DP._4,
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.GREYISH_PURPLE,
  },
});
