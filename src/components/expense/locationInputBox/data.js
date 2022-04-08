const locationInputBoxProps = {
  index: 0,
  joinBelow: true,
  showAddButton: false,
  showRemoveButton: false,
  value: 'Delhi',
  // error: 'Please select city/locality',
  onAdd: () => console.log('add stop'),
  onRemove: () => console.log('remove stop'),
  onPress: () => console.log('input box pressed'),
};

export default locationInputBoxProps;
