import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  animatedComponent: {
    flex: 1,
    width: DP._100,
  },
  loadingCard: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    paddingTop: DP._16,
    paddingBottom: DP._13,
    borderRadius: DP._8,
    marginBottom: DP._8,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._0_5,
    ...shadowObj,
  },
  loadingIcons: {
    width: DP._70,
    height: DP._20,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
    marginBottom: DP._8,
  },
  loadingTitle: {
    width: DP._160,
    height: DP._20,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
    marginBottom: DP._8,
  },
  loadingDate: {
    width: DP._148,
    height: DP._20,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
    marginBottom: DP._40,
  },
  loadingAction: {
    width: DP._70,
    height: DP._20,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
    marginTop: DP._13,
    alignSelf: 'flex-end',
  },
  cardContainer: {
    paddingHorizontal: DP._16,
    backgroundColor: 'white',
  },
  buttonWithIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: DP._16,
  },
  flexRow: {
    flexDirection: 'row',
  },
  header: {
    marginHorizontal: DP._24,
    marginTop: DP._16,
  },
  buttonTextStyle: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
