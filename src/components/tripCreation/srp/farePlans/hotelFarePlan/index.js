import React from 'react';
import {View} from 'react-native';
import {FONT_TYPE, FText, FTouchableOpacity} from '../../../../../index';
import OOPTag from '../../../../trips/components/OOPTag/OOPTag';
import Icon from '../../../../../assets/icons/Icon';
import styles from './Styles';
import {Strings} from '../../../../../utils/strings/index.travelPlus';

const HotelFarePlanCard = ({
  planTitle,
  planPrice,
  isSelected,
  isOutOfPolicy,
  onViewPolicy,
  onPress,
  style,
  gstIncluded,
}) => {
  return (
    <FTouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.content}>
        <FText style={styles.planTitle} numberOfLines={1}>
          {planTitle}
        </FText>
        <FTouchableOpacity
          onPress={onViewPolicy}
          style={styles.cancellationPolicyButton}>
          <FText style={styles.cancellationPolicy}>
            {Strings.cancellationPolicy}
          </FText>
        </FTouchableOpacity>
        <View style={styles.priceContent}>
          <FText style={styles.planPrice} type={FONT_TYPE.MEDIUM}>
            {planPrice}
          </FText>

          <FText style={styles.gstDetails}>
            {`${Strings.perNight} ${
              gstIncluded ? Strings.inclGst : Strings.exGst
            }`}
          </FText>
        </View>
        {isOutOfPolicy && OOPTag(styles.oopMargin)}
      </View>
      {isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
    </FTouchableOpacity>
  );
};

export default HotelFarePlanCard;
