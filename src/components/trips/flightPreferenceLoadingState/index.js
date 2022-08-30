import React from 'react';
import {View} from 'react-native';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import {Color} from '../../../utils/color';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import {DP} from '../../../utils/Dimen';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const FlightPreferenceLoadingState = ({includeReturnFlight, onBackClick}) => {
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

  const LoadingPreferenceCard = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}
        style={Styles.loadingCard}>
        <View style={[Styles.flexRowAlignCenter, Styles.flexRowSpaceBetween]}>
          <View style={Styles.flexRowAlignCenter}>
            <Placeholder style={Styles.flightIcon} />
            <Placeholder style={Styles.flightName} />
            <FText>|</FText>
            <Placeholder style={Styles.flightNumber} />
          </View>
          <Placeholder style={Styles.placeholder2} />
        </View>
        <View style={Styles.aiportCodeWithIconContainer}>
          <Placeholder style={Styles.commonPlaceholder2(DP._52, DP._21)} />
          <Icon.Aeroplane
            width={DP._18}
            height={DP._18}
            fill={Color.LIGHT_BLUEY_GREY}
            style={Styles.airplane}
          />
          <Placeholder style={Styles.commonPlaceholder2(DP._52, DP._21)} />
        </View>
        <View style={[Styles.flexRowSpaceBetween, {marginTop: DP._8}]}>
          <Placeholder style={Styles.commonPlaceholder2('10%', DP._14)} />
          <Placeholder style={Styles.commonPlaceholder2('35%', DP._14)} />
          <Placeholder style={Styles.commonPlaceholder2('10%', DP._14)} />
        </View>
        <View>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.button}>
            {Strings.tapToSetPreference(false)}
          </FText>
        </View>
      </PlaceholderContainer>
    );
  };

  const LoadingPreferenceCard2 = () => (
    <PlaceholderContainer
      animatedComponent={animatedComponent(Color.VERY_LIGHT_PINK, Color.WHITE)}
      duration={1500}
      delay={500}
      style={Styles.loadingCard2}>
      <Placeholder style={Styles.flightIcon} />
      <Placeholder style={Styles.placeholder1} />
      <Placeholder style={Styles.time2} />
    </PlaceholderContainer>
  );

  const Header = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}
        style={Styles.headerContainer}>
        <View style={[Styles.flexRow, Styles.headerStyle]}>
          <FTouchableOpacity onPress={onBackClick}>
            <Icon.ChevronLeft stroke={Color.WHITE} />
          </FTouchableOpacity>
          <Placeholder style={Styles.headerTitleLoader} />
        </View>
        <Placeholder style={Styles.headerSubTextLoader} />
        <Placeholder style={Styles.headerSubTextLoader2} />
      </PlaceholderContainer>
    );
  };

  const Bar = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}
        style={Styles.barContainer}>
        <View style={Styles.flexRowAlignCenter}>
          <FText style={Styles.depart} type={FONT_TYPE.MEDIUM}>
            {Strings.depart}
          </FText>
          <Placeholder
            style={[
              Styles.commonPlaceholder('40%', DP._16),
              {marginLeft: DP._8},
            ]}
          />
        </View>
        <FText style={Styles.depart} type={FONT_TYPE.MEDIUM}>
          {Strings.return}
        </FText>
      </PlaceholderContainer>
    );
  };

  return (
    <View style={Styles.cardContainer}>
      <Header />
      {includeReturnFlight && <Bar />}
      <View style={Styles.flexRow}>
        <View style={Styles.flex(includeReturnFlight ? 0.8 : 1)}>
          <LoadingPreferenceCard />
          <LoadingPreferenceCard />
          <LoadingPreferenceCard />
          <LoadingPreferenceCard />
          <LoadingPreferenceCard />
        </View>
        {includeReturnFlight && (
          <View style={Styles.flex(0.2)}>
            <LoadingPreferenceCard2 />
            <LoadingPreferenceCard2 />
            <LoadingPreferenceCard2 />
            <LoadingPreferenceCard2 />
            <LoadingPreferenceCard2 />
            <LoadingPreferenceCard2 />
          </View>
        )}
      </View>
    </View>
  );
};

export default FlightPreferenceLoadingState;
