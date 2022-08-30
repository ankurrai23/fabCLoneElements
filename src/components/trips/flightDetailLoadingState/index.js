import {View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Placeholder,
  PlaceholderContainer,
} from 'react-native-loading-placeholder';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';
import Icon from '../../../assets/icons/Icon';

export default function FlightDetailLoadingState() {
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

  const FlightCard = () => {
    return (
      <View style={Styles.flightCard}>
        <PlaceholderContainer
          animatedComponent={animatedComponent(
            Color.VERY_LIGHT_PINK,
            Color.WHITE,
          )}
          duration={1500}
          delay={500}
          style={Styles.loadingCard}>
          <Placeholder style={Styles.commonPlaceholder(DP._50, DP._17)} />
          <View style={Styles.flexRow}>
            <View style={Styles.subContainerStyle()}>
              <Placeholder style={Styles.commonPlaceholder(DP._57, DP._17)} />
              <Placeholder
                style={Styles.commonPlaceholder2(DP._40, DP._19, DP._4)}
              />
            </View>
            <View style={Styles.subContainerStyle('center')}>
              <Icon.Aeroplane
                width={DP._18}
                height={DP._18}
                fill={Color.LIGHT_BLUEY_GREY}
                style={Styles.airplane}
              />
              <Placeholder
                style={Styles.commonPlaceholder2(DP._40, DP._12, DP._4)}
              />
            </View>
            <View style={Styles.subContainerStyle('flex-end')}>
              <Placeholder style={Styles.commonPlaceholder(DP._60, DP._17)} />
              <Placeholder
                style={Styles.commonPlaceholder2(DP._40, DP._19, DP._4)}
              />
            </View>
          </View>
          <View style={Styles.flexRowSpaceBetween}>
            <View style={Styles.subContainerStyle()}>
              <Placeholder style={Styles.commonPlaceholder(DP._50, DP._17)} />
              <Placeholder
                style={Styles.commonPlaceholder2(DP._63, DP._19, DP._4)}
              />
            </View>
            <View style={Styles.subContainerStyle('flex-end')}>
              <Placeholder style={Styles.commonPlaceholder(DP._50, DP._17)} />
              <Placeholder
                style={Styles.commonPlaceholder2(DP._63, DP._19, DP._4)}
              />
            </View>
          </View>
        </PlaceholderContainer>
      </View>
    );
  };

  const Header = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}>
        <Placeholder style={Styles.commonPlaceholder(DP._100, DP._17)} />
      </PlaceholderContainer>
    );
  };

  return (
    <View style={Styles.cardContainer}>
      <Header />
      <FlightCard />
      <Header />
      <FlightCard />
    </View>
  );
}
