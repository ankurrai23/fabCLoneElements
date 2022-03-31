import React from 'react';
import {View} from 'react-native';

import {Button, FText} from '../../..';
import Styles from './Styles';

export default function RequestType({onChange, requestType}) {
  return (
    <View style={Styles.container}>
      <FText type="medium" style={Styles.title}>
        Request type
      </FText>
      <View style={Styles.innerContainer}>
        <Button
          type="SECONDARY"
          textFont="regular"
          style={Styles.buttonStyle}
          onPress={() => onChange('FLIGHT_AND_HOTEL')}
          selected={requestType === 'FLIGHT_AND_HOTEL'}
          textStyle={Styles.textText}>
          Flight + Hotel
        </Button>
        <Button
          type="SECONDARY"
          textFont="regular"
          style={[Styles.buttonStyle, Styles.middleButton]}
          onPress={() => onChange('FLIGHT')}
          selected={requestType === 'FLIGHT'}
          textStyle={Styles.textText}>
          Flight only
        </Button>
        <Button
          type="SECONDARY"
          textFont="regular"
          style={Styles.buttonStyle}
          onPress={() => onChange('HOTEL')}
          selected={requestType === 'HOTEL'}
          textStyle={Styles.textText}>
          Hotel only
        </Button>
      </View>
    </View>
  );
}
