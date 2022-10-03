import {FlightSubTripActions} from '../../../utils/SubTripActions';

const cabItineraryCardProps = {
  item: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    sourceCity: 'Delhi',
    destinationCity: 'Mumbai',
    sourceLocation: 'Kashmiri Gate',
    destinationLocation: 'Andheri Bus Stop',
    pickupTime: '07:00 PM',
    actionDisabled: false,
    carName: 'White Hyundai Grand i10 Nios',
    carNumber: 'MH 12A 2345',
    carDetails: 'Sedan | AC | 4 seats',
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
        type: FlightSubTripActions.CANCELLATION_REQUESTED,
        name: 'You have sent a modification request for this booking.',
      },
    ],
    showStatus: false,
  },
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: true,
  isAlert: true,
  timelineGreyed: true,
  processed: true,
};

export default cabItineraryCardProps;
