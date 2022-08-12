import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: DP._16,
    paddingVertical: DP._24,
    flexGrow: 1,
  },
  rejectButtonStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    marginRight: DP._4,
    borderRadius: DP._24,
  },
  approveButtonStyle: {flex: 1, marginLeft: DP._4, borderRadius: DP._24},
  buttonContainer: {flexDirection: 'row', marginTop: DP._24},
  editIcon: {width: DP._32, height: DP._32, resizeMode: 'contain'},
  requestForModificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FlexGrow: {
    flexGrow: 1,
  },
});
