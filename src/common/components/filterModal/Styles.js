import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import {Specs} from '../../../utils/Utils';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.GREY_PURPLE,
  },
  contentContainer:{
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    height: height,
  },
  clearFilterContainer: {
    width: width,
    marginTop: DP._16,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: DP._24,
    paddingRight: DP._29,
  },
  clearFilterText: {
    color: Color.DODGER_BLUE,
    fontSize: DP._14,
    ...Specs.fontRegular,
  },
  filterTypeText: {
    color: Color.DARK,
    fontSize: DP._20,
    ...Specs.fontRegular,
    marginTop: DP._18,
    marginBottom: DP._16
  },
  filterItemContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: DP._24,
    paddingRight: DP._29,
    paddingVertical: DP._17,
  },
  itemText: {
    color: Color.DARK_BLUE_OPACITY_8,
    fontSize: DP._16,
    ...Specs.fontRegular,
  },
  actionButtonContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: DP._24,
    paddingRight: DP._29,
    marginTop: DP._10,
    marginBottom: DP._24
  },
  buttonStyle: (type) => ({
      width: DP._150,
      height: DP._48,
      borderRadius: DP._24,
      borderWidth: type === 'PRIMARY' ? 0 : DP._0_5,
      borderColor: type === 'PRIMARY' ? '' : Color.DARK,
      backgroundColor: type === 'PRIMARY' ? Color.SUN_YELLOW : Color.WHITE
  }),
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cancelText: {
    color: Color.DARK_SLATE_BLUE_TWO,
    fontSize: DP._16,
  },
  applyText: {
    color: Color.DARK_SLATE_BLUE_TWO,
    fontSize: DP._16,
  },
});
