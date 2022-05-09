import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderRadius: DP._8,
    paddingVertical: DP._16,
    paddingHorizontal: DP._16,
    marginVertical: DP._8,
    marginHorizontal: DP._19,
  },
  flexView: (margin) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...(margin && {
      marginTop: DP._9,
    }),
  }),
  sourceTxt: {
    fontSize: DP._17,
    lineHeight: DP._21,
    color: Color.DARK_BLUE,
  },
  iteneryView: {
    height: DP._16,
    width: DP._63,
    paddingHorizontal: DP._8,
    backgroundColor: Color.PURPLEY,
    borderRadius: DP._9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itineraryTxt: {
    fontSize: DP._10,
    lineHeight: DP._12,
    color: Color.WHITE,
  },
  flex6: {
    flex: 6,
  },
  editTxt: {
    fontSize: DP._12,
    lineHeight: DP._14,
    color: Color.DODGER_BLUE,
    marginLeft: DP._6,
  },
  dateTxt: {
    fontSize: DP._14,
    lineHeight: DP._18,
    color: Color.DARK,
  },
  touchView: {
    top: 10,
    bottom: 10,
    left: 20,
    right: 15,
  },
});
