import {Color} from '../../../utils/color';

const flightDetailCardProps = {
  title: 'Return Flight',
  tripDetails: {
    date: '22',
    month: 'Nov',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceAirportCode: 'BOM',
    destinationAirportCode: 'BLR',
    sourceAirportTerminal: 'T2',
    destinationAirportTerminal: 'T3',
    departureTime: '18:30',
    arrivalTime: '22:30',
    flightNumber: '717',
    pnr: 'GBLP6Q',
    duration: '1h 50min',
    airline: 'Indigo',
    flightBookingStatus: 'CONFIRMED',
    stop: 'Non stop',
    reduceOpacity: true,
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
  actionsDisabled: false,
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  notificationText: 'Some thing to notify',
};

export default flightDetailCardProps;
