import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import FText, {FONT_TYPE} from '../../rn/FText';
import Button, {BUTTON_TYPE} from '../button';
import {Strings} from '../../../utils/strings/index.travelPlus';

const EmptyScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>{props.image}</View>
      <FText style={styles.heading}>
        {props.heading || Strings.nothingInItineraryMsg}
      </FText>
      {!!props.subHeading && (
        <FText style={styles.subHeading}>{props.subHeading}</FText>
      )}
      {!!props.btnText && (
        <Button
          style={{
            paddingVertical: DP._10,
            paddingHorizontal: DP._27,
            marginTop: DP._16,
          }}
          textFont={FONT_TYPE.MEDIUM}
          type={props.btnType ?? BUTTON_TYPE.PRIMARY}
          onPress={props.onPress}>
          {props.btnText}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: DP._16,
  },
  image: {
    marginBottom: DP._18,
  },
  heading: {
    fontSize: DP._20,
    color: Color.BLACK,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: DP._14,
    lineHeight: DP._21,
    marginTop: DP._4,
    textAlign: 'center',
    color: Color.GREY_PURPLE,
    paddingHorizontal: DP._44,
  },
});

export default EmptyScreen;
