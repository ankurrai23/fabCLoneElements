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
import HotelItineraryGreyed from './hotel-itinerary-greyed.svg';
import FlightItinerary from './flight-itinerary.svg';
import HotelItinerary from './hotel-itinerary.svg';
import Briefcase from './briefcase.svg';
import Rupee from './rupee.svg';
import Approve from './approve.svg';
import Reject from './reject.svg';

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
  FlightItineraryGreyed,
  HotelItinerary,
  HotelItineraryGreyed,
  Briefcase,
  Rupee,
  Approve,
  Reject,
  RatingStar,
};

export default Icon;
