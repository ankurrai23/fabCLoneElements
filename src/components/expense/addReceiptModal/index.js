import React from 'react';
import {View} from 'react-native';

import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';

import {PICKER_TYPE} from '../../../utils/Constants';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const AddReceiptModal = (props) => {
  return (
    <View style={Styles.container}>
      <FText style={Styles.head}>{Strings.addAReceipt}</FText>
      <FTouchableOpacity
        style={Styles.line}
        onPress={() => props.onPress(PICKER_TYPE.CAMERA)}>
        <Icon.Camera style={Styles.icon} />
        <FText style={Styles.option}>{Strings.openCamera}</FText>
      </FTouchableOpacity>
      <FTouchableOpacity
        style={Styles.line}
        onPress={() => props.onPress(PICKER_TYPE.GALLERY)}>
        <Icon.Image style={Styles.icon} />
        <FText style={Styles.option}>{Strings.uploadFromGallery}</FText>
      </FTouchableOpacity>
      <FTouchableOpacity
        style={Styles.line}
        onPress={() => props.onPress(PICKER_TYPE.FILE_MANAGER)}>
        <Icon.Upload style={Styles.icon} />
        <FText style={Styles.option}>{Strings.importFromFiles}</FText>
      </FTouchableOpacity>
    </View>
  );
};

export default AddReceiptModal;
