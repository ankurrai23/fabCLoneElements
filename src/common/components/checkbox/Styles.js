import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  checkBox: (isChecked) => ({
    borderWidth: isChecked ? 0 : DP._2,
    borderRadius: DP._2,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
