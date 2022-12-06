import {StyleSheet} from 'react-native';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

export default StyleSheet.create({
  progressBar: (props) => ({
    ...props,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: props?.backgroundColor
      ? props.backgroundColor
      : Color.WHITE,
    height: props?.height ? props.height : DP._20,
    borderColor: props?.borderColor ? props.borderColor : Color.BLACK,
    borderWidth: props?.borderWidth ? props.borderWidth : DP._1,
    borderRadius: props?.borderRadius ? props.borderRadius : DP._3,
  }),
});
