import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  background: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flex: 1,
  },
  ContainerModal: {
    backgroundColor: Color.OPACITY,
    flex: 1,
  },
  TouchWithoutFeedBack: {
    flex: 1,
  },
  headerView: {
    width: DP._55,
    height: DP._5,
    backgroundColor: Color.WHITESH_GREY,
    borderRadius: 20,
  },
  mainContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
  },
  dashView: {
    alignItems: 'center',
    marginVertical: DP._8,
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
