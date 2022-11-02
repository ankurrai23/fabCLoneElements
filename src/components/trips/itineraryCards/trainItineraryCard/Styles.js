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
  heading: {
    color: Color.DARK,
    fontSize: DP._14,
  },
  details: {
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
  marginTop_14: {
    marginTop: DP._14,
  },
  duration: {
    fontSize: DP._10,
    color: Color.GREYISH_PURPLE,
  },
  baseline: {alignItems: 'center'},
  card: {padding: DP._16, paddingBottom: DP._12},
  alignItem_flexEnd: {
    alignItems: 'flex-end',
  },
  driverContact: {
    fontSize: DP._12,
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
  durationContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    paddingTop: DP._2,
  },
  width_40: {
    width: '40%',
  },
  width_48: {
    width: '48%',
  },
  width_20: {
    width: '20%',
  },
  textAlign_left: {
    textAlign: 'left',
  },
  textAlign_right: {
    textAlign: 'right',
  },
  textAlign_center: {
    textAlign: 'center',
  },
  selfAlign_center: {
    alignSelf: 'center',
  },
  actionsSeparator: {
    marginHorizontal: DP._16,
    backgroundColor: Color.LIGHT_PERIWINKLE,
  },
});
