import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Icon from '../../../../assets/icons/Icon';
import {formattedPrice} from '../../../../utils/Utils';

const BaggageAddOn = React.memo(
  ({item, baggageDescription, price, isSelected, onPress}) => {
    return (
      <FTouchableOpacity onPress={() => onPress(item, isSelected)}>
        <View style={Styles.container}>
          <View style={Styles.infoContainer}>
            <FText numberOfLines={2} style={Styles.mealDesc}>
              {baggageDescription}
            </FText>
            <FText style={Styles.mealPrice}>{formattedPrice(price)}</FText>
          </View>
          <View>
            {isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
          </View>
        </View>
      </FTouchableOpacity>
    );
  },
);

export default BaggageAddOn;
