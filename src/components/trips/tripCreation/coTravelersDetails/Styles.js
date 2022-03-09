import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    paddingVertical: DP._12,
    marginBottom: DP._8,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginRight: DP._10,
    flex: 0.9,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    marginBottom: DP._4,
  },
  subText: {
    fontSize: DP._12,
    lineHeight: DP._18,
    color: Color.GREY_PURPLE,
  },
  coTravelerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: DP._1,
    borderRadius: DP._4,
    borderColor: Color.DODGER_BLUE,
    paddingVertical: DP._3,
    paddingHorizontal: DP._4,
    backgroundColor: Color.ICE_BLUE,
    marginRight: DP._16,
    marginTop: DP._12,
  },
  coTravelerName: {
    fontSize: DP._12,
    lineHeight: DP._18,
    color: Color.DODGER_BLUE,
    marginRight: DP._8,
  },
});
