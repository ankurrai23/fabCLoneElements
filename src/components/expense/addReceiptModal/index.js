import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';

import DialogBox from '../../../common/components/dialogBox';
import {PICKER_TYPE} from '../../../utils/Constants';
import {Strings} from '../../../utils/strings/index.travelPlus';

const AddReceiptModal = (props) => {
  return (
    props.visible && (
      <DialogBox
        modalVisible={props.visible}
        ContentModal={
          <View style={Styles.container}>
            <FText style={Styles.head}>{Strings.addAReceipt}</FText>
            <FTouchableOpacity
              style={Styles.line}
              onPress={() => props.onPress(PICKER_TYPE.CAMERA)}>
              <Feather name="camera" style={Styles.icon} />
              <FText style={Styles.option}>{Strings.openCamera}</FText>
            </FTouchableOpacity>
            <FTouchableOpacity
              style={Styles.line}
              onPress={() => props.onPress(PICKER_TYPE.GALLERY)}>
              <Feather name="image" style={Styles.icon} />
              <FText style={Styles.option}>{Strings.uploadFromGallery}</FText>
            </FTouchableOpacity>
            <FTouchableOpacity
              style={Styles.line}
              onPress={() => props.onPress(PICKER_TYPE.FILE_MANAGER)}>
              <Feather name="upload" style={Styles.icon} />
              <FText style={Styles.option}>{Strings.importFromFiles}</FText>
            </FTouchableOpacity>
          </View>
        }
        onClose={() => {
          props.setVisible(false);
        }}
      />
    )
  );
};

export default AddReceiptModal;
