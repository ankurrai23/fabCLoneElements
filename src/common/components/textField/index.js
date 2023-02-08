import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';

/*
Layout Animation creating issues in android
*/

import {
  Animated,
  Easing,
  Keyboard,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import FText from '../../rn/FText';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

import Styles from './Styles';
import {isPlatformIos} from '../../../utils/Utils';

const cleanStyle = {
  fontSize: DP._14,
  top: DP._13,
  left: -4,
};

const dirtyStyle = {
  fontSize: DP._12,
  top: DP.minus_10,
  left: DP.minus_28,
};

/*
Do not use styles for adding the top and bottom margin to this component
To add some margin at the top, use topMargin prop
To add some margin at the bottom, use bottomMargin prop
*/
function TextField(
  {
    value,
    defaultValue,
    placeholder,
    icon,
    labelDirtyLeft,
    onFocus,
    onBlur,
    onChangeText,
    style,
    topMargin,
    bottomMargin,
    error,
    containerStyle,
    label,
    rightIcon,
    helperText,
    iconStyle,
    rightIconStyle,
    onTextInput,
    onEndEditing,
    labelStyle,
    onBlurType,
    editable = true,
    secureTextEntry,
    password,
    inputStyle,
    multiline,
    textAlignVertical,
    autoFocus,
    selectTextOnFocus,
  },
  ref,
) {
  const textInput = useRef();
  const isDirty = value || placeholder || defaultValue;
  const [state, setState] = useState({
    text: value || defaultValue,
    dirty: isDirty,
    isFocused: false,
    labelStyle: {
      fontSize: new Animated.Value(
        isDirty ? dirtyStyle.fontSize : cleanStyle.fontSize,
      ),
      top: new Animated.Value(isDirty ? dirtyStyle.top : cleanStyle.top),
      left: new Animated.Value(
        isDirty && icon ? labelDirtyLeft || dirtyStyle.left : cleanStyle.left,
      ),
    },
  });
  console.log('state', state.labelStyle);

  useImperativeHandle(ref, () => ({
    focus,
    blur,
    isFocused,
  }));

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  });

  useEffect(() => {
    if (typeof value !== 'undefined') {
      if (
        Boolean(textInput.current.isFocused() || Boolean(value)) !== state.dirty
      ) {
        _animate(Boolean(value));
        setState((prevState) => ({...prevState, dirty: Boolean(value)}));
      }
    }
  }, [value, state.dirty]);

  const _animate = (dirty) => {
    const dirtyStyleConfig = dirtyStyle;
    if (labelDirtyLeft) {
      dirtyStyleConfig.left = labelDirtyLeft;
    }
    const nextStyle = dirty ? dirtyStyleConfig : cleanStyle;
    let anims = Object.keys(nextStyle).map((prop) => {
      let initialLeft = -4;
      let toValue = prop === 'left' && !icon ? initialLeft : nextStyle[prop];
      return Animated.timing(
        state.labelStyle[prop],
        {
          toValue: toValue,
          duration: 200,
          useNativeDriver: false,
        },
        Easing.ease,
      );
    });

    Animated.parallel(anims).start();
  };

  const _onFocus = () => {
    _animate(true);
    setState((prevState) => ({...prevState, dirty: true, isFocused: true}));
    if (onFocus) {
      onFocus();
    }
  };

  const _onBlur = () => {
    setState((prevState) => ({...prevState, isFocused: false}));
    if (textInput.current.isFocused()) {
      textInput.current.blur();
    }

    if (!value) {
      _animate(false);
      setState((prevState) => ({...prevState, dirty: false}));
    }

    if (onBlur) {
      onBlur(value);
    }
    onBlurType?.(value, label);
  };

  const _onChangeText = (text) => {
    setState((prevState) => ({...prevState, isFocused: true}));
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const updateText = (event) => {
    const text = event.nativeEvent.text;
    if (onEndEditing) {
      onEndEditing(text);
    }
  };

  const _renderLabel = () => {
    const lStyle = StyleSheet.flatten([
      state.labelStyle,
      Styles.label,
      labelStyle,
      state.isFocused && {
        color: error ? Color.PASTEL_RED : Color.DODGER_BLUE,
      },
      error && value && {color: Color.PASTEL_RED},
      {fontFamily: 'Rubik-Regular'},
    ]);

    return (
      <Animated.Text numberOfLines={1} style={lStyle}>
        {label}
      </Animated.Text>
    );
  };

  const _keyboardDidHide = () => {
    if (textInput.current.isFocused() && !isPlatformIos()) {
      textInput.current.blur();
      setState((prevState) => ({...prevState, isFocused: false}));
    }
  };

  const _onTextInput = (event) => {
    onTextInput && onTextInput(event.nativeEvent);
  };

  const blur = () => {
    textInput.current.blur();
  };

  const focus = () => {
    console.log('focus called');
    textInput.current.focus();
  };

  const isFocused = () => {
    textInput.current.isFocused();
  };

  const elementStyles = [Styles.element, style];

  return (
    <View style={Styles.mainContainer(topMargin, bottomMargin)}>
      <View style={[Styles.container(state.isFocused, error), containerStyle]}>
        {!!icon && (
          <View style={[Styles.iconContainer(true), iconStyle]}>{icon}</View>
        )}
        <View style={elementStyles}>
          {!!label && _renderLabel()}
          <TextInput
            onBlur={_onBlur}
            onChangeText={_onChangeText}
            onEndEditing={updateText}
            onFocus={_onFocus}
            onTextInput={_onTextInput}
            ref={textInput}
            placeholderTextColor={Color.GREY_PURPLE}
            secureTextEntry={secureTextEntry || password} // Compatibility
            editable={editable}
            multiline={multiline}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            textAlignVertical={textAlignVertical}
            autoFocus={autoFocus}
            selectTextOnFocus={selectTextOnFocus}
            style={[
              Styles.input(editable),
              inputStyle,
              {
                marginLeft: isPlatformIos() ? 0 : -4,
              },
            ]}
          />
        </View>
        {!!rightIcon && (
          <View style={[Styles.iconContainer(false), rightIconStyle]}>
            {rightIcon}
          </View>
        )}
      </View>
      {!!helperText &&
        (typeof helperText === 'object' ? (
          helperText
        ) : (
          <View style={Styles.helperTextContainer}>
            <FText style={Styles.helperText(error, bottomMargin)}>
              {helperText}
            </FText>
          </View>
        ))}
    </View>
  );
}

export default React.forwardRef(TextField);
