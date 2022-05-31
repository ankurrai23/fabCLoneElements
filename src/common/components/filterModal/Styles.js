import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import {Specs} from '../../../utils/Utils';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.6,
    backgroundColor: Color.WHITE,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius: DP._20,
    borderTopRightRadius: DP._20,
  },
  notch: {
    width: DP._56,
    height: DP._5,
    backgroundColor: Color.WHITESH_GREY,
    borderRadius: DP._100,
    alignSelf: 'center',
    marginTop: DP._8,
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
    marginTop: DP._28
  },
  buttonStyle: (type) => ({
      width: DP._150,
      height: DP._48,
      borderRadius: DP._24,
      borderWidth: type === 'PRIMARY' ? 0 : DP._0_5,
      borderColor: type === 'PRIMARY' ? '' : Color.DARK,
      backgroundColor: type === 'PRIMARY' ? Color.SUN_YELLOW : Color.WHITE
  })
});
