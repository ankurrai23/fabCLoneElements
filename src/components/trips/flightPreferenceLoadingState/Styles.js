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
    marginHorizontal: DP._8,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._0_5,
    ...shadowObj,
    padding: DP._16,
  },
  loadingCard2: {
    paddingVertical: DP._16,
    paddingLeft: DP._16,
    backgroundColor: 'white',
    ...shadowObj,
    borderRadius: DP._4,
    marginBottom: DP._8,
  },
  cardContainer: {backgroundColor: Color.WHITE},
  headerContainer: {
    paddingVertical: DP._16,
    paddingHorizontal: DP._16,
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
    marginTop: DP._32,
    backgroundColor: Color.VERY_LIGHT_PINK,
  },
  headerSubTextLoader2: {
    width: DP._310,
    height: DP._12,
    marginTop: DP._6,
    backgroundColor: Color.VERY_LIGHT_PINK,
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
  mainContainer: {marginTop: DP._12, marginHorizontal: DP._8},
  flightIcon: {
    width: DP._32,
    height: DP._32,
    borderRadius: DP._16,
    backgroundColor: Color.VERY_LIGHT_PINK,
  },
  flightName: {
    height: DP._16,
    width: DP._48,
    backgroundColor: Color.VERY_LIGHT_PINK,
    marginLeft: DP._16,
    marginRight: DP._8,
  },
  flightNumber: {
    height: DP._16,
    width: DP._48,
    backgroundColor: Color.VERY_LIGHT_PINK,
    marginLeft: DP._8,
  },
  line: {
    borderStyle: 'dashed',
    flex: 1,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: 1,
    borderRadius: 1,
  },
  dot: {
    width: DP._8,
    height: DP._8,
    borderRadius: DP._4,
    backgroundColor: Color.LIGHT_BLUEY_GREY,
    marginLeft: DP._8,
  },
  whiteDot: {
    padding: DP._2,
    borderWidth: DP._2,
    borderRadius: DP._4,
    borderColor: Color.LIGHT_BLUEY_GREY,
    marginRight: DP._8,
  },
  airplane: {transform: [{rotateZ: '90deg'}], top: 1},
  time2: {
    width: '50%',
    height: DP._14,
    backgroundColor: Color.VERY_LIGHT_PINK,
    marginTop: DP._8,
  },
  barContainer: {
    paddingVertical: DP._13,
    paddingHorizontal: DP._16,
    backgroundColor: Color.PALE_GREY,
    marginBottom: DP._16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowAlignCenter: {flexDirection: 'row', alignItems: 'center'},
  flex: (value) => ({
    flex: value,
  }),
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
