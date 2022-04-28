import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';

import DialogBox from '../../../common/components/dialogBox';

const AddReceiptModal = (props) => {
  return (
    props.visible && (
      <DialogBox
        modalVisible={props.visible}
        ContentModal={
          <View style={Styles.container}>
            <FText style={Styles.head}> Add a receipt</FText>
            <FTouchableOpacity
              style={Styles.line}
              onPress={() => props.onPress('CAMERA')}>
              <Feather name="camera" style={Styles.icon} />
              <FText style={Styles.option}>Open camera</FText>
            </FTouchableOpacity>
            <FTouchableOpacity
              style={Styles.line}
              onPress={() => props.onPress('GALLERY')}>
              <Feather name="image" style={Styles.icon} />
              <FText style={Styles.option}>Upload from gallery</FText>
            </FTouchableOpacity>
            <FTouchableOpacity
              style={Styles.line}
              onPress={() => props.onPress('FILE_MANAGER')}>
              <Feather name="upload" style={Styles.icon} />
              <FText style={Styles.option}>Import from files</FText>
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
