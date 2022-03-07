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
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../utils/Dimen';
import DashedLine from '../../../common/components/dashedLine';

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

  const ItineraryCard = ({hideLine}) => {
    return (
      <View style={Styles.itineraryCard}>
        <View style={{marginRight: DP._8}}>
          <View style={Styles.iconPlaceholder}>
            <View style={Styles.icons} />
          </View>
          {!hideLine && (
            <View style={Styles.dashedLineContainer}>
              <DashedLine
                dashWidth={DP._1}
                dashSize={DP._4}
                dashColor={Color.DODGER_BLUE}
              />
            </View>
          )}
        </View>
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
        delay={500}
        style={Styles.headerContainer}>
        <FTouchableOpacity>
          <Feather name="arrow-left" size={DP._24} color={Color.BLACK} />
        </FTouchableOpacity>
        <View style={{marginLeft: DP._26}}>
          <Placeholder style={Styles.headerTitleLoader} />
          <Placeholder style={Styles.headerSubTextLoader} />
        </View>
      </PlaceholderContainer>
    );
  };

  return (
    <>
      <View style={Styles.cardContainer}>
        <Header />
        <ItineraryCard />
        <ItineraryCard />
        <ItineraryCard hideLine />
      </View>
      <Separator style={{height: DP._8}} />
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}
        style={Styles.infoLoader}>
        <Placeholder style={Styles.infoLoaderText} />
        <Placeholder style={Styles.infoLoaderText2} />
      </PlaceholderContainer>
    </>
  );
};

export default TripCardLoadingState;
