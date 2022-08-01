import React from 'react';
import {View} from 'react-native';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Styles from './Styles';

export default function ApprovalManager(props) {
  return (
    <View style={Styles.container}>
      <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
        {Strings.approvalManager}
      </FText>
      <View style={Styles.innerContainer}>
        <View style={Styles.initialsContainer}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.initials}>
            {props.initials}
          </FText>
        </View>
        <View>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.managerName}>
            {props.managerName}
          </FText>
          <FText style={Styles.designation}>{props.managerDesignation}</FText>
        </View>
      </View>
    </View>
  );
}
