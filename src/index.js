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
import FloatingAction from './common/components/floatingActionButton';
import Checkbox from './common/components/checkbox';
import EmptyScreen from './common/components/emptyScreen';
import StackHeader from './common/components/stackHeader';
import ScrollableTabBar from './common/components/scrollableTabBar';
import ContactSupport from './common/components/contactSupport';
import DropDown from './common/components/dropDown';
import FieldStates from './common/components/fieldStates';
import ProgressBar from './common/components/progressBar';
import Selector from './common/components/selector';
import Slider from './common/components/slider';
import RangeSlider from './common/components/rangeSlider';
import LoadingPlaceholder from './common/components/placeholder';
import ReasonModal from './common/components/reasonModal';
import SupportDialog from './common/components/supportDialog';

//Trip Components - (Listing, Itinerary, Shortlisting, Details, Modification/Reschedule)
import FlightPreferenceCard from './components/trips/flightPreferenceCard';
import HotelDetailCard from './components/trips/detailCards/hotelDetailCard';
import TripStatus from './components/trips/tripStatus';
import FlightItineraryCard from './components/trips/itineraryCards/flightItineraryCard';
import BusItineraryCard from './components/trips/itineraryCards/busItineraryCard';
import CabItineraryCard from './components/trips/itineraryCards/cabItineraryCard';
import TrainItineraryCard from './components/trips/itineraryCards/trainItineraryCard';

import HotelItineraryCard from './components/trips/itineraryCards/hotelItineraryCard';
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
import HotelDetailLoadingState from './components/trips/detailCards/loadingStates/hotelDetailLoadingState';
import FlightPreferenceLoadingState from './components/trips/flightPreferenceLoadingState';
import FlightDetailCard from './components/trips/detailCards/flightDetailCard';
import BusDetailCard from './components/trips/detailCards/busDetailCard';
import TrainDetailCard from './components/trips/detailCards/trainDetailCard';
import CabDetailCard from './components/trips/detailCards/cabDetailCard';

import ModificationAlertBox from './components/trips/components/modificationAlertBox';
import ListTypeFilter from './components/trips/listTypeFilter';
import FlightDetailLoadingState from './components/trips/detailCards/loadingStates/flightDetailLoadingState';
import CabDetailLoadingState from './components/trips/detailCards/loadingStates/cabDetailLoadingState';
import BusDetailLoadingState from './components/trips/detailCards/loadingStates/busDetailLoadingState';
import TrainDetailLoadingState from './components/trips/detailCards/loadingStates/trainDetailLoadingState';
import ApproverChain from './components/trips/approverChain';
import EmployeeActions from './components/trips/employeeActions';
import PriceBreakupSheet from './components/trips/priceBreakupSheet';

import {InclusionSheet} from './components/trips/detailCards/hotelDetailCard';

//Constants
import {
  FlightSubTripActions,
  TrainSubtripActions,
  BusSubtripActions,
  CabSubtripActions,
} from './utils/SubTripActions';
import {HotelSubTripActions} from './utils/SubTripActions';

//Trip Creation Components
import RemoveItinerary from './components/tripCreation/removeItinerary';
import FlightFilter from './components/tripCreation/srp/filters/flightFilter';
import HotelFilter from './components/tripCreation/srp/filters/hotelFilter';
import FlightFarePlanCard from './components/tripCreation/srp/farePlans/flightFarePlan';
import HotelFarePlanCard from './components/tripCreation/srp/farePlans/hotelFarePlan';
import FlightSearchResultCard from './components/tripCreation/srp/flightSearchResultCard';
import HotelSearchResultCard from './components/tripCreation/srp/hotelSearchResultCard';
import SelectRoomSheet from './components/tripCreation/srp/selectRoomSheet';
import QuickLinks from './components/tripCreation/srp/filters/component';

//Home Screen Components
import HomeHeader from './components/home/homeHeader';
import ClaimsList from './components/home/claimsList';
import MessageCard from './components/home/messageCard';
import HomeLoadingState from './components/home/homeLoadingState';
import PendingPaymentSheet from './components/home/pendingPaymentSheet';
import PendingPaymentCarousel from './components/home/pendingPaymentCarousel';

//Expense Components
import ExpenseCard from './components/expense/expenseCard';
import ExpenseDetailCard from './components/expense/expenseDetailCard';
import StopsDetail from './components/expense/stopsDetail';
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
import MonthFilter from './components/expense/monthFilter';

//Constants
import {FONT_TYPE} from './common/rn/FText';
import {BUTTON_TYPE} from './common/components/button';
import {CLAIM_CARD_TYPE} from './common/components/claimsCard';
import {EXPENSE_CLAIM_STATUS} from './components/expense/expenseCard';
import {MANAGER_APPROVAL_STATUS} from './utils/Constants';

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
  FloatingAction,
  Checkbox,
  StackHeader,
  ScrollableTabBar,
  DropDown,
  ContactSupport,
  FieldStates,
  ProgressBar,
  Selector,
  Slider,
  RangeSlider,
  LoadingPlaceholder,
  ReasonModal,
  SupportDialog,
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
  BusDetailCard,
  TrainDetailCard,
  CabDetailCard,
  ListTypeFilter,
  FlightDetailLoadingState,
  CabDetailLoadingState,
  BusDetailLoadingState,
  TrainDetailLoadingState,
  ApproverChain,
  EmployeeActions,
  PriceBreakupSheet,
  InclusionSheet,
  // Trip Creation
  RemoveItinerary,
  FlightFilter,
  HotelFilter,
  FlightFarePlanCard,
  HotelFarePlanCard,
  FlightSearchResultCard,
  HotelSearchResultCard,
  SelectRoomSheet,
  QuickLinks,
  // constants
  FlightSubTripActions,
  TrainSubtripActions,
  BusSubtripActions,
  CabSubtripActions,
  HotelSubTripActions,
  // Home
  HomeHeader,
  ClaimsCard,
  ClaimsList,
  MessageCard,
  HomeLoadingState,
  PendingPaymentSheet,
  PendingPaymentCarousel,
  //Expense,
  ExpenseCard,
  ExpenseDetailCard,
  StopsDetail,
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
  MonthFilter,
  //Constants
  FONT_TYPE,
  BUTTON_TYPE,
  CLAIM_CARD_TYPE,
  EXPENSE_CLAIM_STATUS,
  MANAGER_APPROVAL_STATUS,
};
