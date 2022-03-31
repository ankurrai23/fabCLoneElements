import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._18,
    paddingVertical: DP._15,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstRow: {
    flex: 1,
  },
  secondRow: {
    flex: 1,
    alignItems: 'flex-end',
  },
  nameTxt: {
    fontSize: DP._20,
    color: Color.DARK_BLUE,
  },
  storyContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.WHITE_TWO,
  },
  dateTxt: {
    fontSize: DP._14,
    color: Color.CHARCOAL_GREY_TWO,
  },
  cliamView: {
    paddingVertical: DP._6,
    paddingHorizontal: DP._10,
    borderRadius: DP._8,
    backgroundColor: Color.TWILIGHT_BLUE,
  },
  priceTxt: {
    fontSize: DP._24,
    color: Color.DARK,
  },
  claimTxt: {
    fontSize: DP._16,
    color: Color.WHITE,
  },
});
