import React, {useEffect, useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Modal from './Modal';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';
import Utils from '../../../utils/Utils';
import {Color} from '../../../utils/color';

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
          {props.crossBtn === false ? null : props.crossBtn ? (
            props.crossBtn
          ) : (
            <FTouchableOpacity
              activeOpacity={1}
              onPress={closeModal}
              style={Styles.crossIcon}>
              <Icon
                name="close-outline"
                size={DP._30}
                color={Color.GREY_PURPLE}
              />
            </FTouchableOpacity>
          )}
          {props.children}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BottomSheet;
