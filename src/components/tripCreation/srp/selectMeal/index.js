import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Icon from '../../../../assets/icons/Icon';
import {Color} from '../../../../utils/color/index.travelPlus';
import {formattedPrice} from '../../../../utils/Utils';
import {Strings} from '../../../../utils/strings/index.travelPlus';

const SelectMeal = ({
  data,
  isLcc,
  onAddPress,
  count,
  onRemovePress,
  disableMinusButton,
  disablePlusButton,
}) => {
  const isMealFree = data.price === 0 || !isLcc;
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
        <FTouchableOpacity
          disabled={disableMinusButton}
          style={Styles.addRemoveButtonStyle(disableMinusButton)}
          onPress={() => onRemovePress?.(data)}>
          <Icon.Minus
            stroke={disableMinusButton ? Color.FORD_GRAY : Color.DODGER_BLUE}
          />
        </FTouchableOpacity>
        <FText style={Styles.count}>{count}</FText>
        <FTouchableOpacity
          // disabled={disablePlusButton}
          style={Styles.addRemoveButtonStyle(disablePlusButton)}
          onPress={() => onAddPress?.(data)}>
          <Icon.Plus
            stroke={disablePlusButton ? Color.FORD_GRAY : Color.DODGER_BLUE}
          />
        </FTouchableOpacity>
      </View>
    </View>
  );
};

export default SelectMeal;
