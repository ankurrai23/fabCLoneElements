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
    flexGrow: 1,
  },
  loadingIcons: {
    width: DP._70,
    height: DP._20,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
    marginBottom: DP._16,
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
    marginBottom: DP._52,
  },
  loadingAction: {
    width: DP._70,
    height: DP._20,
    backgroundColor: Color.VERY_LIGHT_PINK_2,
    marginTop: DP._13,
    alignSelf: 'flex-end',
  },
  cardContainer: {paddingHorizontal: DP._16, backgroundColor: Color.WHITE},
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: DP._16,
    marginBottom: DP._24,
    flexGrow: 1,
  },
  dashedLineContainer: {
    position: 'absolute',
    height: '100%',
    left: DP._14,
    top: DP._32,
    zIndex: -1,
    paddingTop: DP._4,
    paddingBottom: DP._18,
  },
  itineraryCard: {flexDirection: 'row', marginBottom: DP._16},
  iconPlaceholder: {
    padding: DP._3,
    backgroundColor: Color.DODGER_BLUE + '4d',
    borderRadius: DP._15,
  },
  icons: {
    backgroundColor: Color.WHITE,
    width: DP._24,
    height: DP._24,
    borderRadius: DP._12,
    borderColor: Color.DODGER_BLUE,
    borderWidth: DP._2,
  },
  infoLoader: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._24,
    backgroundColor: Color.WHITE,
    paddingBottom: DP._60,
  },
  infoLoaderText: {
    width: DP._70,
    height: DP._16,
    backgroundColor: Color.VERY_LIGHT_PINK,
  },
  infoLoaderText2: {
    width: DP._160,
    height: DP._16,
    backgroundColor: Color.VERY_LIGHT_PINK,
    marginTop: DP._8,
  },
  headerTitleLoader: {
    width: DP._148,
    height: DP._24,
    backgroundColor: Color.VERY_LIGHT_PINK,
  },
  headerSubTextLoader: {
    width: DP._76,
    height: DP._16,
    marginTop: DP._5,
    backgroundColor: Color.VERY_LIGHT_PINK,
  },
});
