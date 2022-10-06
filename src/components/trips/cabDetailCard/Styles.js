import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {cardStyleObj, shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    ...shadowObj,
    ...cardStyleObj,
  },
  heading: {
    marginBottom: DP._16,
    fontSize: DP._14,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: DP._13,
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
  flowRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  airplane: {
    transform: [{rotate: '90deg'}],
  },
  portName: {
    color: Color.DARK,
    fontSize: DP._14,
  },
  time: {
    marginTop: DP._4,
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
  },
  date: {
    fontSize: DP._18,
  },
  slotDetail: {
    fontSize: DP._12,
    color: Color.TWILIGHT_BLUE,
  },
  marginTop_12: {
    marginTop: DP._12,
  },
  duration: {
    fontSize: DP._10,
    color: Color.GREYISH_PURPLE,
  },
  baseline: {alignItems: 'center'},
  card: {padding: DP._16},
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
    padding: DP._3,
    borderRadius: DP._4,
    backgroundColor: Color.LIGHT_BLUEY_GREY,
    marginHorizontal: DP._5,
  },
  durationContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
});
