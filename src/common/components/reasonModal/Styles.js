import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  bottomSheet: {},
  heading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'center',
    marginVertical: DP._20,
  },
  submitButton: {
    marginTop: DP._24,
  },
  closeView: {
    alignItems: 'flex-end',
  },
  paddingView: {
    paddingBottom: DP._30,
    paddingHorizontal: DP._25,
  },
  modal: {
    justifyContent: 'flex-end',
  },
  containerSheet: {
    padding: DP._24,
    paddingTop: 0,
  },
  crossIcon: {
    alignSelf: 'flex-end',
  },
});
