import {View} from 'react-native';
import React, {useCallback, useImperativeHandle, useRef, useState} from 'react';
import Styles from './Styles';
import FTouchableOpacity from '../../../../../common/rn/FTouchableOpacity';
import FText, {FONT_TYPE} from '../../../../../common/rn/FText';
import SortAndFilter, {FilterButton, FilterSection} from '../component';
import FImage from '../../../../../common/rn/FImage';
import Checkbox from '../../../../../common/components/checkbox';
import Separator from '../../../../../common/components/separator';
import {Strings} from '../../../../../utils/strings/index.travelPlus';

const Airlines = React.forwardRef(({airline}, ref) => {
  const [state, setState] = useState([...airline]);
  const [moreFlights, showMoreFlights] = useState(false);
  const airlinesCount = moreFlights ? state.length : 4;

  useImperativeHandle(ref, () => ({
    clearAll: () => {
      state.forEach((item) => {
        item.selected = false;
      });
      setState([...state]);
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
      {airline.length > 4 && (
        <FTouchableOpacity
          style={Styles.showMoreAirlineButton}
          onPress={() => showMoreFlights((prevState) => !prevState)}>
          <FText style={Styles.showMoreAirlineText}>
            {Strings.showMoreAirlines(moreFlights)}
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
      state.forEach((item) => {
        item.selected = false;
      });
      setState([...state]);
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
            <FText
              style={Styles.stopCountText(item.selected)}
              type={FONT_TYPE.MEDIUM}>
              {item.noOfStops}
            </FText>
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
      state.forEach((item) => {
        item.selected = false;
      });
      setState([...state]);
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

const FlightFilter = ({sortData, onSortSelect, filterData, onApply}) => {
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
      stops: stopsRef.current.data,
      airline: airlineRef.current.data,
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
      <Stops stops={filterData.stops} ref={stopsRef} />
      <Airlines airline={filterData.airline} ref={airlineRef} />
      <Entitlement entitlement={filterData.entitlement} ref={entitlementRef} />
    </SortAndFilter>
  );
};

export default FlightFilter;
