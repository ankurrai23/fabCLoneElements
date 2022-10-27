import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {cardStyleObj, shadowObj} from '../../../utils/Utils';
export default StyleSheet.create({
  container: {
    marginHorizontal: DP._16,
    ...shadowObj,
    ...cardStyleObj,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: DP._13,
    paddingHorizontal: DP._16,
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
    backgroundColor: Color.DODGER_BLUE + '12',
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
    fontSize: DP._12,
  },
  time: {
    marginTop: DP._4,
    fontSize: DP._14,
  },
  date: {
    fontSize: DP._18,
  },
  marginTop_16: {
    marginTop: DP._16,
  },
  duration: {
    fontSize: DP._10,
    color: Color.GREYISH_PURPLE,
  },
  baseline: {alignItems: 'baseline'},
  card: (modified) => ({padding: DP._16, opacity: modified ? 0.6 : 1}),
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
    marginVertical: DP._16,
    marginTop: DP._24,
    marginHorizontal: DP._16,
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
  separator: {
    marginVertical: DP._16,
  },
});
