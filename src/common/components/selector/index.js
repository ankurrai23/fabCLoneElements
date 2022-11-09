import {View, FlatList} from 'react-native';
import React from 'react';
import DialogBox from '../dialogBox';
import FText from '../../rn/FText';
import Icon from '../../../assets/icons/Icon';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import Separator from '../separator';
import Styles from './Styles';

const Selector = ({
  title,
  data,
  multiSelect,
  keySelected,
  onItemSelect,
  visible,
  onClose,
  containerStyle,
  itemStyle,
}) => {
  return (
    <DialogBox
      modalVisible={visible}
      ContentModal={
        <View style={[Styles.container, containerStyle]}>
          <FText style={Styles.titleText}>{title}</FText>
          <FlatList
            data={data}
            renderItem={({item}) => {
              const isSelected = keySelected === item.key;
              return (
                <FTouchableOpacity
                  onPress={() => onItemSelect(item)}
                  style={[Styles.itemStyle, itemStyle]}>
                  <FText style={Styles.valueText}>{item.value}</FText>
                  {isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
                </FTouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      }
      onClose={onClose}
    />
  );
};

export default Selector;
