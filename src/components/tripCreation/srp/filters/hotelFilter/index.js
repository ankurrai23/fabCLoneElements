import {View} from 'react-native';
import React, {useImperativeHandle, useRef, useState} from 'react';
import SortAndFilter, {FilterButton, FilterSection} from '../component';
import {Strings} from '../../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../../utils/Dimen';
import Styles from './Styles';
import Icon from '../../../../../assets/icons/Icon';
import FText from '../../../../../common/rn/FText';
import {Color} from '../../../../../utils/color/index.travelPlus';
import RangeSlider from '../../../../../common/components/rangeSlider';

const HotelRating = React.forwardRef(({starRatings}, ref) => {
  const [state, setState] = useState([...starRatings]);

  useImperativeHandle(ref, () => ({
    clearAll: () => {
      setState((prevState) =>
        prevState.map((item) => ({...item, selected: false})),
      );
    },
    data: state,
  }));

  const onHotelRatingSelect = (item) => {
    let stateCopy = [...state];
    stateCopy.forEach((entity) => {
      if (entity.id === item.id) {
        entity.selected = !entity.selected;
      }
      if (item.id === Strings.two && entity.id === Strings.one) {
        entity.selected = !entity.selected;
      }
    });
    setState(stateCopy);
  };

  return (
    <FilterSection title={Strings.hotelRating}>
      <View style={Styles.buttonContainer}>
        {starRatings
          .filter((e) => e.id !== Strings.one)
          .map((item, index) => (
            <FilterButton
              isSelected={item.selected}
              onPress={() => onHotelRatingSelect(item)}
              viewStyle={Styles.flexRow}
              addMarginRight={index < starRatings.length - 2}>
              <Icon.RatingStar
                width={DP._16}
                height={DP._16}
                fill={item.selected ? Color.DODGER_BLUE : null}
              />
              <FText style={Styles.ratingText(item.selected)}>
                {item.id === Strings.two ? Strings.lessThanTwo : item.id}
              </FText>
            </FilterButton>
          ))}
      </View>
    </FilterSection>
  );
});

const PreferredType = React.forwardRef(
  ({contractedRatePreferredFilter, travelPlusPreferredFilter}, ref) => {
    const [contractedRate, setContractedRate] = useState(
      contractedRatePreferredFilter,
    );
    const [travelPlusRate, setTravelPlusRate] = useState(
      travelPlusPreferredFilter,
    );

    useImperativeHandle(ref, () => ({
      clearAll: () => {
        setContractedRate(false);
        setTravelPlusRate(false);
      },
      data: {
        contractedRatePreferredFilter: contractedRate,
        travelPlusPreferredFilter: travelPlusRate,
      },
    }));

    return (
      <FilterSection title={Strings.preferredType}>
        <View style={Styles.buttonContainer}>
          <FilterButton
            isSelected={contractedRate}
            onPress={() => setContractedRate((prevState) => !prevState)}
            addMarginRight={true}>
            {Strings.contractedRate}
          </FilterButton>
          <FilterButton
            isSelected={travelPlusRate}
            onPress={() => setTravelPlusRate((prevState) => !prevState)}
            addMarginRight={false}>
            {Strings.travelPlusPreferred}
          </FilterButton>
        </View>
      </FilterSection>
    );
  },
);

const Entitlement = React.forwardRef(({entitlement}, ref) => {
  const [state, setState] = useState([...entitlement]);

  useImperativeHandle(ref, () => ({
    clearAll: () => {
      setState((prevState) =>
        prevState.map((item) => ({...item, selected: false})),
      );
    },
    data: state,
  }));

  const onEntitlementSelect = (item) => {
    state.forEach((value) => {
      if (value.id === item.id) value.selected = !value.selected;
    });
    setState([...state]);
  };

  return (
    <FilterSection
      title={Strings.selectEntitlement}
      style={Styles.entitlementStyle}>
      <View style={Styles.buttonContainer}>
        {state.map((item, index) => (
          <FilterButton
            isSelected={item.selected}
            onPress={() => onEntitlementSelect(item)}
            addMarginRight={index < state.length - 1}>
            {item.name}
          </FilterButton>
        ))}
      </View>
    </FilterSection>
  );
});

const HotelFilter = ({sortData, filterData, onSortSelect, onApply}) => {
  const sliderRef = useRef();
  const hotelRatingRef = useRef();
  const preferredTypeRef = useRef();
  const entitlementRef = useRef();

  const onClearAll = () => {
    sliderRef.current.resetSlider();
    hotelRatingRef.current.clearAll();
    preferredTypeRef.current.clearAll();
    entitlementRef.current.clearAll();
  };

  const onApplyPress = () => {
    const data = {
      ...preferredTypeRef.current.data,
      starRatings: hotelRatingRef.current.data,
      priceData: sliderRef.current.data,
      entitlement: entitlementRef.current.data,
    };
    onApply(data);
  };

  return (
    <SortAndFilter
      sortData={sortData}
      onSortSelect={onSortSelect}
      onClearAll={onClearAll}
      onApply={onApplyPress}>
      <FilterSection title={Strings.price}>
        <RangeSlider ref={sliderRef} {...filterData.priceData} />
      </FilterSection>
      <HotelRating ref={hotelRatingRef} starRatings={filterData.starRatings} />
      <PreferredType
        ref={preferredTypeRef}
        contractedRatePreferredFilter={filterData.contractedRatePreferredFilter}
        travelPlusPreferredFilter={filterData.travelPlusPreferredFilter}
      />
      <Entitlement entitlement={filterData.entitlement} ref={entitlementRef} />
    </SortAndFilter>
  );
};

export default HotelFilter;
