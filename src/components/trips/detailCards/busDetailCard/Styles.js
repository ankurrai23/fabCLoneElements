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
    alignItems: 'center',
  },
  flowRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  airplane: {
    transform: [{rotate: '90deg'}],
  },
  heading: {
    color: Color.DARK,
    fontSize: DP._14,
    lineHeight: DP._20,
  },
  detail: {
    marginTop: DP._2,
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
    lineHeight: DP._16,
  },
  date: {
    fontSize: DP._14,
    lineHeight: DP._20,
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
    lineHeight: DP._12,
  },
  baseline: {alignItems: 'center'},
  card: (reduceOpacity) => ({
    paddingHorizontal: DP._16,
    paddingVertical: DP._12,
    opacity: reduceOpacity ? 0.6 : 1,
  }),
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
  headerMonth: {
    color: Color.BLUEY_GREY,
    fontSize: DP._14,
    lineHeight: DP._20,
    marginLeft: DP._2,
  },
  hyphen: {
    alignSelf: 'center',
    fontSize: DP._12,
    color: Color.BLUEY_GREY,
  },
  flexRow: {flexDirection: 'row'},
  justifyContent_around: (duration) => ({
    justifyItem: duration ? 'space-around' : 'flex-start',
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
  fontSize_12: {
    fontSize: DP._12,
  },
  color_grey: {
    color: Color.GREY_PURPLE,
  },
  detailLabelStyle: {
    marginLeft: DP._8,
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
  },
  separatorStyle: {
    marginTop: DP._12,
    backgroundColor: Color.LIGHT_PERIWINKLE,
  },
  marginBottom_12: {
    marginBottom: DP._12,
  },
  color_blue: {
    color: Color.DODGER_BLUE,
  },
  marginTop_8: {
    marginTop: DP._8,
  },
  actionsSeparator: {
    marginHorizontal: DP._16,
    backgroundColor: Color.LIGHT_PERIWINKLE,
  },
  lineHeight_16: {
    lineHeight: DP._16,
  },
});
