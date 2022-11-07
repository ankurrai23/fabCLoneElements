import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Color} from '../../utils/color/index.travelPlus';

//Svg files
import PlusCircle from './plus-circle.svg';
import Phone from './phone.svg';
import Search from './search.svg';
import Camera from './camera.svg';
import Image from './image.svg';
import Upload from './upload.svg';
import RadioActive from './radio-active.svg';
import RadioPassive from './radio-passive.svg';
import Trash from './trash.svg';
import EditFilled from './edit-filled.svg';
import File from './file.svg';
import CreditCard from './credit-card.svg';
import ZooomIn from './zoom-in.svg';
import Navigation from './navigation.svg';
import Filter from './filter.svg';
import Sort from './sort.svg';
import EditWithBlueBackground from './edit-with-blue-background.svg';
import Bell from './bell.svg';
import FlightItineraryGreyed from './flight-itinerary-greyed.svg';
import BusItineraryGreyed from './bus-itinerary-greyed.svg';
import CabItineraryGreyed from './cab-itinerary-greyed.svg';
import TrainItineraryGreyed from './train-itinerary-greyed.svg';
import HotelItineraryGreyed from './hotel-itinerary-greyed.svg';
import FlightItinerary from './flight-itinerary.svg';
import BusItinerary from './bus-itinerary.svg';
import CabItinerary from './cab-itinerary.svg';
import TrainItinerary from './train-itinerary.svg';
import HotelItinerary from './hotel-itinerary.svg';
import Briefcase from './briefcase.svg';
import Rupee from './rupee.svg';
import Approve from './approve.svg';
import Reject from './reject.svg';
import Person from './personIcon.svg';
import PhoneIcon from './phoneIcon.svg';

const ChevronLeft = ({width, height, size, stroke, strokeWidth, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m15 18-6-6 6-6"
      stroke={stroke ?? Color.DARK}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronRight = ({width, height, stroke, strokeWidth, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m9 18 6-6-6-6"
      stroke={stroke ?? Color.DARK}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Cross = ({width, height, stroke, strokeWidth, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18 6L6 18"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 6L18 18"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Check = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20 6L9 17L4 12"
      stroke={stroke ?? Color.DARK}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Calendar = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 2V6"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 2V6"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 10H21"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronDown = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6 9L12 15L18 9"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Plus = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 5V19"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 12H19"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Aeroplane = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.3577 15.4093C20.6782 15.5045 21 15.2643 21 14.93V14.0846C21 13.9082 20.907 13.7448 20.7553 13.6547L13.6658 9.44531C13.5141 9.35522 13.4211 9.19183 13.4211 9.01538V4.35C13.4211 3.603 12.7863 3 12 3C11.2137 3 10.5789 3.603 10.5789 4.35V9.01538C10.5789 9.19183 10.4859 9.35522 10.3342 9.44531L3.24473 13.6547C3.09301 13.7448 3 13.9082 3 14.0846V14.93C3 15.2643 3.32179 15.5045 3.6423 15.4093L9.93665 13.5407C10.2572 13.4455 10.5789 13.6857 10.5789 14.02V18.0423C10.5789 18.204 10.5008 18.3557 10.3691 18.4495L8.89407 19.5005C8.76239 19.5943 8.68421 19.746 8.68421 19.9077V20.3462C8.68421 20.6756 8.99725 20.915 9.31519 20.8287L11.869 20.1356C11.9548 20.1123 12.0452 20.1123 12.131 20.1356L14.6848 20.8287C15.0027 20.915 15.3158 20.6756 15.3158 20.3462V19.9077C15.3158 19.746 15.2376 19.5943 15.1059 19.5005L13.6309 18.4495C13.4992 18.3557 13.4211 18.204 13.4211 18.0423V14.02C13.4211 13.6857 13.7428 13.4455 14.0634 13.5407L20.3577 15.4093Z"
      fill={fill ?? '#101217'}
    />
  </Svg>
);

const CheckCircle = ({stroke, ...props}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3745C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69278 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 4L12 14.01L9 11.01"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Info = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16V12"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8H12.01"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const User = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke={stroke ?? '#101217'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Hotel = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.30953 13.1994C8.66771 13.1994 9.76407 12.1274 9.76407 10.7994C9.76407 9.47141 8.66771 8.39941 7.30953 8.39941C5.95134 8.39941 4.85498 9.47141 4.85498 10.7994C4.85498 12.1274 5.95134 13.1994 7.30953 13.1994Z"
      fill={fill ?? '#101217'}
    />
    <Path
      d="M17.1272 7.6H10.9817C10.7608 7.6 10.5817 7.77909 10.5817 8V13.6C10.5817 13.8209 10.4026 14 10.1817 14H4.43627C4.21535 14 4.03627 13.8209 4.03627 13.6V6.4C4.03627 6.17909 3.85718 6 3.63627 6H2.7999C2.57899 6 2.3999 6.17909 2.3999 6.4V17.6C2.3999 17.8209 2.57899 18 2.7999 18H3.63627C3.85718 18 4.03627 17.8209 4.03627 17.6V16C4.03627 15.7791 4.21535 15.6 4.43627 15.6H18.3635C18.5845 15.6 18.7635 15.7791 18.7635 16V17.6C18.7635 17.8209 18.9426 18 19.1635 18H19.9999C20.2208 18 20.3999 17.8209 20.3999 17.6V10.8C20.3999 9.032 18.9354 7.6 17.1272 7.6Z"
      fill={fill ?? '#101217'}
    />
  </Svg>
);

const Reschedule = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.1376 14.8948C20.5346 17.0013 19.207 18.8467 17.3809 20.1167C15.5549 21.3866 13.3434 22.0025 11.1233 21.8594C8.90317 21.7162 6.81181 20.8229 5.20555 19.3317C3.59928 17.8404 2.57749 15.8435 2.31427 13.6811C2.05105 11.5188 2.56269 9.32476 3.76201 7.47295C4.96133 5.62114 6.77413 4.2261 8.89153 3.52552C11.0089 2.82495 13.2999 2.8622 15.3741 3.63091C17.4484 4.39962 19.1775 5.85224 20.2669 7.74126"
      stroke={stroke ?? '#009AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path
      d="M22.1372 4.45535L20.834 9.0079L16.2012 7.78693"
      stroke={stroke ?? '#009AFF'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.0342 7.77246V12.7828L14.8977 15.2879"
      stroke={stroke ?? '#009AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

const RatingStar = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.9694 9.78187C20.8879 9.43957 20.6433 9.26842 20.3171 9.18284L15.0985 8.41266L12.7339 3.44927C12.4892 2.85024 11.5108 2.85024 11.2661 3.44927L8.90147 8.32709L3.76444 9.18284C3.43828 9.18284 3.19366 9.43957 3.03058 9.78187C2.94904 10.1242 3.03058 10.4665 3.2752 10.6376L7.02605 14.4885L6.12911 19.9654C6.04756 20.3077 6.21065 20.65 6.45527 20.8211C6.69989 20.9923 7.02605 21.0779 7.35221 20.9067L12 18.3394L16.6478 20.9067C16.8109 20.9067 16.8924 20.9067 17.0555 20.9067C17.2186 20.9067 17.3817 20.8211 17.5447 20.7356C17.7894 20.5644 17.9524 20.2221 17.8709 19.8798L16.974 14.403L20.7248 10.5521C20.9694 10.3809 21.051 10.0386 20.9694 9.78187Z"
      fill={fill ?? '#0E286A'}
    />
  </Svg>
);
const Cab = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.898 11.15c0-2.979-2.317-5.412-5.218-5.587V4.096c0-.603-.49-1.096-1.088-1.096H10.4c-.606 0-1.095.493-1.095 1.096v1.467c-2.924.153-5.247 2.601-5.247 5.586v1.633A3.132 3.132 0 0 0 3 15.125v1.883c0 .8.645 1.459 1.447 1.459h.327v1.467c0 .59.473 1.066 1.05 1.066h1.748c.577 0 1.05-.476 1.05-1.066v-1.467h6.697v1.467c0 .59.473 1.066 1.05 1.066h1.747a1.06 1.06 0 0 0 1.058-1.066v-1.467h.379c.795 0 1.447-.658 1.447-1.46v-1.882a3.11 3.11 0 0 0-1.102-2.389V11.15ZM6.825 16.417a1.131 1.131 0 0 1-1.605 0c-.45-.489-.44-1.174 0-1.618.412-.423 1.2-.423 1.605 0 .442.386.466 1.179 0 1.618Zm3.435-.053h3.472c.42 0 .75-.34.75-.756a.75.75 0 0 0-.75-.756H10.26a.755.755 0 0 0 0 1.512Zm-4.387-4.37c-.015.002-.3.034-.315.038v-.884c0-2.26 1.822-4.09 4.057-4.09h4.725c2.235 0 4.058 1.83 4.058 4.09v.884l-.015-.002c-.21-.03-.3-.043-.518-.043h-7.479c-4.412-.002-4.456-.002-4.499.005h-.001l-.013.002Zm11.302 4.408c.457.495 1.238.428 1.583 0a1.135 1.135 0 0 0-.36-1.845 1.14 1.14 0 0 0-1.223.25c-.426.367-.449 1.203 0 1.595Z"
      fill={fill ?? '#101217'}
    />
  </Svg>
);

const Train = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 12}
    height={height ?? 12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99143e-05 11.6047V12L12 11.9968V11.6047L9.35962 9.75142C10.1568 9.36049 10.7086 8.53965 10.7086 7.59676V2.39869C10.7086 1.07891 9.62786 0 8.30608 0H3.6951C2.37332 0 1.29277 1.07891 1.29277 2.39869V7.59676C1.29277 8.53533 1.84003 9.35076 2.63064 9.74509L0 11.6047L8.99143e-05 11.6047ZM8.10095 9.99543H3.90726L3.17703 10.5182H8.82974L8.10095 9.99543ZM3.59579 6.91219C3.97875 6.91219 4.28821 7.21553 4.28821 7.59044C4.28821 7.96507 3.97875 8.26868 3.59579 8.26868C3.21401 8.26868 2.90455 7.9651 2.90455 7.59044C2.90455 7.21556 3.21401 6.91219 3.59579 6.91219ZM8.404 6.91219C8.78672 6.91219 9.09617 7.21553 9.09617 7.59044C9.09617 7.96507 8.78672 8.26868 8.404 8.26868C8.02221 8.26868 7.71275 7.9651 7.71275 7.59044C7.71275 7.21556 8.02221 6.91219 8.404 6.91219ZM4.70697 0.743011H7.29429C7.83298 0.743011 7.83298 1.55634 7.29429 1.55634H4.70697C4.16828 1.55634 4.16828 0.743011 4.70697 0.743011ZM3.18181 2.31456H8.82039C9.30178 2.31456 9.69553 2.70775 9.69553 3.18817V4.70893C9.69553 5.18959 9.30175 5.58275 8.82039 5.58275H3.18181C2.70042 5.58275 2.30666 5.18956 2.30666 4.70893V3.18817C2.30666 2.70763 2.70045 2.31456 3.18181 2.31456ZM9.46407 10.9729H2.54234L1.8458 11.4718L10.1562 11.4696L9.46404 10.9729L9.46407 10.9729Z"
      fill={fill ?? '#0E286A'}
    />
  </Svg>
);

const Bus = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 12}
    height={height ?? 12}
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.69613 0.668377H3.15183C3.15183 0.371328 3.18985 0 3.60752 0H8.39234C8.73416 0 8.8101 0.371306 8.8101 0.668377H9.2658C9.98735 0.668377 10.5569 1.2254 10.5569 1.93085V2.33934H10.9367C11.0886 2.33934 11.2404 2.37651 11.3164 2.48787C11.5063 2.63639 11.5063 2.8221 11.5063 3.00771H11.6203C11.8102 3.00771 12 3.19341 12 3.37901V4.82718C12 5.01289 11.8101 5.19849 11.6203 5.19849H11.5063C11.5063 5.38419 11.5063 5.5698 11.3164 5.71833C11.1265 5.94112 10.8227 5.86686 10.5569 5.86686V8.20628C10.5569 8.91182 10.0253 9.46876 9.34174 9.50592C9.34174 9.80297 9.37976 10.2857 8.92398 10.2857H8.12649C7.67079 10.2857 7.74675 9.80297 7.74675 9.50592H4.21522C4.21522 9.80297 4.29117 10.2857 3.83549 10.2857H3.03799C2.5823 10.2857 2.65826 9.80297 2.65826 9.50592C1.97472 9.46875 1.40507 8.91182 1.40507 8.20628V5.86686H1.02534C0.72155 5.86686 0.493702 5.64406 0.493702 5.34702V5.19849C0.341804 5.16131 0 5.12423 0 4.82718V3.37901C0 3.08196 0.30379 3.00771 0.493702 3.00771V2.85918C0.493702 2.71065 0.53172 2.56213 0.645599 2.48787C0.721548 2.37644 0.873447 2.33935 1.02533 2.33935H1.40506V1.93086C1.40506 1.22532 1.97473 0.668385 2.69619 0.668385L2.69613 0.668377ZM6.03798 1.89376V6.05262H9.15198C9.4938 6.05262 9.75957 5.75557 9.75957 5.45852V2.48781C9.75957 2.15358 9.49371 1.89371 9.15198 1.89371L6.03798 1.89376ZM5.92401 6.05262V1.89376H2.81001C2.50622 1.89376 2.20243 2.15371 2.20243 2.48785V5.45856C2.20243 5.75561 2.50622 6.05266 2.81001 6.05266L5.92401 6.05262ZM4.70885 7.6493H7.32922C7.40517 7.6493 7.40517 7.6493 7.40517 7.68647V7.72365C7.40517 7.79791 7.36715 7.83509 7.25327 7.83509H4.78488C4.70893 7.83509 4.63298 7.79791 4.63298 7.72365V7.68647C4.63298 7.6493 4.671 7.6493 4.70893 7.6493H4.70885ZM4.89877 7.94635H7.13929C7.17731 7.94635 7.21524 7.94635 7.21524 7.98352V8.0207C7.21524 8.09496 7.13929 8.13214 7.06334 8.13214H4.97473C4.89878 8.13214 4.86076 8.09496 4.86076 8.0207V7.98352C4.86076 7.94635 4.86076 7.94635 4.89878 7.94635H4.89877ZM5.12662 8.2434H6.94947C6.98749 8.2434 7.02542 8.2434 7.02542 8.28057V8.31775C7.02542 8.39201 6.94947 8.42918 6.91145 8.42918H5.16465C5.08871 8.42918 5.05069 8.39201 5.05069 8.31775V8.28057C5.05069 8.2434 5.08871 8.2434 5.12664 8.2434H5.12662ZM2.7341 7.57502H3.68349C4.06323 7.57502 4.36704 7.98351 4.36704 8.28056C4.36704 8.42908 4.21514 8.57761 4.02522 8.57761H2.7341C2.5822 8.57761 2.43031 8.42908 2.43031 8.28056V7.87207C2.43031 7.72354 2.5822 7.57502 2.7341 7.57502ZM9.22789 7.57502H8.31652C7.89876 7.57502 7.59497 7.98351 7.59497 8.28056C7.59497 8.42908 7.74686 8.57761 7.93679 8.57761H9.22791C9.41783 8.57761 9.56973 8.42908 9.56973 8.28056V7.87207C9.56973 7.72354 9.41783 7.57502 9.22791 7.57502H9.22789ZM1.40494 5.49557V2.71078H1.02521C0.949263 2.71078 0.873314 2.74795 0.873314 2.8593V3.00783C1.02521 3.04501 1.1771 3.19353 1.1771 3.37914V4.82731C1.1771 5.01301 1.02521 5.16154 0.873314 5.16154V5.34724C0.873314 5.4215 0.949263 5.49577 1.02521 5.49577H1.40494V5.49557ZM10.557 2.71078V5.49557H10.9368C11.0507 5.49557 11.1267 5.42131 11.1267 5.34704V5.16134C10.9368 5.16134 10.7849 5.01281 10.7849 4.82711V3.37894C10.7849 3.19324 10.9368 3.0447 11.1267 3.00763C11.1267 2.89619 11.1267 2.71058 10.9368 2.71058H10.557V2.71078Z"
      fill={fill ?? '#0E286A'}
    />
  </Svg>
);

const Icon = {
  Reschedule,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Cross,
  Check,
  Phone,
  Search,
  Camera,
  Image,
  Upload,
  RadioActive,
  RadioPassive,
  Calendar,
  ChevronDown,
  Trash,
  Plus,
  EditFilled,
  Aeroplane,
  File,
  CheckCircle,
  Info,
  User,
  CreditCard,
  ZooomIn,
  Navigation,
  Sort,
  Filter,
  EditWithBlueBackground,
  Bell,
  Hotel,
  FlightItinerary,
  BusItinerary,
  TrainItinerary,
  CabItinerary,
  FlightItineraryGreyed,
  BusItineraryGreyed,
  TrainItineraryGreyed,
  CabItineraryGreyed,
  HotelItinerary,
  HotelItineraryGreyed,
  Briefcase,
  Rupee,
  Approve,
  Reject,
  RatingStar,
  Person,
  PhoneIcon,
  Train,
  Cab,
  Bus,
};

export default Icon;
