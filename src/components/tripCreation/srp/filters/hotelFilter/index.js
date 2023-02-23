import {View} from 'react-native';
import React, {useImperativeHandle, useRef, useState} from 'react';
import QuickLinks, {FilterButton, FilterSection} from '../component';
import {Strings} from '../../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../../utils/Dimen';
import Styles from './Styles';
import Icon from '../../../../../assets/icons/Icon';
import FText from '../../../../../common/rn/FText';
import {Color} from '../../../../../utils/color/index.travelPlus';
import RangeSlider from '../../../../../common/components/rangeSlider';
import {ShowOOP} from '../flightFilter';
import Separator from '../../../../../common/components/separator';

const HotelRating = React.forwardRef(({starRatings}, ref) => {
  const [state, setState] = useState([
    ...starRatings.map((item) => ({...item})),
  ]);

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
        {state
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

const HotelFilter = ({filterData, onSortSelect, onApply, isFilterApplied}) => {
  const sliderRef = useRef();
  const hotelRatingRef = useRef();
  const preferredTypeRef = useRef();
  const entitlementRef = useRef();

  const onClearAll = () => {
    sliderRef.current.resetSlider();
    hotelRatingRef.current.clearAll();
    preferredTypeRef.current.clearAll();
  };

  const onApplyPress = () => {
    const data = {
      ...preferredTypeRef.current.data,
      starRatings: hotelRatingRef.current.data,
      priceData: sliderRef.current.data,
      showOOP: entitlementRef.current.data,
    };
    onApply(data);
  };

  return (
    <QuickLinks
      onSortSelect={onSortSelect}
      isFilterApplied={isFilterApplied}
      onClearAll={onClearAll}
      onApply={onApplyPress}>
      <FilterSection title={Strings.price}>
        <RangeSlider ref={sliderRef} {...filterData.priceData} />
      </FilterSection>
      <Separator style={Styles.separator} />
      <HotelRating ref={hotelRatingRef} starRatings={filterData.starRatings} />
      <Separator style={Styles.separator} />
      <PreferredType
        ref={preferredTypeRef}
        contractedRatePreferredFilter={filterData.contractedRatePreferredFilter}
        travelPlusPreferredFilter={filterData.travelPlusPreferredFilter}
      />
      <Separator style={Styles.separator} />
      <ShowOOP ref={entitlementRef} showOOP={filterData.showOOP} />
      <Separator style={Styles.separator} />
    </QuickLinks>
  );
};

export default HotelFilter;
