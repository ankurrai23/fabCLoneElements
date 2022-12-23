import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Slider from '../slider';
import FText, {FONT_TYPE} from '../../rn/FText';
import Styles from './Styles';

const RangeSlider = ({
  minLimit,
  maxLimit,
  granularity,
  minValue,
  maxValue,
  valueFormatter,
}) => {
  const [value, setValue] = useState({min: minValue, max: maxValue});

  const callback = useCallback(
    (iV, fV) => setValue((prevState) => ({...prevState, min: iV, max: fV})),
    [],
  );
  return (
    <View>
      <View style={Styles.valueContainer}>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.valueText}>
          {valueFormatter ? valueFormatter(value.min) : value.min}
        </FText>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.valueText}>
          {valueFormatter ? valueFormatter(value.max) : value.max}
        </FText>
      </View>
      <Slider
        minLimit={minLimit}
        maxLimit={maxLimit}
        granularity={granularity}
        minValue={minValue}
        maxValue={maxValue}
        onChange={callback}
      />
    </View>
  );
};

export default RangeSlider;
