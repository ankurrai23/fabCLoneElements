import {ImageConst} from '../../../utils/imageConst/index.travelPlus';

const dropDownProps = {
  data1: [],
  data: [
    {
      title: 'New Delhi, India',
      insideBracket: 'DEL',
      subTitle: 'Indira Gandhi Internation Airport',
      img: ImageConst.searchAirport,
    },
    {
      title: 'Dehradun, India',
      insideBracket: 'DED',
      subTitle: 'Jolly Grant Airport',
      img: ImageConst.searchAirport,
    },
    {
      title: 'Mumbai, India',
      subTitle: 'Chhatrapati Shivaji Maharaj International Airport',
      insideBracket: 'BOM',
      img: ImageConst.searchAirport,
    },
    {
      title: 'New Delhi, India',
      insideBracket: 'DEL',
      subTitle: 'Indira Gandhi Internation Airport',
      img: ImageConst.searchAirport,
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
  onFocusChange: () => console.log('focus changed'),
  onPressClose: () => console.log('closed'),
};

export default dropDownProps;
