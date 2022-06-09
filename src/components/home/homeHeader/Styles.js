import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  profileNameContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    flex: 1,
    fontSize: DP._20,
  },
  profilePicContainer: {
    width: DP._42,
    height: DP._42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: DP._1_5,
    borderRadius: DP._42,
    backgroundColor: Color.WHITE,
    borderColor: Color.DODGER_BLUE,
    marginLeft: DP._20,
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
  initialsContainer: {
    width: DP._36,
    height: DP._36,
    borderRadius: DP._36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.DARK_SLATE_BLUE,
  },
  initials: {
    fontSize: DP._16,
    color: Color.WHITE,
  },
});
