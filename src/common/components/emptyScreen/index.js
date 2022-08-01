import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import FText from '../../rn/FText';
import FImage from '../../rn/FImage';
import Button from '../button';
import {Strings} from '../../../utils/strings/index.travelPlus';

const EmptyScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <FImage style={styles.image} source={props.image} />
        <FText style={styles.heading}>
          {props.heading || Strings.nothingInItineraryMsg}
        </FText>
        {!!props.subHeading && (
          <FText style={styles.subHeading}>{props.subHeading}</FText>
        )}
      </View>
      {!!props.btnText && (
        <Button onPress={props.onPress}>{props.btnText}</Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: DP._16,
    paddingBottom: DP._24,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
