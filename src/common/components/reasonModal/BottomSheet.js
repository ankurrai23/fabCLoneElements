import React, {useEffect, useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';

import Modal from './Modal';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import Styles from './Styles';
import Utils from '../../../utils/Utils';
import {Color} from '../../../utils/color';
import Icon from '../../../assets/icons/Icon';

const BottomSheet = ({style, ...props}) => {
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  function closeModal() {
    setVisible(false);
    props.setVisible(false);
  }

  return (
    <Modal visible={visible} setVisible={closeModal} style={Styles.modal}>
      <KeyboardAvoidingView
        enabled={Utils.isPlatformIos()}
        behavior={'padding'}>
        <View style={[Styles.containerSheet, style]}>
          {props.children}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BottomSheet;
