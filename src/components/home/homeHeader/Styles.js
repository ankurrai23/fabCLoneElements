import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  profileNameContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: DP._20,
  },
  profilePicContainer: {
    width: DP._44,
    height: DP._44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: DP._2,
    borderRadius: DP._22,
    backgroundColor: Color.WHITE,
    borderColor: Color.DODGER_BLUE,
  },
  imageContainer: {
    width: DP._35,
    height: DP._35,
    borderRadius: DP._35,
  },
  letter: {
    fontSize: DP._28,
    color: Color.WHITE,
  },
});
