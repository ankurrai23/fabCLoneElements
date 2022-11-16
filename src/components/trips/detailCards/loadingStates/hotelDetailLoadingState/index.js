import React from 'react';
import {View} from 'react-native';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import {Color} from '../../../utils/color';
import Separator from '../../../../../common/components/separator';
import {DP} from '../../../../../utils/Dimen';
import FText from '../../../../../common/rn/FText';
import {Strings} from '../../../../../utils/strings/index.travelPlus';

const HotelDetailLoadingState = () => {
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
  const InclusionComponent = () => (
    <View style={Styles.flexRow}>
      <Placeholder style={Styles.commonPlaceholder2(DP._16, DP._16, DP._16)} />
      <Placeholder
        style={[
          Styles.commonPlaceholder2('30%', DP._16, DP._16),
          {marginLeft: DP._8},
        ]}
      />
    </View>
  );

  const CoTravellerComponent = ({width}) => (
    <View style={Styles.flexRow}>
      <Placeholder style={Styles.commonPlaceholder2(DP._16, DP._16, DP._16)} />
      <Placeholder
        style={[
          Styles.commonPlaceholder2(width, DP._16, DP._16),
          {marginLeft: DP._8},
        ]}
      />
    </View>
  );

  const CheckInComponent = () => (
    <View>
      <Placeholder style={Styles.commonPlaceholder(DP._80, DP._14)} />
      <Placeholder style={Styles.commonPlaceholder2(DP._74, DP._14, DP._8)} />
      <Placeholder
        style={{
          width: DP._80,
          height: DP._14,
          backgroundColor: Color.PALE_GREY_TWO,
          marginTop: DP._8,
          borderRadius: DP._10,
        }}
      />
    </View>
  );
  const HotelCard = () => {
    return (
      <View style={Styles.hotelCard}>
        <PlaceholderContainer
          animatedComponent={animatedComponent(
            Color.VERY_LIGHT_PINK,
            Color.WHITE,
          )}
          duration={1500}
          delay={500}
          style={Styles.loadingCard}>
          <View style={Styles.flexRow}>
            <Placeholder
              style={[
                Styles.commonPlaceholder(DP._88, DP._80),
                {borderRadius: DP._8},
              ]}
            />
            <View style={Styles.subContainer}>
              <Placeholder style={Styles.commonPlaceholder(DP._130, DP._14)} />
              <Placeholder
                style={Styles.commonPlaceholder2('80%', DP._14, DP._16)}
              />
              <Placeholder
                style={Styles.commonPlaceholder2(DP._184, DP._14, DP._8)}
              />
            </View>
          </View>
          <Placeholder
            style={Styles.commonPlaceholder2('80%', DP._14, DP._10)}
          />
          <Placeholder
            style={Styles.commonPlaceholder2('75%', DP._14, DP._4)}
          />
          <Separator style={{marginVertical: DP._16}} />
          <View style={Styles.flexRowSpaceBetween}>
            <View style={Styles.flexRow}>
              <Placeholder style={Styles.commonPlaceholder(DP._14, DP._14)} />
              <Placeholder
                style={[
                  Styles.commonPlaceholder('50%', DP._14),
                  {marginLeft: DP._4},
                ]}
              />
            </View>
            <View style={Styles.flexRow}>
              <Placeholder style={Styles.commonPlaceholder(DP._14, DP._14)} />
              <Placeholder
                style={[
                  Styles.commonPlaceholder(DP._80, DP._14),
                  {marginLeft: DP._8},
                ]}
              />
            </View>
          </View>
          <Separator style={{marginVertical: DP._16}} />
          <View style={Styles.flexRowSpaceBetween}>
            <CheckInComponent />
            <CheckInComponent />
            <View>
              <Placeholder style={Styles.commonPlaceholder(DP._80, DP._14)} />
              <Placeholder
                style={Styles.commonPlaceholder2(DP._20, DP._14, DP._8)}
              />
            </View>
          </View>
          <Separator style={{marginVertical: DP._16}} />
          <FText style={Styles.sectionTitle}>{Strings.inclusions}</FText>
          <InclusionComponent />
          <InclusionComponent />
          <Separator style={{marginVertical: DP._16}} />
          <FText style={Styles.sectionTitle}>{Strings.coTravelers}</FText>
          <CoTravellerComponent width={'35%'} />
          <CoTravellerComponent width={'45%'} />
          <Separator style={{marginVertical: DP._16}} />
          <FText style={Styles.sectionTitle}>{Strings.paymentMode}</FText>
          <View style={Styles.flexRow}>
            <View style={Styles.payment}>
              <Placeholder
                style={Styles.commonPlaceholder2(DP._16, DP._16, DP._16)}
              />
              <Placeholder
                style={[
                  Styles.commonPlaceholder2('60%', DP._16, DP._16),
                  {marginLeft: DP._8},
                ]}
              />
            </View>
            <View style={Styles.payment}>
              <Placeholder
                style={Styles.commonPlaceholder2(DP._16, DP._16, DP._16)}
              />
              <Placeholder
                style={[
                  Styles.commonPlaceholder2('60%', DP._16, DP._16),
                  {marginLeft: DP._8},
                ]}
              />
            </View>
          </View>
        </PlaceholderContainer>
      </View>
    );
  };

  return (
    <View style={Styles.cardContainer}>
      <HotelCard />
    </View>
  );
};

export default HotelDetailLoadingState;
