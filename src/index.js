import * as data from './data';

//RN Components
import FText from './common/rn/FText';
import FImage from './common/rn/FImage';
import FSwitch from './common/rn/FSwitch';
import FTouchableOpacity from './common/rn/FTouchableOpacity';
import FWebView from './common/rn/FWebView';

//Common Components
import Button from './common/components/button';
import Separator from './common/components/separator';
import TextField from './common/components/textField';
import DashedLine from './common/components/dashedLine';
import PickerField from './common/components/pickerField';
import ClaimsCard from './common/components/claimsCard';
import DialogBox from './common/components/dialogBox';
import FloatingAction from './common/components/floatingActionButton';
import Checkbox from './common/components/checkbox';
import EmptyScreen from './common/components/emptyScreen';
import StackHeader from './common/components/stackHeader';
import ScrollableTabBar from './common/components/scrollableTabBar';
import ContactSupport from './common/components/contactSupport';
import DropDown from './common/components/dropDown';
import FieldStates from './common/components/fieldStates';

//Trip Components - (Listing, Itinerary, Shortlisting, Details, Modification/Reschedule)
import FlightPreferenceCard from './components/trips/flightPreferenceCard';
import HotelDetailCard from './components/trips/hotelDetailCard';
import TripStatus from './components/trips/tripStatus';
import FlightItineraryCard from './components/trips/flightItineraryCard';
import BusItineraryCard from './components/trips/busItineraryCard';
import CabItineraryCard from './components/trips/cabItineraryCard';
import TrainItineraryCard from './components/trips/trainItineraryCard';

import HotelItineraryCard from './components/trips/hotelItineraryCard';
import RemarksContainer from './components/trips/remarksContainer';
import CoTravellers from './components/trips/coTravellers';
import ItineraryHeader from './components/trips/itineraryHeader';
import TripListingCard from './components/trips/tripListingCard';
import SubmittedTripCard from './components/trips/submittedTripCard';
import HotelPreferenceCard from './components/trips/hotelPreferenceCard';
import ManagerActions from './components/trips/managerActions';
import ReceivedTripCard from './components/trips/receivedTripCard';
import TripCardLoadingState from './components/trips/tripCardLoadingState';
import HotelPreferenceLoadingState from './components/trips/hotelPreferenceLoadingState';
import HotelDetailLoadingState from './components/trips/hotelDetailLoadingState';
import FlightPreferenceLoadingState from './components/trips/flightPreferenceLoadingState';
import FlightDetailCard from './components/trips/flightDetailCard';
import ModificationAlertBox from './components/trips/components/modificationAlertBox';
import ListTypeFilter from './components/trips/listTypeFilter';
import FlightDetailLoadingState from './components/trips/flightDetailLoadingState';

//Constants
import {
  FlightSubTripActions,
  TrainSubtripActions,
  BusSubtripActions,
  CabSubtripActions,
} from './utils/SubTripActions';
import {HotelSubTripActions} from './utils/SubTripActions';
import {FieldNamesEnum} from './components/tripCreation/itinerary/index';

//Trip Creation Components
import HotelDetails from './components/tripCreation/hotelDetails';
import FlightDetails from './components/tripCreation/flightDetails';
import OtherTravelDetails from './components/tripCreation/otherTravelDetails';
import ApprovalManager from './components/tripCreation/approvalManager';
import CoTravelersDetails from './components/tripCreation/coTravelersDetails';
import RemoveItinerary from './components/tripCreation/removeItinerary';
import ItineraryCard from './components/tripCreation/itinerary';

//Home Screen Components
import HomeHeader from './components/home/homeHeader';
import ClaimsList from './components/home/claimsList';
import MessageCard from './components/home/messageCard';
import HomeLoadingState from './components/home/homeLoadingState';

//Expense Components
import ExpenseCard from './components/expense/expenseCard';
import ExpenseDetailCard from './components/expense/expenseDetailCard';
import StopDetailList from './components/expense/stopsDetailList';
import ExpenseApprovalCard from './components/expense/expenseApprovalCard';
import ExpenseApprovalHeader from './components/expense/expenseApprovalHeader';
import LocationInputBox from './components/expense/locationInputBox';
import Swiper from './components/expense/swiper';
import MonthPicker from './components/expense/monthPicker';
import ClaimFilter from './components/expense/claimFilter';
import ReceiptsList from './components/expense/receiptsList';
import AddReceiptModal from './components/expense/addReceiptModal';
import ReceiptListView from './components/expense/receiptListView';
import Utils from './utils/Utils';

//Constants
import {FONT_TYPE} from './common/rn/FText';
import {BUTTON_TYPE} from './common/components/button';
import {CLAIM_CARD_TYPE} from './common/components/claimsCard';
import {EXPENSE_CLAIM_STATUS} from './components/expense/expenseCard';

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
  Checkbox,
  StackHeader,
  ScrollableTabBar,
  DropDown,
  ContactSupport,
  FieldStates,
  // Trips components
  FlightPreferenceCard,
  HotelDetailCard,
  TripStatus,
  FlightItineraryCard,
  BusItineraryCard,
  CabItineraryCard,
  TrainItineraryCard,
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
  HotelPreferenceLoadingState,
  HotelDetailLoadingState,
  FlightPreferenceLoadingState,
  CoTravellers,
  FlightDetailCard,
  ListTypeFilter,
  FlightDetailLoadingState,
  // Trip Creation
  HotelDetails,
  FlightDetails,
  OtherTravelDetails,
  CoTravelersDetails,
  ApprovalManager,
  RemoveItinerary,
  // constants
  FlightSubTripActions,
  TrainSubtripActions,
  BusSubtripActions,
  CabSubtripActions,
  HotelSubTripActions,
  FieldNamesEnum,
  // Home
  HomeHeader,
  ClaimsCard,
  ClaimsList,
  MessageCard,
  HomeLoadingState,
  ItineraryCard,
  //Expense,
  ExpenseCard,
  ExpenseDetailCard,
  StopDetailList,
  ExpenseApprovalCard,
  ExpenseApprovalHeader,
  LocationInputBox,
  Swiper,
  MonthPicker,
  ClaimFilter,
  ReceiptsList,
  AddReceiptModal,
  ReceiptListView,
  Utils,
  //Constants
  FONT_TYPE,
  BUTTON_TYPE,
  CLAIM_CARD_TYPE,
  EXPENSE_CLAIM_STATUS,
};
