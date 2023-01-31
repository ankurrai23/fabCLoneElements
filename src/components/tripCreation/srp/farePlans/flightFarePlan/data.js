import React from 'react';
import Icon from '../../../../../assets/icons/Icon';
import {Color} from '../../../../../utils/color/index.travelPlus';

const flightFarePlanProps = {
  planTitle: 'Economy basic',
  planPrice: '₹2,500',
  isSelected: false,
  isOutOfPolicy: true,
  planDetails: [
    {
      icon: <Icon.Briefcase />,
      title: 'Cabin bag',
      value: '7 Kgs',
    },
    {icon: <Icon.Briefcase />, title: 'Check-in', value: '7 Kgs'},
    {
      icon: <Icon.Briefcase />,
      title: 'Seat',
      value: 'Free seat',
      textColor: Color.DARK_SEA_FOAM,
    },
    {
      icon: <Icon.Briefcase />,
      title: 'Meal',
      value: 'Free meal',
      textColor: Color.DARK_SEA_FOAM,
    },
    {
      icon: <Icon.Briefcase />,
      title: 'Date change fee',
      value: 'Starting from ₹900',
    },
    {
      icon: <Icon.Briefcase />,
      title: 'Cancellation fee',
      value: 'Starting from ₹1000',
    },
  ],
};

export default flightFarePlanProps;
