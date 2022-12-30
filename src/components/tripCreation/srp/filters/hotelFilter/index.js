import {View} from 'react-native';
import React from 'react';
import SortAndFilter, {FilterButton, FilterSection} from '../component';
import {Strings} from '../../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../../utils/Dimen';
import Styles from './Styles';
import Icon from '../../../../../assets/icons/Icon';
import FText from '../../../../../common/rn/FText';
import {Color} from '../../../../../utils/color/index.travelPlus';
import RangeSlider from '../../../../../common/components/rangeSlider';

const HotelFilter = ({sortData, filterData, onSortSelect, onApply}) => {
  return (
    <SortAndFilter
      sortData={sortData}
      onSortSelect={onSortSelect}
      onApply={onApply}>
      <FilterSection title={Strings.price}>
        <RangeSlider {...filterData.priceData} />
      </FilterSection>
      <FilterSection title={Strings.hotelRating}>
        <View style={Styles.buttonContainer}>
          {filterData.starRatings
            .filter((e) => e.id !== '1')
            .map((item, index) => (
              <FilterButton
                isSelected={item.selected}
                // onPress={() => onHotelRatingSelect(item)}
                viewStyle={Styles.flexRow}
                addMarginRight={index < filterData.starRatings.length - 1}>
                <Icon.RatingStar
                  width={DP._16}
                  height={DP._16}
                  fill={item.selected ? Color.DODGER_BLUE : null}
                />
                <FText style={Styles.ratingText(item.selected)}>
                  {item.id === '2' ? '<2' : item.id}
                </FText>
              </FilterButton>
            ))}
        </View>
      </FilterSection>
      <FilterSection title={Strings.preferredType}>
        <View style={Styles.buttonContainer}>
          <FilterButton
            isSelected={filterData.selected}
            onPress={() => {}}
            addMarginRight={true}>
            {'Contracted rate'}
          </FilterButton>
          <FilterButton
            isSelected={filterData.travelPlusPreferredFilter}
            onPress={() => {}}
            addMarginRight={false}>
            {'TravelPlus preferred'}
          </FilterButton>
        </View>
      </FilterSection>
      <FilterSection
        title={Strings.selectEntitlement}
        style={{marginBottom: DP._16}}>
        <View style={Styles.buttonContainer}>
          {filterData.entitlement.map((item, index) => (
            <FilterButton
              isSelected={item.selected}
              onPress={() => {}}
              addMarginRight={index < filterData.entitlement.length - 1}>
              {item.value}
            </FilterButton>
          ))}
        </View>
      </FilterSection>
    </SortAndFilter>
  );
};

export default HotelFilter;
