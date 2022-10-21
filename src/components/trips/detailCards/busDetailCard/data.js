import {BusSubtripActions} from '../../../../utils/SubTripActions';

const busDetailCardProps = {
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
    CoordinatorName: 'Mr. Arvind Swami',
    CoordinatorNo: '+91 9868567789',
    travellersDetails: [
      {
        travellerName: 'Sahil Malhan',
        seatNo: 'b1',
      },
      {
        travellerName: 'Vaibhav Agrawal',
        seatNo: 'c1',
      },
    ],
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
  showStatus: true,
};

export default busDetailCardProps;
