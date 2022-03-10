import * as data from './data';

import FText from './common/rn/FText';
import FImage from './common/rn/FImage';
import FSwitch from './common/rn/FSwitch';
import FTouchableOpacity from './common/rn/FTouchableOpacity';
import FWebView from './common/rn/FWebView';

import Button from './common/components/button';
import Separator from './common/components/separator';
import TextField from './common/components/textField';
import DashedLine from './common/components/dashedLine';
import PickerField from './common/components/pickerField';

import FlightPreferenceCard from './components/trips/flightPreferenceCard';
import HotelDetailCard from './components/trips/hotelDetailCard';
import TripStatus from './components/trips/tripStatus';
import FlightItineraryCard from './components/trips/flightItineraryCard';
import HotelItineraryCard from './components/trips/hotelItineraryCard';
import RemarksContainer from './components/trips/remarksContainer';
import CoTravellers from './components/trips/coTravellers';
import CoTravellerDetails from './components/trips/tripCreation/coTravelersDetails';
import EmptyScreen from './common/components/emptyScreen';
import ItineraryHeader from './components/trips/itineraryHeader';
import TripListingCard from './components/trips/tripListingCard';
import SubmittedTripCard from './components/trips/submittedTripCard';
import HotelPreferenceCard from './components/trips/hotelPreferenceCard';
import ManagerActions from './components/trips/managerActions';
import ReceivedTripCard from './components/trips/receivedTripCard';
import TripCardLoadingState from './components/trips/tripCardLoadingState';
import ItineraryViewLoadingState from './components/trips/itineraryViewLoadingState';
import ComingSoon from './components/trips/tripCreation/comingSoon';
import RequestType from './components/trips/tripCreation/requestType';
import BasicTravelDetails from './components/trips/tripCreation/basicTravelDetails';
import HotelDetails from './components/trips/tripCreation/hotelDetails';
import FlightDetails from './components/trips/tripCreation/flightDetails';
import OtherTravelDetails from './components/trips/tripCreation/otherTravelDetails';
import ApprovalManager from './components/trips/tripCreation/approvalManager';
import AddFlightDetails from './components/trips/tripCreation/addFlightDetails';
import AddHotelDetails from './components/trips/tripCreation/addHotelDetails';

export {
  data,
  //RN Components
  FText,
  FImage,
  FSwitch,
  FTouchableOpacity,
  FWebView,
  // Common Components
  Button,
  Separator,
  TextField,
  DashedLine,
  PickerField,
  // Trips components
  FlightPreferenceCard,
  HotelDetailCard,
  TripStatus,
  FlightItineraryCard,
  HotelItineraryCard,
  RemarksContainer,
  EmptyScreen,
  ItineraryHeader,
  TripListingCard,
  SubmittedTripCard,
  ReceivedTripCard,
  HotelPreferenceCard,
  ManagerActions,
  TripCardLoadingState,
  ItineraryViewLoadingState,
  CoTravellers,
  // Trip Creation
  ComingSoon,
  RequestType,
  BasicTravelDetails,
  HotelDetails,
  FlightDetails,
  OtherTravelDetails,
  CoTravellerDetails,
  ApprovalManager,
  AddFlightDetails,
  AddHotelDetails,
};
