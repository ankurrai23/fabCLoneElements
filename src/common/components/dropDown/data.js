const dropDownProps = {
  data1: [],
  data: [
    {
      title: 'New Delhi, India',
      insideBracket: 'DEL',
      subTitle: 'Indira Gandhi Internation Airport',
    },
    {
      title: 'Dehradun, India',
      insideBracket: 'DED',
      subTitle: 'Jolly Grant Airport',
    },
    {
      title: 'Mumbai, India',
      subTitle: 'Chhatrapati Shivaji Maharaj International Airport',
      insideBracket: 'BOM',
    },
    {
      title: 'New Delhi, India',
      insideBracket: 'DEL',
      subTitle: 'Indira Gandhi Internation Airport',
    },
    // {
    //   title: 'Dehradun, India',
    //   insideBracket: 'DED',
    //   subTitle: 'Jolly Grant Airport',
    // },
    // {
    //   title: 'Mumbai, India',
    //   subTitle: 'Chhatrapati Shivaji Maharaj International Airport',
    //   insideBracket: 'BOM',
    // },
    // {
    //   title: 'New Delhi, India',
    //   insideBracket: 'DEL',
    //   subTitle: 'Indira Gandhi Internation Airport',
    // },
    // {
    //   title: 'Dehradun, India',
    //   insideBracket: 'DED',
    //   subTitle: 'Jolly Grant Airport',
    // },
    // {
    //   title: 'Mumbai, India',
    //   subTitle: 'Chhatrapati Shivaji Maharaj International Airport',
    //   insideBracket: 'BOM',
    // },
  ],
  label: 'Enter city name',
  searchType: 'airport',
  onPress: (item) => console.log('pressed item', item),
};

export default dropDownProps;
