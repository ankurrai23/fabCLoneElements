import {BusSubtripActions} from '../../../../utils/SubTripActions';

const busDetailCardProps = {
  bookingDetails: {
    busBookingStatus: 'CONFIRMED',
    date: '22',
    month: 'Nov',
    source: 'Mumbai',
    destination: 'Lonaval',
    sourceLocality: 'Mumbai Airport',
    destinationLocality: 'Tungarli road',
    departureTime: '18:30',
    arrivalTime: '22:30',
    estimateDuration: '1h 50min',
    busName: 'Dolphin Tour and Travels',
    busNumber: 'MH 12A 2345',
    busType: 'Sleeper',
    seatNumber: 'L23',
    pnr: '12344556',
    coordinatorName: 'Mr. Arvind Swami',
    coordinatorNo: '+91 9868567789',
    travellerDetails: [
      {
        travellerName: 'Sahil Malhan',
        seatNo: 'b1',
      },
      {
        travellerName: 'Vaibhav Agrawal',
        seatNo: 'c1',
      },
    ],
    reduceOpacity: false,
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
  onPhoneNumberClicked: () => console.log('phoneNumber clicked'),
  actionDisabled: false,
  notificationText: 'Some thing to notify',
};

export default busDetailCardProps;
