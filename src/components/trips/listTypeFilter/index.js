import React from 'react';
import {View} from 'react-native';
import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import styles from './Styles';

const ListTypeFilter = ({
  data,
  selected,
  onChange,
  style,
  buttonStyle,
  textStyle,
}) => {
  function onPress(id) {
    if (selected !== id) {
      onChange(id);
    }
  }

  function renderItem(item, index) {
    const isSelected = selected === item.id;
    return (
      <FTouchableOpacity
        key={item.id}
        style={[styles.renderItem(isSelected, index), ...buttonStyle]}
        activeOpacity={1}
        onPress={() => onPress(item.id)}>
        <FText style={[styles.filterTag(isSelected), ...textStyle]}>
          {item.title}
        </FText>
      </FTouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, ...style]}>{data?.map(renderItem)}</View>
  );
};

export default ListTypeFilter;
