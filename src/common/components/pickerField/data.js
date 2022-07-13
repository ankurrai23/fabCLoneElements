import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {DP} from '../../../utils/Dimen';
const pickerFieldProps = {
  onPress: () => console.log('PickerField Pressed'),
  label: 'lksdjflßaasdfjlasdfj;lsadfj;alsdfjlasdkfjas;ldkfjals;j',
  topMargin: 8,
  bottomMargin: 8,
  error: true,
  value:
    'alkdfjldksfjldskfjlsdkfjldskfjldskfjjdslkfjdslkfjsdlkfjdslkfjdslkfjsdlfkjdsflkjf',
  helperText:
    'xxxxxxxxxxxxxxxxxxxxxssssjdhslfkdjsalfkdjlkdsjflsdfjsdlfjdslkfjdslfdfsdfsdfsdfsdfdsfds',
  helperTextNumberOfLines: 2,
  rightIcon: <Entypo name="cross" size={DP._24} />,
  icon: <Entypo name="cross" size={DP._24} />,
};

export default pickerFieldProps;
