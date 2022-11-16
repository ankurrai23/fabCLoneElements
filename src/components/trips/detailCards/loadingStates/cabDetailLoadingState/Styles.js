import {StyleSheet} from 'react-native';
import {DP} from '../../../../../utils/Dimen';
import {Color} from '../../../../../utils/color';
import {shadowObj} from '../../../../../utils/Utils';

export default StyleSheet.create({
  animatedComponent: {
    flex: 1,
    width: DP._100,
  },
  cardContainer: {padding: DP._16},
  commonPlaceholder: (width, height) => ({
    width: width,
    height: height,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
  }),
  borderRadius_12: {
    borderRadius: DP._12,
  },
  loadingCard: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._12,
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: DP._12,
    ...shadowObj,
    marginBottom: DP._24,
  },
  marginBottom: (val) => ({marginBottom: val}),
});
