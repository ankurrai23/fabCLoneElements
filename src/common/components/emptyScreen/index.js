import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';
import {FText, FImage, Button} from '../../..';

const EmptyScreen = ({
  heading,
  image,
  subHeading,
  btnText,
  onPress,
  headingTextStyle,
  subHeadingTextStyle,
  imageWidth,
  imageHeight,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <FImage style={styles.image(imageWidth, imageHeight)} source={image} />
        <FText style={[styles.heading, headingTextStyle]}>{heading}</FText>
        {!!subHeading && (
          <FText style={[styles.subHeading, subHeadingTextStyle]}>
            {subHeading}
          </FText>
        )}
      </View>
      {btnText && <Button onPress={onPress}>{btnText}</Button>}
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  image: (width, height) => ({
    height: height || DP._180,
    width: width || DP._180,
    resizeMode: 'contain',
    marginBottom: DP._24,
  }),
  heading: {
    fontSize: DP._18,
    color: Color.DARK,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: DP._14,
    lineHeight: DP._21,
    marginVertical: DP._8,
    textAlign: 'center',
    color: Color.GREY_PURPLE,
    marginHorizontal: DP._35,
  },
});
