import React from 'react';

import Styles from './Styles';

import {Color} from '../../../utils/color/index.travelPlus';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlaceholderContainer from 'react-native-loading-placeholder/src/PlaceholderContainer';
import Placeholder from 'react-native-loading-placeholder/src/Placeholder';

const LoadingPlaceholder = ({width, height, radius}) => {
  const animatedComponent = (cardColor, secondaryColor) => {
    return (
      <LinearGradient
        style={Styles.animatedComponent(0)}
        colors={[cardColor, secondaryColor, cardColor]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />
    );
  };

  return (
    <View>
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}>
        <Placeholder style={Styles.loader(width, height, radius)} />
      </PlaceholderContainer>
    </View>
  );
};

export default LoadingPlaceholder;
