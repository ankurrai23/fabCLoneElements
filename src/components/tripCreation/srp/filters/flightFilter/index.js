import {View} from 'react-native';
import React, {useState} from 'react';
import Styles from './Styles';
import FTouchableOpacity from '../../../../../common/rn/FTouchableOpacity';
import FText, {FONT_TYPE} from '../../../../../common/rn/FText';
import SortAndFilter, {FilterButton, FilterSection} from '../component';
import FImage from '../../../../../common/rn/FImage';
import Checkbox from '../../../../../common/components/checkbox';
import Separator from '../../../../../common/components/separator';
import {Strings} from '../../../../../utils/strings/index.travelPlus';

const FlightFilter = ({
  sortData,
  onSortSelect,
  stopsData,
  entitlementData,
  airlineData,
  onAirlineSelect,
  onEntitlementSelect,
  onApply,
  onClearAll,
  onStopSelect,
}) => {
  const [moreFlights, showMoreFlights] = useState(false);
  const airlinesCount = moreFlights ? airlineData.length : 4;

  return (
    <SortAndFilter
      sortData={sortData}
      onSortSelect={onSortSelect}
      onClearAll={onClearAll}
      onApply={onApply}>
      <FilterSection title={Strings.selectStops}>
        <View style={Styles.buttonContainer}>
          {stopsData.map((item, index) => (
            <FTouchableOpacity
              onPress={() => onStopSelect(item)}
              style={Styles.button(
                item.isSelected,
                index < stopsData.length - 1,
              )}>
              <FText
                style={Styles.stopCountText(item.isSelected)}
                type={FONT_TYPE.MEDIUM}>
                {item.noOfStops}
              </FText>
              <FText style={Styles.stopDescText(item.isSelected)}>
                {item.desc}
              </FText>
            </FTouchableOpacity>
          ))}
        </View>
      </FilterSection>
      <FilterSection title={Strings.airlines}>
        {airlineData
          .filter((_, index) => index < airlinesCount)
          .map((item, index, array) => (
            <>
              <FTouchableOpacity
                onPress={() => onAirlineSelect(item)}
                style={Styles.airlineButton(index, array.length)}>
                <FImage
                  source={{uri: item.airlineIcon}}
                  style={Styles.airlineIconStyle}
                />
                <FText style={Styles.Flex}>{item.airlineName}</FText>
                <Checkbox isChecked={item.isSelected} />
              </FTouchableOpacity>
              {index < array.length - 1 && <Separator />}
            </>
          ))}
        {airlineData.length > 4 && (
          <FTouchableOpacity
            style={Styles.showMoreAirlineButton}
            onPress={() => showMoreFlights((prevState) => !prevState)}>
            <FText style={Styles.showMoreAirlineText}>
              {Strings.showMoreAirlines(moreFlights)}
            </FText>
          </FTouchableOpacity>
        )}
      </FilterSection>
      <FilterSection
        title={Strings.selectEntitlement}
        style={Styles.entitlementStyle}>
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

export default FlightFilter;
