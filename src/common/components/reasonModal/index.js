import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import FText, {FONT_TYPE} from '../../rn/FText';
import Button from '../button';
import TextField from '../textField';
import Styles from './Styles';
import Utils from '../../../utils/Utils';
import {Strings} from '../../../utils/strings/index.travelPlus';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import Icon from '../../../assets/icons/Icon';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

const ReasonModal = ({
  value,
  reasonRequired,
  error,
  heading,
  textFieldLabel,
  buttonText,
  onSubmit,
  onFocus,
  onBlur,
}) => {
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setReason(value ?? '');
    setErrors({});
  }, [value]);

  function onChangeText(val) {
    setReason(val);
  }

  function validateForm() {
    if (!reasonRequired) {
      return true;
    }
    const newErrors = {};
    if (!reason?.trim()) {
      newErrors.reason = error ?? Strings.reasonToProceed;
    }
    setErrors(newErrors);
    return Utils.isEmpty(newErrors);
  }

  function onPress() {
    if (validateForm()) {
      onSubmit && onSubmit(reason);
    }
  }

  function onPressClose() {
    setReason('');
  }

  return (
    <View style={Styles.containerSheet}>
      <FText type={FONT_TYPE.MEDIUM} style={Styles.heading}>
        {heading}
      </FText>
      <TextField
        label={textFieldLabel}
        onFocus={onFocus}
        autoFocus
        value={reason}
        onChangeText={onChangeText}
        helperText={errors.reason}
        error={!!errors.reason}
        onBlur={() => {
          onBlur?.();
          validateForm();
        }}
        rightIcon={
          !!reason && (
            <FTouchableOpacity
              onPress={onPressClose}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Icon.Cross
                width={DP._16}
                height={DP._16}
                stroke={Color.BLUEY_GREY}
              />
            </FTouchableOpacity>
          )
        }
      />
      <Button
        style={Styles.submitButton}
        textFont={FONT_TYPE.MEDIUM}
        onPress={onPress}>
        {buttonText}
      </Button>
    </View>
  );
};

ReasonModal.defaultProps = {
  heading: 'heading',
  textFieldLabel: 'Comments',
  reasonRequired: true,
  buttonText: 'Submit',
};

export default ReasonModal;
