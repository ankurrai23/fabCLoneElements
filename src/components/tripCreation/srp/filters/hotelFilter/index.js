import {View} from 'react-native';
import React from 'react';
import SortAndFilter, {FilterButton, FilterSection} from '../component';
import {Strings} from '../../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../../utils/Dimen';
import Styles from './Styles';
import Icon from '../../../../../assets/icons/Icon';
import FText from '../../../../../common/rn/FText';
import {Color} from '../../../../../utils/color/index.travelPlus';

const HotelFilter = ({
  sortData,
  onSortSelect,
  entitlementData,
  onEntitlementSelect,
  preferredTypeData,
  onPreferredTypeSelect,
  hotelRatingData,
  onApply,
  onClearAll,
  onHotelRatingSelect,
}) => {
  return (
    <SortAndFilter
      sortData={sortData}
      onSortSelect={onSortSelect}
      onApply={onApply}
      onClearAll={onClearAll}>
      <FilterSection title={'Price'} />
      <FilterSection title={Strings.hotelRating}>
        <View style={Styles.buttonContainer}>
          {hotelRatingData.map((item, index) => (
            <FilterButton
              isSelected={item.isSelected}
              onPress={() => onHotelRatingSelect(item)}
              viewStyle={Styles.flexRow}
              addMarginRight={index < hotelRatingData.length - 1}>
              <Icon.RatingStar
                width={DP._16}
                height={DP._16}
                fill={item.isSelected ? Color.DODGER_BLUE : null}
              />
              <FText style={Styles.ratingText(item.isSelected)}>
                {item.starRating}
              </FText>
            </FilterButton>
          ))}
        </View>
      </FilterSection>
      <FilterSection title={Strings.preferredType}>
        <View style={Styles.buttonContainer}>
          {preferredTypeData.map((item, index) => (
            <FilterButton
              isSelected={item.isSelected}
              onPress={() => onPreferredTypeSelect(item)}
              addMarginRight={index < preferredTypeData.length - 1}>
              {item.value}
            </FilterButton>
          ))}
        </View>
      </FilterSection>
      <FilterSection
        title={Strings.selectEntitlement}
        style={{marginBottom: DP._16}}>
        <View style={Styles.buttonContainer}>
          {entitlementData.map((item, index) => (
            <FilterButton
              isSelected={item.isSelected}
              onPress={() => onEntitlementSelect(item)}
              addMarginRight={index < entitlementData.length - 1}>
              {item.value}
            </FilterButton>
          ))}
        </View>
      </FilterSection>
    </SortAndFilter>
  );
};

export default HotelFilter;
