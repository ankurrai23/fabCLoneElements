import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {DP} from '../../../utils/Dimen';
export default {
  label: 'Namddsdsdsdsffcwecqwgevfvwerfvwefvcwevcwevdcxedcwqedwedqwcsace',
  onChangeText: (text) => console.log('Text =>', text),
  helperText: 'error reported',
  placeholder: 'Please enter full name',
  // error: true,
  icon: <Entypo name="cross" size={DP._16} />,
  topMargin: 8,
  bottomMargin: 0,
  rightIcon: <Entypo name="cross" size={DP._16} />,
  error: true,
};
