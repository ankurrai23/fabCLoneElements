import {Color} from '../../../utils/color';

const itineraryHeaderProps = {
  onBackClick: () => console.log('Back Button pressed'),
  itinerary: 'Delhi to Mumbai',
  itineraryDates: 'Sun, 24 Nov - Thu 28 Nov',
  tripId: 'Trip ID: 12345',
  status: {
    type: 'IN_SHORTLISTING',
    text: 'Processed',
    color: Color.DARK_SEA_FOAM,
  },
  tripRequesterInfo: {
    requestedBy: 'Rohan Srivastava',
    department: 'B2B sales',
    designation: 'Area Manager',
  },
};

export default itineraryHeaderProps;
