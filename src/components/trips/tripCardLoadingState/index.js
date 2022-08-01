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
import {DP} from '../../../utils/Dimen';
import ListTypeFilter from '../listTypeFilter';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FText from '../../../common/rn/FText';
import {Strings} from '../../../utils/strings/index.travelPlus';

const TripCardLoadingState = ({
  data,
  selected,
  onChange,
  showSortAndFilter,
}) => {
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

  const ButtonWithIcon = ({iconName, text, style}) => (
    <View style={Styles.button}>
      <MaterialIcons name={iconName} color={Color.DODGER_BLUE} size={DP._18} />
      <FText style={[Styles.buttonTextStyle, style]}>{text}</FText>
    </View>
  );

  return (
    <>
      <View style={[Styles.header]}>
        <ListTypeFilter data={data} selected={selected} onChange={onChange} />
        {showSortAndFilter && (
          <View style={Styles.buttonWithIconContainer}>
            <ButtonWithIcon
              iconName={'sort'}
              text={Strings.sort}
              style={{marginRight: DP._24}}
            />
            <ButtonWithIcon iconName={'tune'} text={Strings.filter} />
          </View>
        )}
      </View>
      <View
        style={[
          Styles.cardContainer,
          {marginTop: showSortAndFilter ? 0 : DP._54},
        ]}>
        {[...Array(5).fill('')].map((_, index) => (
          <TripCard key={`${index}abc`} />
        ))}
      </View>
    </>
  );
};

export default TripCardLoadingState;
