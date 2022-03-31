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
import ClaimsCard from './common/components/claimsCard';
import DialogBox from './common/components/dialogBox';
import FloatingAction from './common/components/floatingActionButton';

import FlightPreferenceCard from './components/trips/flightPreferenceCard';
import HotelDetailCard from './components/trips/hotelDetailCard';
import TripStatus from './components/trips/tripStatus';
import FlightItineraryCard from './components/trips/flightItineraryCard';
import HotelItineraryCard from './components/trips/hotelItineraryCard';
import RemarksContainer from './components/trips/remarksContainer';
import CoTravellers from './components/trips/coTravellers';
import EmptyScreen from './common/components/emptyScreen';
import ItineraryHeader from './components/trips/itineraryHeader';
import TripListingCard from './components/trips/tripListingCard';
import SubmittedTripCard from './components/trips/submittedTripCard';
import HotelPreferenceCard from './components/trips/hotelPreferenceCard';
import ManagerActions from './components/trips/managerActions';
import ReceivedTripCard from './components/trips/receivedTripCard';
import TripCardLoadingState from './components/trips/tripCardLoadingState';
import ItineraryViewLoadingState from './components/trips/itineraryViewLoadingState';
import HotelPreferenceLoadingState from './components/trips/hotelPreferenceLoadingState';
import HotelDetailLoadingState from './components/trips/hotelDetailLoadingState';
import FlightPreferenceLoadingState from './components/trips/flightPreferenceLoadingState';
import ComingSoon from './components/trips/tripCreation/comingSoon';
import RequestType from './components/trips/tripCreation/requestType';
import BasicTravelDetails from './components/trips/tripCreation/basicTravelDetails';
import HotelDetails from './components/trips/tripCreation/hotelDetails';
import FlightDetails from './components/trips/tripCreation/flightDetails';
import OtherTravelDetails from './components/trips/tripCreation/otherTravelDetails';
import ApprovalManager from './components/trips/tripCreation/approvalManager';
import AddFlightDetails from './components/trips/tripCreation/addFlightDetails';
import AddHotelDetails from './components/trips/tripCreation/addHotelDetails';
import CoTravelersDetails from './components/trips/tripCreation/coTravelersDetails';
import {FlightSubTripActions} from './utils/SubTripActions';
import {HotelSubTripActions} from './utils/SubTripActions';

import FlightDetailCard from './components/trips/flightDetailCard';
import ModificationAlertBox from './components/trips/components/modificationAlertBox';
import ListTypeFilter from './components/trips/listTypeFilter';
import ContactSupport from './components/trips/components/contactSupport';
import FlightDetailLoadingState from './components/trips/flightDetailLoadingState';

import HomeHeader from './components/home/homeHeader';
import ClaimsList from './components/home/claimsList';
import HeaderView from './components/home/headerView';
import MessageCard from './components/home/messageCard';
import HomeLoadingState from './components/home/homeLoadingState';

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
  ModificationAlertBox,
  DialogBox,
  FloatingAction,
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
  HotelPreferenceLoadingState,
  HotelDetailLoadingState,
  FlightPreferenceLoadingState,
  CoTravellers,
  FlightDetailCard,
  ListTypeFilter,
  ContactSupport,
  FlightDetailLoadingState,
  // Trip Creation
  ComingSoon,
  RequestType,
  BasicTravelDetails,
  HotelDetails,
  FlightDetails,
  OtherTravelDetails,
  CoTravelersDetails,
  ApprovalManager,
  AddFlightDetails,
  AddHotelDetails,
  // constants
  FlightSubTripActions,
  HotelSubTripActions,
  // Home
  HomeHeader,
  ClaimsCard,
  ClaimsList,
  HeaderView,
  MessageCard,
  HomeLoadingState,
};
