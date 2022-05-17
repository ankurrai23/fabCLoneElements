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
import FText from '../../../common/rn/FText';

const HotelPreferenceLoadingState = ({offline = false, onBackClick}) => {
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
        {!offline && (
          <View style={Styles.flexRow}>
            <Placeholder style={Styles.imagePlaceholder1} />
            <Placeholder style={Styles.imagePlaceholder2} />
          </View>
        )}
        <View style={Styles.mainContainer}>
          <Placeholder style={Styles.commonPlaceholder2('25%', DP._18)} />
          <Placeholder style={Styles.commonPlaceholder('50%', DP._18, DP._6)} />
          {!offline && (
            <>
              <Placeholder
                style={Styles.commonPlaceholder('64%', DP._14, DP._4)}
              />
              <Placeholder
                style={Styles.commonPlaceholder('58%', DP._14, DP._12)}
              />
              <Placeholder
                style={Styles.commonPlaceholder('50%', DP._14, DP._6)}
              />
            </>
          )}
          <View style={[Styles.amountPlacholder, {marginTop: DP._5}]}>
            <View>
              {offline && (
                <>
                  <Placeholder
                    style={[
                      Styles.commonPlaceholder2('150%', DP._10),
                      {marginBottom: DP._4},
                    ]}
                  />
                  <Placeholder
                    style={[
                      Styles.commonPlaceholder2('150%', DP._10),
                      {marginBottom: DP._4},
                    ]}
                  />
                </>
              )}
              <Placeholder
                style={Styles.commonPlaceholder2(
                  offline ? '50%' : '90%',
                  DP._10,
                )}
              />
            </View>
            <View style={Styles.alignEnd}>
              <Placeholder style={Styles.commonPlaceholder2(DP._80, DP._21)} />
              <Placeholder
                style={Styles.commonPlaceholder(DP._100, DP._10, DP._4)}
              />
            </View>
          </View>
        </View>
        <View style={{padding: DP._16}}>
          <Separator />
          <FText type={'medium'} style={Styles.button}>
            Tap to set preference
          </FText>
        </View>
      </PlaceholderContainer>
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
        <View style={Styles.flexRow}>
          <FTouchableOpacity onPress={onBackClick}>
            <Feather name="chevron-left" size={DP._24} color={Color.BLACK} />
          </FTouchableOpacity>
          <Placeholder style={Styles.headerTitleLoader} />
        </View>
        <Placeholder style={Styles.headerSubTextLoader} />
        <Placeholder style={Styles.headerSubTextLoader2} />
      </PlaceholderContainer>
    );
  };

  return (
    <View style={Styles.cardContainer}>
      <Header />
      <LoadingPreferenceCard />
      <LoadingPreferenceCard />
      <LoadingPreferenceCard />
      <LoadingPreferenceCard />
      <LoadingPreferenceCard />
      <LoadingPreferenceCard />
    </View>
  );
};

export default HotelPreferenceLoadingState;
