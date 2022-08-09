import React from 'react';
import {View} from 'react-native';
import {FText} from '../../..';
import Styles from './Styles';

export default function ApprovalManager(props) {
  return (
    <View style={[Styles.container, props.style]}>
      <FText type="medium" style={Styles.title}>
        Approval manager
      </FText>
      <View style={Styles.innerContainer}>
        <View style={Styles.initialsContainer}>
          <FText type="medium" style={Styles.initials}>
            {props.initials}
          </FText>
        </View>
        <View>
          <FText type="medium" style={Styles.managerName}>
            {props.managerName}
          </FText>
          <FText style={Styles.designation}>{props.managerDesignation}</FText>
        </View>
      </View>
    </View>
  );
}
