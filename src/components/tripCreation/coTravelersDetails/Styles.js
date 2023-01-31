import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    marginBottom: DP._4,
  },
  titleSubContainer: {
    flex: 0.9,
    // marginBottom: DP._4,
  },
  hitSlop: {
    top: DP._15,
    bottom: DP._15,
    left: DP._10,
    right: 0,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addDetails: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
  },
  subText: {
    fontSize: DP._12,
    lineHeight: DP._16,
    color: Color.GREY_PURPLE,
    marginTop: DP._4,
    marginRight: DP._12,
  },
  coTravelerContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0, //1
    borderRadius: DP._20, //4
    borderColor: Color.DODGER_BLUE,
    paddingVertical: DP._2,
    paddingHorizontal: DP._8,
    backgroundColor: Color.ICE_BLUE,
    marginRight: DP._8,
    marginTop: DP._8,
  },
  coTravelerName: {
    fontSize: DP._12,
    lineHeight: DP._18,
    color: Color.DODGER_BLUE,
    // marginRight: DP._8,
  },
  addRemoveButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: DP._4,
  },
  optional: {
    color: Color.GREY_6,
  },
});
