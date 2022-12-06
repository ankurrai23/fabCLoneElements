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
}) => {
  return (
    <FTouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.content}>
        <FText style={styles.planTitle} numberOfLines={1}>
          {planTitle}
        </FText>
        <FTouchableOpacity onPress={onViewPolicy}>
          <FText style={styles.cancellationPolicy}>
            {Strings.cancellationPolicy}
          </FText>
        </FTouchableOpacity>
        <View style={styles.priceContent}>
          <FText style={styles.planPrice} type={FONT_TYPE.MEDIUM}>
            {planPrice}
          </FText>
          <FText style={styles.gstDetails}>{Strings.perNightInclGst}</FText>
        </View>
        {isOutOfPolicy && OOPTag(styles.oopMargin)}
      </View>
      {isSelected ? <Icon.RadioActive /> : <Icon.RadioPassive />}
    </FTouchableOpacity>
  );
};

export default HotelFarePlanCard;
