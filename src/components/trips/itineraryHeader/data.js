import {Color} from '../../../utils/color';

const itineraryHeaderProps = {
  onBackClick: () => console.log('Back Button pressed'),
  itinerary: 'Delhi to Mumbai',
  itineraryDates: 'Sun, 24 Nov - Thu 28 Nov',
  tripId: 'Trip ID: 12345',
  // cancelledMessage: 'You cancelled this trip on 22 Jan 2022',
  status: {
    key: 'IN_SHORTLISTING',
    value: 'Processed',
    color: Color.DARK_SEA_FOAM,
  },
  tripRequesterInfo: {
    name: 'Rohan Srivastava',
    department: 'B2B sales',
    designation: 'Area Manager',
  },
  showApprovalStatus: true,
  approvalInfo: {
    primaryText: 'The trip is pending approval from',
    managerName: 'Manudeep Godara',
  },
  paymentDeadline: {
    key: '15 hours 49 mins',
    value: 'left to pay .Else approval shall be cancelled.',
  },
  onPressTrack: () => console.log('track pressed'),
};

export default itineraryHeaderProps;
