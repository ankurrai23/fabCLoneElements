import React from 'react';
import {View} from 'react-native';

import FTouchableOpacity from '../../rn/FTouchableOpacity';
import FText from '../../rn/FText';

import Styles from './Styles';

const PickerField = (props) => {
  function renderView() {
    if (!props.value) {
      return (
        <FText
          style={[Styles.placeholder(props.error), props.placeholderStyle]}>
          {props.label || props.placeholder}
        </FText>
      );
    }
    if (props.children) {
      return props.children;
    }
    return (
      <FText
        numberOfLines={props.numberOfLines}
        style={[Styles.value, props.valueStyle]}>
        {props.value}
      </FText>
    );
  }

  return (
    <FTouchableOpacity onPress={props.onPress} style={props.touchContainer}>
      <View style={[Styles.container(props.error), props.style]}>
        {!!props.value && props.label && (
          <FText style={[Styles.floatLabel(props.error)]}>{props.label}</FText>
        )}
        {!!props.icon && (
          <View style={[Styles.iconContainer, props.iconStyle]}>
            {props.icon}
          </View>
        )}
        {renderView()}
        {!!props.rightIcon && (
          <View style={[Styles.iconContainer, props.rightIconStyle]}>
            {props.rightIcon}
          </View>
        )}
      </View>
      <FText style={Styles.helperText(props.error)}>{props.helperText}</FText>
    </FTouchableOpacity>
  );
};

export default PickerField;
