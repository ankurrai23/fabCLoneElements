import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  container: {flex: 1, paddingVertical: DP._24},
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._24,
    marginTop: DP._64,
  },
  scanButtonStyle: (scanDisabled) => ({
    flex: 1,
    marginRight: 4,
    backgroundColor: 'transparent',
    borderWidth: DP._1,
    borderColor: Color.DARK_SLATE_BLUE,
    paddingVertical: DP._12,
    borderRadius: DP._20,
    opacity: scanDisabled ? 0.4 : 1,
  }),
  uploadButtonStyle: {flex: 1, marginLeft: 4},
  scanButtonText: {
    color: Color.DARK_SLATE_BLUE,
    fontSize: DP._12,
  },
  uploadButtonText: {
    color: Color.DARK,
    fontSize: DP._12,
  },
  closeButtonContainer: (type) => ({
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: DP._28,
    marginBottom: type === 'image' ? DP._74 : DP._40,
  }),
  singleImage: {
    flex: 1,
    aspectRatio: 0.55,
  },
  listImageStyle: {
    aspectRatio: 0.55,
    flex: 1,
    marginRight: DP._24,
  },
  flex_1: (type) => ({
    flex: 1,
    backgroundColor: type === 'list' ? Color.WHITE : 'rgb(243,243,243)',
  }),
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  deleteView: {
    position: 'absolute',
    top: 10,
    bottom: 0,
    right: DP._45,
    height: DP._50,
    width: DP._50,
    borderRadius: DP._50,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    paddingHorizontal: DP._18,
    paddingVertical: DP._18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteListView: {
    height: DP._40,
    width: DP._40,
    borderRadius: DP._40,
    backgroundColor: Color.PALE_GREY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: DP._14,
    lineHeight: DP._18,
    color: '#101217',
  },
  sizeTxt: {
    fontSize: DP._10,
    lineHeight: DP._18,
    color: '#7B7988',
  },
  separator: {
    backgroundColor: Color.PALE_GREY,
    height: DP._1,
    marginHorizontal: DP._16,
    marginVertical: DP._5,
  },
  listViewLeftFlex: {
    flex: 1.2,
  },
  listViewTextView: {
    flex: 7.3,
  },
  headerTitle: {
    fontSize: DP._14,
    color: Color.DARK,
    lineHeight: DP._18,
    marginBottom: DP._15,
    marginLeft: DP._18,
  },
});
