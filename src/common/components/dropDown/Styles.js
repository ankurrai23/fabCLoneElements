import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import {shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  flatlistContainer: (showPaddingBottom) => ({
    maxHeight: DP._230,
    backgroundColor: 'white',
    paddingBottom: showPaddingBottom ? DP._8 : 0,
    ...shadowObj,
    borderBottomLeftRadius: DP._8,
    borderBottomRightRadius: DP._8,
  }),
  contentContainer: {
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: DP._16,
    lineHeight: DP._18,
    marginLeft: DP._8,
    flex: 1,
  },
  subText: {
    marginLeft: DP._32,
    color: Color.BLUEY_GREY,
    marginTop: DP._2,
  },
  titleAndIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    alignItems: 'center',
    marginLeft: DP.minus_4,
    marginTop: DP._2,
  },
  labelStyle: {
    marginLeft: DP._4,
  },
  inputStyle: {
    marginLeft: DP._4,
  },
  cardStyle: {
    padding: DP._16,
  },
  closeIcon: {
    alignItems: 'center',
    position: 'absolute',
    right: DP._8,
  },
});
