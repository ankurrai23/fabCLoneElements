import {View} from 'react-native';
import React, {useCallback, useState, useImperativeHandle, useRef} from 'react';
import Slider from '../slider';
import FText, {FONT_TYPE} from '../../rn/FText';
import Styles from './Styles';

/*
TODO: need to optimize
*/
const RangeSlider = React.forwardRef(
  (
    {minLimit, maxLimit, granularity, minValue, maxValue, valueFormatter},
    ref,
  ) => {
    const [value, setValue] = useState({min: minValue, max: maxValue});
    const sliderMoved = useRef(false);
    const sliderRef = useRef(null);
    useImperativeHandle(ref, () => ({
      resetSlider: () => {
        sliderMoved.current = true;
        setValue((prevState) => ({...prevState, min: minLimit, max: maxLimit}));
        sliderRef.current.resetSlider();
      },
      data: {
        minLimit,
        maxLimit,
        minValue: value.min,
        maxValue: value.max,
        changed: sliderMoved.current,
      },
    }));

    const callback = useCallback((iV, fV) => {
      sliderMoved.current = true;
      setValue((prevState) => ({...prevState, min: iV, max: fV}));
    }, []);
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
          ref={sliderRef}
          minLimit={minLimit}
          maxLimit={maxLimit}
          granularity={granularity}
          minValue={minValue}
          maxValue={maxValue}
          onChange={callback}
        />
      </View>
    );
  },
);

export default RangeSlider;
