import {BusSubtripActions} from '../../../utils/SubTripActions';

const trainItineraryCardProps = {
  bookingDetails: {
    date: '22',
    month: 'Nov',
    sourceStationCode: 'CSTM',
    sourceCity: 'Mumbai',
    TravelDate: 'Tue, 22 Nov',
    destinationStationCode: 'TVC',
    destinationCity: 'Thiruvanthapuram',
    departureTime: '21:00, Tue, 22 Nov',
    arrivalTime: '09:00, Wed, 23 Nov',
    duration: '1h 50min',
    sourcePlatform: '',
    destinationPlatform: '',
    trainName: 'Mumbai - Madras Superfast Express',
    pnr: '256-99589',
    class: 'AC 3 Tier Sleeper',
    berth: '42, Side upper',
    trainStatus: 'CONFIRMED',
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
  actionDisabled: false,
};

export default trainItineraryCardProps;
