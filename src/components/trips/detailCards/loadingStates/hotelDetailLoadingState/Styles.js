import {StyleSheet} from 'react-native';
import {DP} from '../../../../../utils/Dimen';
import {Color} from '../../../../../utils/color';
import {shadowObj} from '../../../../../utils/Utils';

export default StyleSheet.create({
  animatedComponent: {
    flex: 1,
    width: DP._100,
  },
  cardContainer: {paddingHorizontal: DP._16},
  commonPlaceholder2: (width, height, marginTop) => ({
    width: width,
    height: height,
    marginTop: marginTop,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
  }),
  commonPlaceholder: (width, height) => ({
    width: width,
    height: height,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
  }),
  flexRow: {
    flexDirection: 'row',
  },
  loadingCard: {
    padding: DP._16,
    paddingBottom: DP._24,
  },
  sectionTitle: {
    fontSize: DP._12,
    color: Color.GREY_PURPLE,
    marginTop: DP._8,
  },
  buttonContainer: {
    backgroundColor: Color.DODGER_BLUE + '12',
    flexDirection: 'row',
    padding: DP._16,
    justifyContent: 'space-between',
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payment: {flex: 1, flexDirection: 'row'},
  hotelCard: {
    backgroundColor: 'white',
    borderRadius: DP._12,
    ...shadowObj,
    marginTop: DP._16,
  },
  subContainer: {marginLeft: DP._8, flexGrow: 1},
});
