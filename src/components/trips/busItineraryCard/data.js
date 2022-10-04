import {BusSubtripActions} from '../../../utils/SubTripActions';

const busItineraryCardProps = {
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
    status: {
      key: 'PROCESSED',
      value: 'Processed',
      textColor: '#d65656',
      bgColor: '#d656561a',
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
      {
        type: BusSubtripActions.CANCELLATION_REQUESTED,
        name: 'You have sent a modification request for this booking.',
      },
    ],
    showStatus: false,
  },
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: false,
  isAlert: true,
  timelineGreyed: false,
  processed: true,
};

export default busItineraryCardProps;
