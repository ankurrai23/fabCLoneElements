import {View} from 'react-native';
import React, {useCallback, useImperativeHandle, useRef, useState} from 'react';
import Styles from './Styles';
import FTouchableOpacity from '../../../../../common/rn/FTouchableOpacity';
import FText from '../../../../../common/rn/FText';
import SortAndFilter, {FilterButton, FilterSection} from '../component';
import FImage from '../../../../../common/rn/FImage';
import Checkbox from '../../../../../common/components/checkbox';
import Separator from '../../../../../common/components/separator';
import {Strings} from '../../../../../utils/strings/index.travelPlus';

const MINIMUM_FLIGHT_COUNT = 4;

const Airlines = React.forwardRef(({airline}, ref) => {
  const [state, setState] = useState([...airline]);
  const [allFlights, setAllFlights] = useState(false);
  const airlinesCount = allFlights ? state.length : MINIMUM_FLIGHT_COUNT;

  useImperativeHandle(ref, () => ({
    clearAll: () => {
      setState((prevState) =>
        prevState.map((item) => ({...item, selected: false})),
      );
    },
    data: state,
  }));

  const onAirlineSelect = (item) => {
    state.forEach((value) => {
      if (value.id === item.id) value.selected = !value.selected;
    });
    setState([...state]);
  };

  return (
    <FilterSection title={Strings.airlines}>
      {airline
        .filter((_, index) => index < airlinesCount)
        .map((item, index, array) => (
          <>
            <FTouchableOpacity
              onPress={() => onAirlineSelect(item)}
              style={Styles.airlineButton(index, array.length)}>
              <FImage
                source={{uri: item.icon}}
                style={Styles.airlineIconStyle}
              />
              <FText style={Styles.Flex}>{item.name}</FText>
              <Checkbox
                isChecked={item.selected}
                toggleChecked={() => onAirlineSelect(item)}
              />
            </FTouchableOpacity>
            {index < array.length - 1 && <Separator />}
          </>
        ))}
      {airline.length > MINIMUM_FLIGHT_COUNT && (
        <FTouchableOpacity
          style={Styles.showMoreAirlineButton}
          onPress={() => setAllFlights((prevState) => !prevState)}>
          <FText style={Styles.showMoreAirlineText}>
            {Strings.showMoreAirlines(allFlights)}
          </FText>
        </FTouchableOpacity>
      )}
    </FilterSection>
  );
});

const Stops = React.forwardRef(({stops}, ref) => {
  const [state, setState] = useState([...stops]);

  useImperativeHandle(ref, () => ({
    clearAll: () => {
      setState((prevState) =>
        prevState.map((item) => ({...item, selected: false})),
      );
    },
    data: state,
  }));

  const onStopSelect = (item) => {
    state.forEach((value) => {
      if (value.id === item.id) value.selected = !value.selected;
    });
    setState([...state]);
  };

  return (
    <FilterSection title={Strings.selectStops}>
      <View style={Styles.buttonContainer}>
        {state.map((item, index) => (
          <FTouchableOpacity
            onPress={() => onStopSelect(item)}
            style={Styles.button(item.selected, index < state.length - 1)}>
            <FText style={Styles.stopDescText(item.selected)}>
              {item.name}
            </FText>
          </FTouchableOpacity>
        ))}
      </View>
    </FilterSection>
  );
});

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

const FlightFilter = ({
  sortData,
  onSortSelect,
  filterData,
  onApply,
  isFilterApplied,
}) => {
  const stopsRef = useRef();
  const airlineRef = useRef();
  const entitlementRef = useRef();

  const onClearAll = useCallback(() => {
    stopsRef.current.clearAll();
    airlineRef.current.clearAll();
    entitlementRef.current.clearAll();
  }, []);

  const onApplyPress = () => {
    const data = {
      stop: stopsRef.current.data,
      filterAirline: airlineRef.current.data,
      entitlement: entitlementRef.current.data,
    };
    onApply(data);
  };

  return (
    <SortAndFilter
      sortData={sortData}
      onSortSelect={onSortSelect}
      isFilterApplied={isFilterApplied}
      onClearAll={onClearAll}
      onApply={onApplyPress}>
      <Stops stops={filterData.stop} ref={stopsRef} />
      <Airlines airline={filterData.filterAirline} ref={airlineRef} />
      <Entitlement entitlement={filterData.entitlement} ref={entitlementRef} />
    </SortAndFilter>
  );
};

export default FlightFilter;
