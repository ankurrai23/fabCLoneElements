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

const SelectMeal = ({data, isLcc, onPress, isSelected}) => {
  const isMealFree = data.mealType === MEAL_TYPE.FREE || !isLcc;
  return (
    <View style={Styles.container}>
      <View style={Styles.infoContainer}>
        <FText numberOfLines={2} style={Styles.mealDesc}>
          {data.mealDescription ?? data.description}
        </FText>
        <FText style={Styles.mealPrice(!isMealFree)}>
          {!isMealFree ? formattedPrice(data.price) : Strings.free}
        </FText>
      </View>
      <View style={Styles.addRemoveButtonContainer}>
        <FTouchableOpacity onPress={onPress}>
          {isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
        </FTouchableOpacity>
      </View>
    </View>
  );
};

export default SelectMeal;