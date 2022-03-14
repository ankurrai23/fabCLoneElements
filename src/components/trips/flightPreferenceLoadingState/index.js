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
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../utils/Dimen';
import FText from '../../../common/rn/FText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FlightPreferenceLoadingState = ({includeReturnFlight = false}) => {
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
          <Placeholder
            style={{
              height: DP._16,
              width: DP._48,
              backgroundColor: Color.VERY_LIGHT_PINK,
              marginLeft: DP._8,
            }}
          />
        </View>
        <View style={[Styles.flexRowAlignCenter, {marginTop: DP._18}]}>
          <Placeholder style={Styles.commonPlaceholder2(DP._52, DP._21)} />
          <View style={Styles.dot} />
          <View style={Styles.line} />
          <MaterialCommunityIcons
            name="airplane"
            size={DP._20}
            color={Color.LIGHT_BLUEY_GREY}
            style={Styles.airplane}
          />
          <View style={Styles.line} />
          <View style={Styles.whiteDot} />
          <Placeholder style={Styles.commonPlaceholder2(DP._52, DP._21)} />
        </View>
        <View style={[Styles.flexRowSpaceBetween, {marginTop: DP._8}]}>
          <Placeholder style={Styles.commonPlaceholder2('10%', DP._14)} />
          <Placeholder style={Styles.commonPlaceholder2('35%', DP._14)} />
          <Placeholder style={Styles.commonPlaceholder2('10%', DP._14)} />
        </View>
        <View>
          <FText type={'medium'} style={Styles.button}>
            Tap to set preference
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
      <Placeholder
        style={{
          height: DP._21,
          width: DP._52,
          backgroundColor: Color.VERY_LIGHT_PINK,
          marginTop: DP._18,
        }}
      />
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
        <View style={Styles.flexRow}>
          <FTouchableOpacity>
            <Feather name="arrow-left" size={DP._24} color={Color.BLACK} />
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
          <FText type="medium">DEPART</FText>
          <Placeholder
            style={[
              Styles.commonPlaceholder('40%', DP._16),
              {marginLeft: DP._8},
            ]}
          />
        </View>
        <FText type="medium">RETURN</FText>
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
