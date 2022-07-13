import React from 'react';
import {View} from 'react-native';

import FTouchableOpacity from '../../rn/FTouchableOpacity';
import FText from '../../rn/FText';

import Styles from './Styles';

/*
Do not use styles for adding the top and bottom margin to this component
To add some margin at the top, use topMargin prop
To add some margin at the bottom, use bottomMargin prop
*/

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
        style={[Styles.value(props.editable, props.error), props.valueStyle]}>
        {props.value}
      </FText>
    );
  }

  return (
    <FTouchableOpacity onPress={props.onPress} style={props.touchContainer}>
      <View
        style={[Styles.container(props.error, props.topMargin), props.style]}>
        {!!props.value && props.label && (
          <FText style={[Styles.floatLabel(props.error)]}>{props.label}</FText>
        )}
        {!!props.icon && (
          <View style={[Styles.iconContainer(true), props.iconStyle]}>
            {props.icon}
          </View>
        )}
        {renderView()}
        {!!props.rightIcon && (
          <View style={[Styles.iconContainer(false), props.rightIconStyle]}>
            {props.rightIcon}
          </View>
        )}
      </View>
      <View style={Styles.helperTextContainer(props.bottomMargin)}>
        <FText style={Styles.helperText(props.error)}>{props.helperText}</FText>
      </View>
    </FTouchableOpacity>
  );
};

PickerField.defaultProps = {
  editable: true,
};

export default PickerField;
