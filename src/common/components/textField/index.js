import React from 'react';
import PropTypes from 'prop-types';

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
  // LayoutAnimation,
  Platform,
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
class TextField extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    label: PropTypes.string,
    value: PropTypes.string,
    labelStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    error: PropTypes.bool,
    onBlurType: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      text: props.value || props.defaultValue,
      dirty: props.value || props.placeholder || props.defaultValue,
      isFocused: false,
    };

    this.state.labelStyle = {
      fontSize: new Animated.Value(
        this.state.dirty ? dirtyStyle.fontSize : cleanStyle.fontSize,
      ),
      top: new Animated.Value(
        this.state.dirty ? dirtyStyle.top : cleanStyle.top,
      ),
      left: new Animated.Value(
        this.state.dirty && props.icon
          ? props.labelDirtyLeft || dirtyStyle.left
          : cleanStyle.left,
      ),
    };
  }

  shouldComponentUpdate(nextProp, nextState) {
    // if (nextProp.helperText && this.props.helperText !== nextProp.helperText) {
    //   LayoutAnimation.configureNext({
    //     ...LayoutAnimation.Presets.easeInEaseOut,
    //     duration: 500,
    //   });
    // }

    // //For hadling the layout animation when removing the helper text
    // if (!nextProp.helperText && this.props.helperText) {
    //   LayoutAnimation.configureNext({
    //     ...LayoutAnimation.Presets.easeInEaseOut,
    //     duration: 500,
    //   });
    // }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      typeof this.props.value !== 'undefined' &&
      this.props.value !== prevProps.value
    ) {
      if (
        Boolean(
          this.textInput.current.isFocused() || Boolean(this.props.value),
        ) !== this.state.dirty
      ) {
        this._animate(Boolean(this.props.value));
        this.setState({dirty: Boolean(this.props.value)});
      }
    }
  }

  _animate = (dirty) => {
    const dirtyStyleConfig = dirtyStyle;
    if (this.props.labelDirtyLeft) {
      dirtyStyleConfig.left = this.props.labelDirtyLeft;
    }
    const nextStyle = dirty ? dirtyStyleConfig : cleanStyle;
    let labelStyle = this.state.labelStyle;
    let anims = Object.keys(nextStyle).map((prop) => {
      let initialLeft = -4;
      let toValue =
        prop === 'left' && !this.props.icon ? initialLeft : nextStyle[prop];
      return Animated.timing(
        labelStyle[prop],
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

  _onFocus = () => {
    this._animate(true);
    this.setState({dirty: true, isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  _textInputFocus = () => {
    this.textInput?.current?.focus();
    this.setState({isFocused: true});
  };

  _onBlur = () => {
    this.setState({isFocused: false});
    if (this.textInput.current.isFocused()) {
      this.textInput.current.blur();
    }

    if (!this.props.value) {
      this._animate(false);
      this.setState({dirty: false});
    }

    if (this.props.onBlur) {
      this.props.onBlur(this.props.value);
    }
    this.props.onBlurType?.(this.props.value, this.props.label);
  };

  onChangeText = (text) => {
    this.setState({isFocused: true});
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
    // if (this.props.helperText) {
    //   LayoutAnimation.configureNext({
    //     ...LayoutAnimation.Presets.easeInEaseOut,
    //     duration: 500,
    //   });
    // }
  };

  updateText = (event) => {
    const text = event.nativeEvent.text;
    if (this.props.onEndEditing) {
      this.props.onEndEditing(text);
    }
  };

  _renderLabel = () => {
    const style = StyleSheet.flatten([
      this.state.labelStyle,
      Styles.label,
      this.props.labelStyle,
      this.state.isFocused && {color: Color.DODGER_BLUE},
      this.props.error && {color: Color.PASTEL_RED},
    ]);

    return (
      <Animated.Text numberOfLines={1} style={style}>
        {this.props.label}
      </Animated.Text>
    );
  };

  // componentDidMount() {
  //   this.keyboardDidHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     this._keyboardDidHide,
  //   );
  // }

  // componentWillUnmount() {
  //   this.keyboardDidHideListener.remove();
  // }

  // _keyboardDidHide = () => {
  //   if (this.textInput.current.isFocused()) {
  //     this.textInput.current.blur();
  //     this.setState({isFocused: false});
  //   }
  // };

  _onTextInput = (event) => {
    this.props.onTextInput && this.props.onTextInput(event.nativeEvent);
  };

  blur = () => {
    this.textInput.current.blur();
  };

  focus = () => {
    this.textInput.current.focus();
  };

  isFocused = () => {
    this.textInput.current.isFocused();
  };

  render() {
    const props = {
        autoCapitalize: this.props.autoCapitalize,
        autoCompleteType: this.props.autoCompleteType,
        autoCorrect: this.props.autoCorrect,
        autoFocus: this.props.autoFocus,
        bufferDelay: this.props.bufferDelay,
        clearButtonMode: this.props.clearButtonMode,
        clearTextOnFocus: this.props.clearTextOnFocus,
        controlled: this.props.controlled,
        editable: this.props.editable,
        enablesReturnKeyAutomatically: this.props.enablesReturnKeyAutomatically,
        keyboardType: this.props.keyboardType,
        multiline: this.props.multiline,
        numberOfLines: this.props.numberOfLines,
        onBlur: this._onBlur,
        onChange: this.props.onChange,
        maxLength: this.props.maxLength,
        onChangeText: this.onChangeText,
        onEndEditing: this.updateText,
        onFocus: this._onFocus,
        onTextInput: this._onTextInput,
        ref: this.textInput,
        onSubmitEditing: this.props.onSubmitEditing,
        password: this.props.secureTextEntry || this.props.password, // Compatibility
        placeholder: this.props.placeholder,
        placeholderTextColor: Color.GREY_PURPLE,
        secureTextEntry: this.props.secureTextEntry || this.props.password, // Compatibility
        returnKeyType: this.props.returnKeyType,
        selectTextOnFocus: this.props.selectTextOnFocus,
        selectionState: this.props.selectionState,
        selectionColor: this.props.selectionColor,
        style: [Styles.input(this.props.editable), this.props.inputStyle],
        testID: this.props.testID,
        accessibilityLabel: this.props.accessibilityLabel,
        value: this.props.value,
        defaultValue: this.props.defaultValue,
        underlineColorAndroid: this.props.underlineColorAndroid, // android TextInput will show the default bottom border
        onKeyPress: this.props.onKeyPress,
        blurOnSubmit: this.props.blurOnSubmit,
        pointerEvents: this.props.pointerEvents,
        textAlignVertical: this.props.textAlignVertical,
      },
      elementStyles = [Styles.element, this.props.style];

    return (
      <View style={Styles.mainContainer(this.props.topMargin)}>
        <View
          style={[
            Styles.container(this.state.isFocused, this.props.error),
            this.props.containerStyle,
          ]}>
          {!!this.props.icon && (
            <View style={[Styles.iconContainer(true), this.props.iconStyle]}>
              {this.props.icon}
            </View>
          )}
          <View style={elementStyles}>
            {!!this.props.label && this._renderLabel()}
            <TextInput
              {...props}
              style={[
                props.style,
                {
                  color: Color.DARK,
                  marginLeft: isPlatformIos() ? 0 : -4,
                },
              ]}
            />
          </View>
          {!!this.props.rightIcon && (
            <View
              style={[Styles.iconContainer(false), this.props.rightIconStyle]}>
              {this.props.rightIcon}
            </View>
          )}
        </View>
        {typeof this.props.helperText === 'object' ? (
          this.props.helperText
        ) : (
          <View style={Styles.helperTextContainer(this.props.bottomMargin)}>
            <FText
              style={Styles.helperText(
                this.props.error,
                this.props.bottomMargin,
              )}>
              {this.props.helperText}
            </FText>
          </View>
        )}
      </View>
    );
  }
}

TextField.defaultProps = {
  editable: true,
};

export default TextField;
