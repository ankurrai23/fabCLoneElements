import {Color} from '../../../utils/color';

const flightDetailCardProps = {
  title: 'Return Flight',
  item: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
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
    actionsDisabled: false,
    flightBookingStatus: 'CONFIRMED',
    stop: 'Non stop',
    status: {
      key: 'PROCESSED',
      value: 'Confirmed',
      textColor: Color.DARK_SEA_FOAM,
      bgColor: Color.DARK_SEA_FOAM + '1a',
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
    modificationRequested: false,
    cancelled: false,
  },
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
};

export default flightDetailCardProps;
