const sliderProps = {
  minLimit: 5000,
  maxLimit: 60000,
  granularity: 1000,
  minValue: 7000,
  maxValue: 14000,
  onChange: (lowerValue, upperValue) =>
    console.log('value of sliders', lowerValue, upperValue),
};

export default sliderProps;
