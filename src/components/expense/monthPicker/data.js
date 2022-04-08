const months = [
  {
    name: 'Oct 21',
    isSelected: false,
  },
  {
    name: 'Sep 21',
    isSelected: false,
  },
  {
    name: 'Jun 21',
    isSelected: true,
    showAsDropdown: true,
  },
];

const data = [
  {
    name: 'Oct 21',
    isSelected: false,
  },
  {
    name: 'Sep 21',
    isSelected: false,
  },
  {
    name: 'Aug 21',
    isSelected: false,
  },
  {
    name: 'Jul 21',
    isSelected: false,
  },
  {
    name: 'Jun 21',
    isSelected: true,
  },
];

const monthPickerProps = {
  data: months,
  dataForSheet: data,
  index: 0,
  onPress: () => console.log('open date picker'),
  onMonthChange: () => console.log('month changed'),
};

export default monthPickerProps;
