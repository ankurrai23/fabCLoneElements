const dropDownListProps = {
  label: 'Enter co-travellers name or email',
  searchText: null,
  onChangeSearchText: () => console.log('submit hotal data'),
  _onBlur: () => console.log('on blur'),
  _onFocus: () => console.log('on focus'),
  error: null,
  showSearch: true,
  searchResult: [
    {
      icon: null,
      title: 'New Delhi, India',
      subTitle: '(BOM)',
      subHeading: 'Indira Gandhi Internal Airport',
    },
    {
      icon: null,
      title: 'New Delhi, India',
      subTitle: '(BOM)',
      subHeading: 'Indira Gandhi Internal Airport',
    },
    {
      icon: null,
      title: 'New Delhi, India',
      subTitle: '(BOM)',
      subHeading: 'Indira Gandhi Internal Airport',
    },
  ],
  onPressSearchItem: () => console.log('search item press'),
};

export default dropDownListProps;
