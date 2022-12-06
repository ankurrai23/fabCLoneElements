import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Slider from '../slider';
import FText, {FONT_TYPE} from '../../rn/FText';
import Styles from './Styles';

const RangeSlider = ({
  initialLimit,
  finalLimit,
  granularity,
  initialValue,
  finalValue,
}) => {
  const [value, setValue] = useState({min: initialValue, max: finalValue});

  const callback = useCallback(
    (iV, fV) => setValue((prevState) => ({...prevState, min: iV, max: fV})),
    [],
  );
  return (
    <View>
      <View style={Styles.valueContainer}>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.valueText}>
          {value.min}
        </FText>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.valueText}>
          {value.max}
        </FText>
      </View>
      <Slider
        initialLimit={initialLimit}
        finalLimit={finalLimit}
        granularity={granularity}
        initialValue={initialValue}
        finalValue={finalValue}
        onChange={callback}
      />
    </View>
  );
};

export default RangeSlider;
