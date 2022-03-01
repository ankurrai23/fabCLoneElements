import React from 'react';
import {Modal, View} from 'react-native';
import PropTypes from 'prop-types';
import {BlurView} from '@react-native-community/blur';

import FTouchableOpacity from '../../rn/FTouchableOpacity';
import {Color} from '../../../utils/color';
import Styles from './Styles';

const CustomModal = ({style, blurType, disableBackdrop, ...props}) => {
  function onRequestClose() {
    if (disableBackdrop) {
      return;
    }
    props.setVisible(false);
  }

  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={onRequestClose}
      {...props}>
      <View style={[Styles.container, style]}>
        <FTouchableOpacity
          activeOpacity={1}
          style={Styles.backdrop}
          onPress={onRequestClose}>
          <BlurView
            style={Styles.backdrop}
            blurType={blurType || 'dark'}
            blurAmount={1} // ranges from 0-100
            onPress={onRequestClose}
            reducedTransparencyFallbackColor={Color.WHITE}
          />
        </FTouchableOpacity>
        {props.children}
      </View>
    </Modal>
  );
};

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  animationType: PropTypes.string,
  transparent: PropTypes.bool,
  style: PropTypes.object,
  setVisible: PropTypes.func,
  children: PropTypes.object,
};

CustomModal.defaultProps = {
  animationType: 'fade',
  transparent: true,
};

export default CustomModal;
