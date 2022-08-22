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
    borderRadius: DP._4,
    marginBottom: DP._8,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._0_5,
    ...shadowObj,
    flexGrow: 1,
    marginHorizontal: DP._8,
  },
  cardContainer: {
    backgroundColor: Color.WHITE,
  },
  headerContainer: {
    flexGrow: 1,
  },
  headerTitleLoader: {
    width: DP._124,
    height: DP._20,
    backgroundColor: Color.VERY_LIGHT_PINK,
    marginLeft: DP._16,
  },
  headerSubTextLoader: {
    width: DP._178,
    height: DP._16,
    marginTop: DP._16,
    marginLeft: DP._16,
    backgroundColor: Color.VERY_LIGHT_PINK,
  },
  headerSubTextLoader2: {
    width: DP._310,
    height: DP._12,
    marginTop: DP._6,
    backgroundColor: Color.VERY_LIGHT_PINK,
    marginLeft: DP._16,
    marginBottom: DP._16,
  },
  imagePlaceholder1: {
    height: DP._146,
    flex: 0.7,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
  },
  imagePlaceholder2: {
    height: DP._146,
    flex: 0.3,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
    marginLeft: DP._1,
  },
  button: {
    borderWidth: DP._1,
    textAlign: 'center',
    paddingVertical: DP._10,
    color: Color.DARK_SLATE_BLUE,
    borderRadius: DP._18,
    borderColor: Color.DARK_SLATE_BLUE,
    marginTop: DP._16,
  },
  commonPlaceholder: (width, height, marginTop) => ({
    width: width,
    height: height,
    marginTop: marginTop,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
  }),
  commonPlaceholder2: (width, height) => ({
    width: width,
    height: height,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
  }),
  flexRow: {flexDirection: 'row'},
  alignEnd: {alignItems: 'flex-end'},
  amountPlacholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  mainContainer: {
    marginTop: DP._12,
    marginHorizontal: DP._8,
  },
  headerStyle: {
    backgroundColor: Color.TWILIGHT_BLUE,
    alignItems: 'center',
    paddingHorizontal: DP._16,
    paddingVertical: DP._16,
  },
});
