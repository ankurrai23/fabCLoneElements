import {View, FlatList} from 'react-native';
import React from 'react';
import Styles from './Styles';
import TextField from '../textField';
import {DP} from '../../../utils/Dimen';
import FText from '../../rn/FText';
import {Color} from '../../../utils/color/index.travelPlus';
import PickerField from '../pickerField';
import Icon from '../../../assets/icons/Icon';

const FIELD_STATES = [
  {
    label: 'Departure date',
    helperText: 'Enter departure date',
    error: true,
    type: 'textField',
  },
  {
    label: 'From',
    helperText: 'Source and destination cannot be same',
    error: true,
    value: 'Delhi (DEL)',
    type: 'textField',
  },
  {
    label: 'From',
    helperText:
      'Source and destination cannot be same and I do not care about ',
    error: true,
    value: 'With travel opening up, govt. advisories and sources',
    type: 'textField',
  },
  {
    label: 'From',
    helperText: 'Source and destination cannot be same',
    error: true,
    value: 'With travel opening up, govt. advisories and sources',
    rightIcon: <Icon.Cross width={DP._16} height={DP._16} />,
    type: 'textField',
  },
  {
    label: 'From',
    value: 'Delhi',
    type: 'textField',
  },
  {
    label: 'Enter co-travellers name or email',
    value: 'It is raining outside right now let go raining ',
    icon: <Icon.Search width={DP._16} height={DP._16} />,
    type: 'pickerField',
    helperText: 'Location is incorrect',
    rightIcon: <Icon.Cross width={DP._16} height={DP._16} />,
    error: true,
  },
  {
    label: 'Mobile number',
    value: '7342422435',
    icon: <FText style={{color: Color.BLUEY_GREY}}>+91</FText>,
    iconStyle: {
      width: DP._39,
    },
    type: 'textField',
  },
  {
    label: 'Mobile number',
    value: '7342422435',
    icon: <FText style={{color: Color.BLUEY_GREY}}>+999</FText>,
    iconStyle: {
      width: DP._39,
    },
  },
];

const FieldStates = () => {
  const renderItem = ({item, index}) => {
    if (item.type === 'textField')
      return <TextField key={index} {...item} topMargin={DP._18} />;
    else return <PickerField key={index} {...item} topMargin={DP._18} />;
  };

  return (
    <View style={Styles.container}>
      <FlatList data={FIELD_STATES} renderItem={renderItem} />
    </View>
  );
};

export default FieldStates;
