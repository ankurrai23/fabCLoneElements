import React, {useEffect, useState} from 'react';

import FText, {FONT_TYPE} from '../../rn/FText';
import Button from '../button';
import TextField from '../textField';
import Styles from './Styles';
import Utils from '../../../utils/Utils';
import BottomSheet from './BottomSheet';
import {Strings} from '../../../utils/strings/index.travelPlus';

const ReasonModal = (props) => {
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setReason(props.value ?? '');
    setErrors({});
  }, [props.visible, props.value]);

  function onChangeText(val) {
    setReason(val);
  }

  function validateForm() {
    if (!props.reasonRequired) {
      return true;
    }
    const newErrors = {};
    if (!reason?.trim()) {
      newErrors.reason = props.error ?? Strings.reasonToProceed;
    }
    setErrors(newErrors);
    return Utils.isEmpty(newErrors);
  }

  function onSubmit() {
    if (validateForm()) {
      props.onSubmit && props.onSubmit(reason);
    }
  }

  return (
    <BottomSheet
      visible={props.visible}
      setVisible={props.setVisible}
      style={Styles.bottomSheet}>
      <FText type={FONT_TYPE.MEDIUM} style={Styles.heading}>
        {props.heading}
      </FText>
      <TextField
        label={props.textFieldLabel}
        value={reason}
        onChangeText={onChangeText}
        helperText={errors.reason}
        error={!!errors.reason}
        onBlur={validateForm}
      />
      <Button
        style={Styles.submitButton}
        textFont={FONT_TYPE.MEDIUM}
        onPress={onSubmit}>
        {props.buttonText}
      </Button>
    </BottomSheet>
  );
};

ReasonModal.defaultProps = {
  heading: 'heading',
  textFieldLabel: 'Comments',
  reasonRequired: true,
  buttonText: 'Submit',
};

export default ReasonModal;
