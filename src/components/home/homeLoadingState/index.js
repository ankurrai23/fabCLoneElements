import React from 'react';
import {View} from 'react-native';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import {Color} from '../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import {Strings} from '../../../utils/strings/index.travelPlus';

const HomeLoadingState = () => {
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

  const CardPlaceholder = ({cardColor, secondaryColor}) => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(cardColor, secondaryColor)}
        duration={1000}
        delay={100}>
        <Placeholder style={Styles.loadingCardStyle(cardColor)} />
      </PlaceholderContainer>
    );
  };

  const InboxPlaceholder = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK_2,
          Color.WHITE,
        )}
        duration={1000}
        delay={100}
        style={Styles.inboxPlaceholderContainer}>
        <Placeholder style={Styles.inboxTextPlaceholder('35%')} />
        <Placeholder style={Styles.inboxTextPlaceholder('97%')} />
        <Placeholder style={Styles.inboxTextPlaceholder('95%')} />
        <Placeholder style={Styles.datePlaceholder} />
      </PlaceholderContainer>
    );
  };

  return (
    <>
      <View
        style={[Styles.claimsCardContainerLoader, Styles.marginHorizontal_24]}>
        <CardPlaceholder
          cardColor={Color.VERY_LIGHT_PINK_2}
          secondaryColor={Color.WHITE}
        />
        <CardPlaceholder
          cardColor={Color.VERY_LIGHT_PINK_2}
          secondaryColor={Color.WHITE}
        />
      </View>
      <View style={Styles.headerView}>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.sectionTitleLoader}>
          {Strings.updates}
        </FText>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.seeMore}>
          {Strings.seeMore}
        </FText>
      </View>
      <InboxPlaceholder />
    </>
  );
};

export default HomeLoadingState;
