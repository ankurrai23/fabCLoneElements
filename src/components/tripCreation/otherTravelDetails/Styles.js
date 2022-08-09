import {StyleSheet, Dimensions} from 'react-native';

import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';
import {Specs} from '../../../utils/Utils';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
  },
  textFieldLabel: {
    backgroundColor: Color.WHITE,
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    marginTop: DP._8,
    marginBottom: DP._8,
  },
  paddingView: {
    paddingBottom: DP._30,
  },
  closeView: {
    alignItems: 'flex-end',
    marginRight: DP._18,
  },
  heading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'center',
    marginVertical: DP._15,
    ...Specs.fontRegular,
  },
  separator: {
    backgroundColor: Color.PALE_GREY,
    height: DP._1,
    marginVertical: DP._7,
  },
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: DP._16,
    borderBottomColor: Color.SILVER,
  },
  itemText: {
    fontSize: DP._16,
    color: Color.GREY_PURPLE,
    ...Specs.fontRegular,
  },
  flatListStyle: {
    maxHeight: 0.4 * Dimensions.get('window').height,
    marginBottom: DP._16,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: DP._10,
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: Color.WHITE,
    width: DP._150,
    height: DP._48,
    borderRadius: DP._24,
    borderWidth: 1,
    borderColor: Color.DARK_BLUE,
  },
  cancelText: {
    color: Color.DARK_SLATE_BLUE_TWO,
    fontSize: DP._16,
  },
  applyButton: {
    backgroundColor: Color.SUN_YELLOW,
    width: DP._150,
    height: DP._48,
    borderRadius: DP._24,
  },
});
