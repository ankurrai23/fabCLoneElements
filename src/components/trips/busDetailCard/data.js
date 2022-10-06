import {BusSubtripActions} from '../../../utils/SubTripActions';

const trainItineraryCardProps = {
  title: 'Itinerary 1',
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
    bookingStatus: 'Confirmed',
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
