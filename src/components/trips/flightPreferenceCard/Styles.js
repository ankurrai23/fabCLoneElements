import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderRadius: DP._4,
    overflow: 'hidden',
    padding: DP._16,
  },
  flightLogoAndNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: DP._80,
    marginBottom: DP._16,
  },
  flightName: {
    marginLeft: DP._16,
  },
  flightNumber: {color: Color.BATTLESHIP_GREY_TWO},
  flightTimeTextStyle: {fontSize: DP._20},
  flexGrow_1: {flexGrow: 1},
  flightTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DP._4,
    minWidth: 160,
  },
  flightDurationContainer: {
    flexDirection: 'row',
    minWidth: 160,
    marginBottom: DP._24,
    alignItems: 'center',
  },
  dot: {
    width: DP._8,
    height: DP._8,
    backgroundColor: Color.LIGHT_BLUEY_GREY,
    borderRadius: DP._4,
    marginLeft: DP._8,
  },
  line: {
    flexGrow: 1,
    height: DP._1,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
  },
  airplane: {transform: [{rotate: '90 deg'}]},
  whiteDot: {
    padding: DP._2,
    borderWidth: DP._2,
    borderRadius: DP._4,
    borderColor: Color.LIGHT_BLUEY_GREY,
    marginRight: DP._8,
  },
  nameAndDurationContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  buttonStyle: (preference) => ({
    borderWidth: 1,
    padding: DP._10,
    borderRadius: DP._18,
    borderColor: preference ? Color.SUN_YELLOW : Color.TWILIGHT_BLUE,
    alignItems: 'center',
    backgroundColor: preference ? Color.SUN_YELLOW : 'transparent',
  }),
  dot_two: {
    padding: DP._3,
    borderRadius: DP._4,
    backgroundColor: Color.LIGHT_BLUEY_GREY,
    marginHorizontal: DP._5,
  },
  preferenceContainer: {
    position: 'absolute',
    width: DP._30,
    height: DP._30,
    backgroundColor: 'white',
    borderRadius: DP._15,
    alignItems: 'center',
    justifyContent: 'center',
    right: 3,
    top: 3,
  },
});
