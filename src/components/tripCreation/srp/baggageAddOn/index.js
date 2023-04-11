import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Icon from '../../../../assets/icons/Icon';
import {Color} from '../../../../utils/color/index.travelPlus';
import {formattedPrice} from '../../../../utils/Utils';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {MEAL_TYPE} from '../../../../utils/Constants';

const BaggageAddOn = ({baggageDescription, price, isSelected, onPress}) => {
  return (
    <FTouchableOpacity onPress={onPress}>
      <View style={Styles.container}>
        <View style={Styles.infoContainer}>
          <FText numberOfLines={2} style={Styles.mealDesc}>
            {baggageDescription}
          </FText>
          <FText style={Styles.mealPrice}>{formattedPrice(price)}</FText>
        </View>
        <View>{isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}</View>
      </View>
    </FTouchableOpacity>
  );
};

export default BaggageAddOn;
