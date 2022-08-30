import React from 'react';
import Icon from '../../../assets/icons/Icon';

const dropDownProps = {
  data: [
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
  icon: <Icon.Aeroplane />,
  onPress: (item) => console.log('pressed item', item),
  onFocusChange: () => console.log('focus changed'),
  onPressClose: () => console.log('closed'),
};

export default dropDownProps;
