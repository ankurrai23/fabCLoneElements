import {BusSubtripActions} from '../../../utils/SubTripActions';

const busItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Mumbai',
    destination: 'Lonavala',
    sourceBusStop: 'Mumbai Airport',
    destinationBusStop: 'Tungarli road',
  },
  status: {
    key: 'PROCESSED',
    value: 'Processed',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  bookingDetails: {
    date: '22',
    month: 'Nov',
    source: 'Mumbai',
    destination: 'Lonavala',
    sourceBusStop: 'Mumbai Airport',
    destinationBusStop: 'Tungarli road',
    departureTime: '18:30',
    arrivalTime: '22:30',
    duration: '1h 50min',
    travelCompany: 'Dolphin Tour and Travel',
    coordinatorName: 'Mr. Arvind Swami',
    driverContact: '+91 986856778',
    busNumber: 'MH 12A 2345',
    busInfo: 'Capella A/C Sleeper (2+1)',
    seatNumber: 'L23',
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
    // {
    //   type: FlightSubTripActions.CANCELLATION_REQUESTED,
    //   name: 'You have sent a modification request for this booking.',
    // },
  ],
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: true,
  isAlert: true,
  notificationText: 'This is notification text',
  timelineGreyed: false,
  actionDisabled: false,
  showStatus: false,
  showPreBookingCard: true,
};

export default busItineraryCardProps;
