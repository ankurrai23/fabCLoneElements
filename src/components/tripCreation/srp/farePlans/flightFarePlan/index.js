import React from 'react';
import {View} from 'react-native';
import {
  FImage,
  FONT_TYPE,
  FText,
  FTouchableOpacity,
} from '../../../../../index';
import styles from './Styles';
import Icon from '../../../../../assets/icons/Icon';
import Separator from '../../../../../common/components/separator';
import OOPTag from '../../../../trips/components/OOPTag/OOPTag';

const FlightFarePlanCard = ({
  planTitle,
  planPrice,
  isSelected,
  isOutOfPolicy,
  planDetails,
  onPress,
  style,
}) => {
  return (
    <FTouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.flex}>
          <FText style={styles.planTitle} numberOfLines={1}>
            {planTitle}
          </FText>
          <View style={styles.subHeader}>
            <FText style={styles.planPrice} type={FONT_TYPE.MEDIUM}>
              {planPrice}
            </FText>
            {isOutOfPolicy && OOPTag()}
          </View>
        </View>
        {isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
      </View>
      <Separator />
      {planDetails.map((plan) => {
        return (
          <View style={styles.planDetailItem}>
            <FImage
              style={styles.planIcon}
              source={{uri: plan.icon}}
              resizeMode={'contain'}
            />
            <FText
              style={styles.planDetailTitle}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {plan.title}
            </FText>
            <FText style={styles.planDetailValue(plan.textColor)}>
              {plan.value}
            </FText>
          </View>
        );
      })}
    </FTouchableOpacity>
  );
};

export default FlightFarePlanCard;
