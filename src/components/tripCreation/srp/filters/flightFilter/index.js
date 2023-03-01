import {Switch, View} from 'react-native';
import React, {useCallback, useImperativeHandle, useRef, useState} from 'react';
import Styles from './Styles';
import FTouchableOpacity from '../../../../../common/rn/FTouchableOpacity';
import FText, {FONT_TYPE} from '../../../../../common/rn/FText';
import QuickLinks, {FilterSection} from '../component';
import FImage from '../../../../../common/rn/FImage';
import Checkbox from '../../../../../common/components/checkbox';
import Separator from '../../../../../common/components/separator';
import {Strings} from '../../../../../utils/strings/index.travelPlus';
import {dialogBoxStyle, isPlatformIos} from '../../../../../utils/Utils';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../../../common/components/button';

const MINIMUM_FLIGHT_COUNT = 4;

const Airlines = React.forwardRef(({airline}, ref) => {
  const [state, setState] = useState([...airline.map((item) => ({...item}))]);
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
      {state
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
  const [state, setState] = useState([...stops.map((item) => ({...item}))]);

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
    <FilterSection title={Strings.stops}>
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

export const ShowOOP = React.forwardRef(({showOOP}, ref) => {
  const [_showOOP, setShowOOP] = useState(showOOP);
  console.log(_showOOP, showOOP);

  useImperativeHandle(ref, () => ({
    clearAll: () => {
      setShowOOP(false);
    },
    data: _showOOP,
  }));

  return (
    <View style={Styles.oopSwitchContainer}>
      <FText style={Styles.showOOPText}>{Strings.showOOPFlights}</FText>
      <Switch
        trackColor={isPlatformIos() ? Styles.switchTrackColor : {}}
        value={!!_showOOP}
        onChange={() => setShowOOP(!_showOOP)}
      />
    </View>
  );
});

const FlightFilter = ({filterData, onApply}) => {
  const stopsRef = useRef();
  const airlineRef = useRef();
  const entitlementRef = useRef();

  const onClearAll = useCallback(() => {
    stopsRef.current.clearAll();
    airlineRef.current.clearAll();
    entitlementRef.current.clearAll();
  }, []);

  const onApplyPress = () => {
    const data = {};
    if (filterData.stop) {
      data.stop = stopsRef.current.data;
    }
    if (filterData.filterAirline) {
      data.filterAirline = airlineRef.current.data;
    }
    data.showOOP = entitlementRef.current.data;
    onApply(data);
  };

  return (
    <>
      <View style={Styles.titleContainer}>
        <FText style={Styles.filterText}>{Strings.filter}</FText>
        <FTouchableOpacity onPress={onClearAll}>
          <FText style={Styles.clearAllText}>{Strings.clearAll}</FText>
        </FTouchableOpacity>
      </View>
      <Separator style={Styles.separator} />
      <ScrollView style={dialogBoxStyle(0.6)} bounces={false}>
        {filterData.stop && <Stops stops={filterData.stop} ref={stopsRef} />}
        <Separator style={Styles.separator} />
        {filterData.filterAirline && (
          <Airlines airline={filterData.filterAirline} ref={airlineRef} />
        )}
        <Separator style={Styles.separator} />
        <ShowOOP showOOP={filterData.showOOP} ref={entitlementRef} />
        <Separator style={Styles.separator} />
      </ScrollView>
      <Button
        onPress={onApplyPress}
        style={Styles.applyButton}
        textStyle={Styles.applyText}
        textFont={FONT_TYPE.MEDIUM}>
        {Strings.apply}
      </Button>
    </>
  );
};

export default FlightFilter;
