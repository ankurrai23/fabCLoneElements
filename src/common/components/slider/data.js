const sliderProps = {
  initialLimit: 5000,
  finalLimit: 60000,
  granularity: 1000,
  initialValue: 7000,
  finalValue: 14000,
  onChange: (lowerValue, upperValue) =>
    console.log('value of sliders', lowerValue, upperValue),
};

export default sliderProps;
