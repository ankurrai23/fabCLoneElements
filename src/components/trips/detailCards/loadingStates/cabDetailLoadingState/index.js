import {View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Placeholder,
  PlaceholderContainer,
} from 'react-native-loading-placeholder';
import {DP} from '../../../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';

export default function CabDetailLoadingState() {
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

  const CabCard = () => {
    return (
      <View style={Styles.card}>
        <PlaceholderContainer
          animatedComponent={animatedComponent(
            Color.VERY_LIGHT_PINK,
            Color.WHITE,
          )}
          duration={1500}
          delay={500}
          style={Styles.loadingCard}>
          <View
            style={[Styles.flexRowSpaceBetween, Styles.marginBottom(DP._12)]}>
            <Placeholder style={Styles.commonPlaceholder(DP._72, DP._16)} />
            <Placeholder
              style={[
                Styles.commonPlaceholder(DP._72, DP._20),
                Styles.borderRadius_12,
              ]}
            />
          </View>
          <Placeholder
            style={[
              Styles.commonPlaceholder('100%', DP._54),
              Styles.marginBottom(DP._12),
            ]}
          />
          <Placeholder
            style={[
              Styles.commonPlaceholder('100%', DP._1),
              Styles.marginBottom(DP._12),
            ]}
          />
          <Placeholder
            style={[
              Styles.commonPlaceholder('40%', DP._16),
              Styles.marginBottom(DP._12),
            ]}
          />
          <Placeholder
            style={[
              Styles.commonPlaceholder('60%', DP._16),
              Styles.marginBottom(DP._20),
            ]}
          />
          <Placeholder
            style={[
              Styles.commonPlaceholder('48%', DP._18),
              Styles.marginBottom(DP._16),
            ]}
          />
          <Placeholder
            style={[
              Styles.commonPlaceholder('35%', DP._16),
              Styles.marginBottom(DP._12),
            ]}
          />
          <Placeholder style={[Styles.commonPlaceholder('100%', DP._45)]} />
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
        <Placeholder
          style={[
            Styles.commonPlaceholder(DP._100, DP._17),
            Styles.marginBottom(DP._16),
          ]}
        />
      </PlaceholderContainer>
    );
  };

  return (
    <View style={Styles.cardContainer}>
      <Header />
      <CabCard />
      <Header />
      <CabCard />
    </View>
  );
}
