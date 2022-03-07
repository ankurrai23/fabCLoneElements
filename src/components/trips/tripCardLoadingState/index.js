import React from 'react';
import {View} from 'react-native';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import {Color} from '../../../utils/color';
import Separator from '../../../common/components/separator';

const TripCardLoadingState = () => {
  const animatedComponent = (cardColor, secondaryColor) => {
    return (
      <LinearGradient
        style={Styles.animatedComponent}
        colors={[cardColor, secondaryColor, cardColor]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />
    );
  };

  const TripCard = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}
        style={Styles.loadingCard}>
        <Placeholder style={Styles.loadingIcons} />
        <Placeholder style={Styles.loadingTitle} />
        <Placeholder style={Styles.loadingDate} />
        <Separator />
        <Placeholder style={Styles.loadingAction} />
      </PlaceholderContainer>
    );
  };

  return (
    <View style={Styles.cardContainer}>
      {[...Array(5).fill('')].map((item, index) => (
        <TripCard key={`${index}abc`} />
      ))}
    </View>
  );
};

export default TripCardLoadingState;
