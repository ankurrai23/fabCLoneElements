const travellerSelectionProps = {
  selectionPlaceHolder: 'Select seat',
  onClick: (index, trashIconClicked) => {
    console.log(index, trashIconClicked);
  },
  travellersInfo: [
    {
      travellerName: 'Mr. Traveller A lskdfjldsfjsdlkfjskfj',
      selectedData: 'some Data',
      isSelected: false,
    },
    {
      travellerName: 'Mr. Traveller Bldfskflsfjlsfjlsflskfdjlskfj',
      selectedData: '',
      isSelected: true,
    },
    {travellerName: 'Mr. Traveller C', selectedData: '', isSelected: true},
    {travellerName: 'Mr. Traveller D', selectedData: '', isSelected: false},
    {travellerName: 'Mr. Traveller F', selectedData: '', isSelected: false},
  ],
};

export default travellerSelectionProps;
