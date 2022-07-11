const coTravellersDetailProps = {
  isCoTravellersEnabled: () => console.log('card pressed', true),
  onCoTravellersToggle: () => console.log('Info Pressed'),
  onPressCoTraveler: () => console.log('co travelers'),
  data: [
    {
      userId: 'a3e42285-b567-49be-b4a6-6ea3c8f118c7',
      fullName: 'Rahul Srivastav',
    },
    {userId: 'a3e42285-b567-49be-b4a6-6ea3c8f118c8', fullName: 'Sanchit Shah'},
    {userId: 'a3e42285-b567-49be-b4a6-6ea3c8f118c9', fullName: 'Ranjit'},
  ],
  coTravelerError: false,
  removeItem: (index) => console.log('remove item', index),
};

export default coTravellersDetailProps;
