import {StyleSheet} from 'react-native';
import {DP} from '../../../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../../../utils/Utils';

export default StyleSheet.create({
  animatedComponent: {
    flex: 1,
    width: DP._100,
  },
  cardContainer: {padding: DP._16},
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
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flightCard: {
    backgroundColor: 'white',
    borderRadius: DP._12,
    ...shadowObj,
    marginTop: DP._8,
    marginBottom: DP._16,
  },
  subContainerStyle: (alignItems = 'flex-start') => ({
    marginTop: DP._16,
    flex: 1,
    alignItems: alignItems,
  }),
  airplane: {
    transform: [{rotate: '90deg'}],
  },
});
