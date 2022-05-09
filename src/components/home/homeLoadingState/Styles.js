import {StyleSheet, Dimensions} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  animatedComponent: {flex: 1, width: DP._100},
  loadingCardStyle: (cardColor) => ({
    width: 0.44 * deviceWidth,
    height: 175,
    backgroundColor: cardColor,
    borderRadius: 12,
    marginRight: DP._8,
  }),
  inboxTextPlaceholder: (width) => ({
    width: width,
    height: DP._12,
    marginBottom: DP._10,
    backgroundColor: '#eee',
  }),
  inboxPlaceholderContainer: {
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._1,
    padding: DP._16,
    marginHorizontal: DP._16,
    marginTop: DP._8,
    borderRadius: DP._12,
    paddingTop: DP._15,
    backgroundColor: Color.WHITE,
    ...shadowObj,
  },
  arrowContainer: {
    position: 'absolute',
    bottom: DP._16,
    right: 0,
    backgroundColor: Color.DODGER_BLUE_14,
    padding: DP._4,
    borderTopLeftRadius: DP._11,
    borderBottomLeftRadius: DP._11,
  },
  datePlaceholder: {
    width: '30%',
    height: 10,
    backgroundColor: '#eee',
    marginTop: DP._4,
  },
  claimsCardContainerLoader: {
    flexDirection: 'row',
    marginTop: DP._34,
  },
  marginHorizontal_24: {
    marginHorizontal: DP._16,
  },
  sectionTitleLoader: {
    fontSize: DP._16,
    color: Color.DARK,
    // paddingLeft: DP._24,
    // marginTop: DP._24,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: DP._16,
    // paddingVertical: DP._5,
    marginTop: DP._24,
  },
  seeMore: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
  },
});
