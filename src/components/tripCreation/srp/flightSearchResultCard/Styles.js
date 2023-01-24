import {StyleSheet} from 'react-native';
import {cardStyleObj, shadowObj} from '../../../../utils/Utils';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default StyleSheet.create({
  container: (isSelected) => ({
    backgroundColor: Color.WHITE,
    overflow: 'hidden',
    paddingVertical: DP._12,
    paddingHorizontal: DP._16,
    borderRadius: DP._12,
    ...cardStyleObj,
    ...shadowObj,
    borderColor: isSelected ? Color.DARK_SEA_FOAM : Color.LIGHT_PERIWINKLE,
    borderWidth: isSelected ? DP._1 : DP._0_5,
  }),
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
    marginTop: DP._2,
  },
  flightTimeTextStyle: {
    fontSize: DP._16,
    color: Color.DARK,
  },
  flightTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DP._4,
    justifyContent: 'space-between',
    minWidth: 160,
  },
  flightDurationContainer: {
    flexDirection: 'row',
    minWidth: 160,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dot: {
    padding: DP._2,
    borderRadius: DP._4,
    backgroundColor: Color.LIGHT_BLUEY_GREY,
    marginHorizontal: DP._4,
  },
  airplane: {transform: [{rotate: '90 deg'}]},
  nameAndDurationContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  flightDuration: {
    fontSize: DP._10,
    color: Color.GREYISH_PURPLE,
  },
  durationAndStopsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  airportCode: {
    color: Color.GREY_PURPLE,
  },
});
