import React from 'react';
import {View} from 'react-native';
import {FONT_TYPE, FText, FTouchableOpacity} from '../../../../../index';
import styles from './Styles';
import Icon from '../../../../../assets/icons/Icon';
import Separator from '../../../../../common/components/separator';
import OOPTag from '../../../../trips/components/OOPTag/OOPTag';
import {Strings} from '../../../../../utils/strings/index.travelPlus';

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
        <View>
          <FText style={styles.planTitle} numberOfLines={1}>
            {planTitle}
          </FText>
          <View style={styles.subHeader}>
            <FText
              style={styles.planPrice(isOutOfPolicy)}
              type={FONT_TYPE.MEDIUM}>
              {planPrice}
              <FText style={styles.perAdultStyle}>{Strings.perAdult}</FText>
            </FText>
            {isOutOfPolicy && <OOPTag />}
          </View>
        </View>
        {isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
      </View>
      <Separator />
      {planDetails.map((plan) => {
        return (
          <View style={styles.planDetailItem}>
            {plan.icon}
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
