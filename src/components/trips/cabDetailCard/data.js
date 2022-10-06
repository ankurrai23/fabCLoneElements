import {BusSubtripActions} from '../../../utils/SubTripActions';

const trainItineraryCardProps = {
  title: 'Itinerary 1',
  bookingDetails: {
    date: '22',
    month: 'Nov',
    source: 'Mumbai',
    destination: 'Lonavala',
    sourceStop: 'Mumbai Airport',
    destinationStop: 'Tungarli road',
    departureTime: '18:30',
    arrivalTime: '22:30',
    duration: '1h 50min',
    carName: 'White Hyundai Grand i10 Nios',
    driverName: 'Mr. Arvind Swami',
    driverContact: '+91 986856778',
    carNumber: 'MH 12A 2345',
    carInfo: 'Capella A/C Sleeper (2+1)',
    bookingId: '12345',
    bookingStatus: 'CONFIRMED',
  },
  actions: [
    {
      type: 'RESCHEDULE',
      name: 'Reschedule',
    },
    {
      type: 'CANCEL',
      name: 'Cancel',
    },
  ],
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showStatus: true,
  actionDisabled: false,
};

export default trainItineraryCardProps;
