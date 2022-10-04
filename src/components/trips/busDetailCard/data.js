import {BusSubtripActions} from '../../../utils/SubTripActions';

const busItineraryCardProps = {
  title: 'Itinerary 1',
  item: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceBusStop: 'Kashmiri Gate',
    destinationBusStop: 'Andheri Bus Stop',
    pickupTime: '07:00 PM',
    actionDisabled: false,
    travelCompany: 'Dolphin Tour and Travel',
    busInfo: 'Capella A/C Sleeper (2+1)',
    busBookingStatus: 'CONFIRMED',
    duration: '3h 20 mins',
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
    showStatus: false,
  },
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
};

export default busItineraryCardProps;
