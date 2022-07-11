import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {cardStyleObj, shadowObj} from '../../../utils/Utils';

export default StyleSheet.create({
  container: (notesIsPresent) => ({
    padding: DP._24,
    paddingBottom: notesIsPresent ? DP._16 : DP._24,
    ...cardStyleObj,
    ...shadowObj,
  }),
  titleContainer: {
    alignItems: 'flex-start',
  },
  image: {
    width: DP._40,
    height: DP._40,
    borderRadius: DP._8,
  },
  title: {
    fontSize: DP._20,
    color: Color.CHARCOAL_GREY_TWO,
    lineHeight: DP._18,
    paddingTop: DP._2,
    marginBottom: DP._8,
  },
  date: {
    color: Color.BLUEY_GREY,
    fontSize: DP._12,
  },
  amount: {
    fontSize: DP._32,
    marginVertical: DP._8,
  },
  remark: {
    marginTop: DP._15,
    color: Color.DARK,
  },
  detailContainer: {
    marginLeft: DP._16,
    flex: 1,
  },
  wheeler: {
    fontSize: DP._12,
    color: Color.BLUEY_GREY,
    marginBottom: DP._8,
  },
  amountContainer: {
    justifyContent: 'space-between',
  },
  status: (textColor) => ({
    fontSize: DP._12,
    color: textColor,
    backgroundColor: textColor + '1a',
    alignSelf: 'flex-start',
    borderRadius: DP._4,
    overflow: 'hidden',
    paddingHorizontal: DP._4,
  }),
  separator: {
    marginTop: DP._16,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
