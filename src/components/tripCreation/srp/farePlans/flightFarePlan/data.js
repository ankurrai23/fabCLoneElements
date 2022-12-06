import {Color} from '../../../../../utils/color/index.fabhotel';

const flightFarePlanProps = {
  planTitle: 'Economy basic',
  planPrice: '₹2,500',
  isSelected: false,
  isOutOfPolicy: true,
  planDetails: [
    {
      icon: 'https://picsum.photos/20/20',
      title: 'Cabin bag',
      value: '7 Kgs',
    },
    {icon: 'https://picsum.photos/20/20', title: 'Check-in', value: '7 Kgs'},
    {
      icon: 'https://picsum.photos/20/20',
      title: 'Seat',
      value: 'Free seat',
      textColor: Color.DARK_SEA_FOAM,
    },
    {
      icon: 'https://picsum.photos/20/20',
      title: 'Meal',
      value: 'Free meal',
      textColor: Color.DARK_SEA_FOAM,
    },
    {
      icon: 'https://picsum.photos/20/20',
      title: 'Date change fee',
      value: 'Starting from ₹900',
    },
    {
      icon: 'https://picsum.photos/20/20',
      title: 'Cancellation fee',
      value: 'Starting from ₹1000',
    },
  ],
};

export default flightFarePlanProps;
