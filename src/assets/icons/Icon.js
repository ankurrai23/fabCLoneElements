import React from 'react';
import {Svg, Path, Line, Mask} from 'react-native-svg';
import {Color} from '../../utils/color/index.travelPlus';

//Svg files
import PlusCircle from './plus-circle.svg';
import Search from './search.svg';
import Camera from './camera.svg';
import Image from './image.svg';
import Upload from './upload.svg';
import RadioActive from './radio-active.svg';
import RadioPassive from './radio-passive.svg';
import EditFilled from './edit-filled.svg';
import File from './file.svg';
import CreditCard from './credit-card.svg';
import ZooomIn from './zoom-in.svg';
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
// import Person from './personIcon.svg';
// import PhoneIcon from './phoneIcon.svg';
import Edit from './edit.svg';
import PoweredByGoogle from './powered-by-google-logo.svg';
import Clock from './clock.svg';
import Meal from './meal.svg';
import Seat from './seat.svg';
import Baggage from './baggage.svg';

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

const Person = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 16}
    height={height ?? 16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.3346 14V12.6667C13.3346 11.9594 13.0537 11.2811 12.5536 10.781C12.0535 10.281 11.3752 10 10.668 10H5.33464C4.62739 10 3.94911 10.281 3.44902 10.781C2.94892 11.2811 2.66797 11.9594 2.66797 12.6667V14"
      stroke={stroke ?? 'black'}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M7.9987 7.33333C9.47146 7.33333 10.6654 6.13943 10.6654 4.66667C10.6654 3.19391 9.47146 2 7.9987 2C6.52594 2 5.33203 3.19391 5.33203 4.66667C5.33203 6.13943 6.52594 7.33333 7.9987 7.33333Z"
      stroke={stroke ?? 'black'}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const PhoneIcon = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 16}
    height={height ?? 16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.665 11.2793V13.2793C14.6657 13.4649 14.6277 13.6487 14.5533 13.8188C14.479 13.9889 14.3699 14.1416 14.233 14.2672C14.0962 14.3927 13.9347 14.4882 13.7588 14.5477C13.5829 14.6072 13.3966 14.6293 13.2117 14.6126C11.1602 14.3897 9.18966 13.6887 7.45833 12.5659C5.84755 11.5424 4.48189 10.1767 3.45833 8.56592C2.33165 6.82672 1.63049 4.84658 1.41166 2.78592C1.395 2.60156 1.41691 2.41576 1.47599 2.24033C1.53508 2.06491 1.63004 1.90371 1.75484 1.767C1.87964 1.63029 2.03153 1.52106 2.20086 1.44627C2.37018 1.37147 2.55322 1.33276 2.73833 1.33258H4.73833C5.06187 1.3294 5.37552 1.44397 5.62084 1.65494C5.86615 1.86591 6.02638 2.15888 6.07166 2.47925C6.15608 3.1193 6.31263 3.74774 6.53833 4.35258C6.62802 4.5912 6.64744 4.85053 6.59427 5.09984C6.5411 5.34915 6.41757 5.57799 6.23833 5.75925L5.39166 6.60592C6.3407 8.27495 7.72263 9.65688 9.39166 10.6059L10.2383 9.75925C10.4196 9.58001 10.6484 9.45648 10.8977 9.40331C11.1471 9.35014 11.4064 9.36956 11.645 9.45925C12.2498 9.68495 12.8783 9.8415 13.5183 9.92592C13.8422 9.9716 14.1379 10.1347 14.3494 10.3842C14.5608 10.6338 14.6731 10.9523 14.665 11.2793Z"
      stroke={stroke ?? Color.DARK}
      stroke-linecap="round"
      stroke-linejoin="round"
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

const Navigation = ({width, height, stroke, fill, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.6791 2.28815C21.3939 2.00384 21.0137 1.90907 20.6334 2.09861L2.57041 10.6278C2.19014 10.8173 2 11.1964 2 11.5755C2 11.9545 2.28521 12.3336 2.76055 12.4284L9.7956 14.229L11.6019 21.2419C11.697 21.6209 12.0772 21.9052 12.4575 22H12.5526C12.9329 22 13.2181 21.8105 13.4082 21.4314L21.9643 3.42537C22.0594 2.95153 21.9643 2.57245 21.6791 2.28815Z"
      fill={fill ?? Color.DODGER_BLUE}
    />
  </Svg>
);

const Phone = ({fill, ...props}) => (
  <Svg width={16} height={16} viewBox={'0 0 16 16'} fill="none" {...props}>
    <Path
      d="M16 14.098c0 .25-.083.417-.25.584-.167.167-1.402 1.318-1.735 1.318-2.42-.25-4.755-1.085-6.84-2.42-1.92-1.167-3.504-2.835-4.756-4.754C1.084 6.74.25 4.405 0 1.986 0 1.734 1.151.5 1.235.333 1.4.167 1.652 0 1.902 0h2.503c.417 0 .75.334.834.75.083.835.333 1.753.667 2.503.083.334 0 .668-.167.918L4.655 5.172a.887.887 0 0 0-.167 1.001 13.688 13.688 0 0 0 5.339 5.34c.334.166.75.166 1-.168l1.085-1.084c.25-.25.584-.334.918-.167.834.334 1.668.5 2.503.667.333.084.667.417.667.835v2.502Z"
      fill={fill ?? '#379AFF'}
    />
    <Mask
      id="a"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={16}
      height={16}>
      <Path
        d="M16 14.098c0 .25-.083.417-.25.584-.167.167-1.402 1.318-1.735 1.318-2.42-.25-4.755-1.085-6.84-2.42-1.92-1.167-3.504-2.835-4.756-4.754C1.084 6.74.25 4.405 0 1.986 0 1.734 1.151.5 1.235.333 1.4.167 1.652 0 1.902 0h2.503c.417 0 .75.334.834.75.083.835.333 1.753.667 2.503.083.334 0 .668-.167.918L4.655 5.172a.887.887 0 0 0-.167 1.001 13.688 13.688 0 0 0 5.339 5.34c.334.166.75.166 1-.168l1.085-1.084c.25-.25.584-.334.918-.167.834.334 1.668.5 2.503.667.333.084.667.417.667.835v2.502Z"
        fill="#fff"
      />
    </Mask>
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
      d="M12.0011 17.7851C10.4773 17.7851 8.96235 17.7851 7.43854 17.7851C7.27021 17.7851 7.22591 17.8335 7.23477 18.0174C7.24363 18.5885 7.23477 19.1596 7.23477 19.7404C7.23477 20.4373 6.85382 20.9115 6.22481 20.9793C5.9856 21.0083 5.73754 21.0083 5.49834 20.9696C4.96678 20.8825 4.58583 20.4082 4.57697 19.8178C4.57697 19.2564 4.57697 18.6853 4.57697 18.1239C4.57697 17.8045 4.57697 17.8045 4.27575 17.8045C4.09856 17.8045 3.91251 17.8045 3.73533 17.7464C3.30122 17.5915 3 17.1753 3 16.6817C3 15.0846 3 13.4972 3 11.9001C3 11.0967 3.64673 10.3708 4.38206 10.2934C4.54153 10.274 4.60354 10.2159 4.66556 10.0514C5.19712 8.66723 5.73754 7.28309 6.27796 5.88927C6.57032 5.14397 7.08416 4.76647 7.82835 4.76647C8.45736 4.76647 9.07752 4.76647 9.70653 4.76647C9.83942 4.76647 9.88372 4.72776 9.87486 4.58257C9.866 4.4277 9.866 4.27283 9.87486 4.11796C9.93688 3.46945 10.3444 3.03388 10.9557 3.01452C11.6467 2.99516 12.3378 2.99516 13.0377 3.01452C13.6932 3.03388 14.1185 3.52752 14.1274 4.24379C14.1274 4.40834 14.0565 4.63096 14.1628 4.72776C14.2602 4.81487 14.4551 4.75679 14.6146 4.75679C15.155 4.75679 15.7043 4.75679 16.2447 4.75679C16.9269 4.76647 17.423 5.12461 17.6888 5.81184C18.247 7.22502 18.7874 8.63819 19.3367 10.0514C19.3898 10.1869 19.4518 10.2546 19.5936 10.2643C20.3555 10.3417 20.9845 11.058 20.9934 11.8904C21.0022 13.4778 21.0022 15.0652 20.9934 16.6527C20.9934 17.2528 20.5681 17.7174 20.0188 17.7658C19.8859 17.7755 19.7442 17.7851 19.6202 17.7658C19.443 17.7464 19.4164 17.8238 19.4164 17.9981C19.4252 18.5692 19.4164 19.1402 19.4164 19.721C19.4164 20.4179 19.0266 20.8922 18.3976 20.9503C18.1584 20.9696 17.9103 20.9793 17.6711 20.9406C17.1484 20.8535 16.7586 20.3889 16.7586 19.8081C16.7586 19.1983 16.7586 18.5885 16.7586 17.9787C16.7586 17.8142 16.7231 17.7658 16.5725 17.7755C15.0487 17.7755 13.5161 17.7755 11.9922 17.7755L12.0011 17.7851Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M18.2634 10.2408H5.74512C5.91344 9.81491 6.07291 9.3987 6.23238 8.98249C6.56018 8.12103 6.89683 7.25957 7.22463 6.39811C7.36638 6.02062 7.50813 5.92383 7.88908 5.92383C10.6178 5.92383 13.3464 5.92383 16.0751 5.92383C16.4118 5.92383 16.6155 6.06902 16.7484 6.41747C17.218 7.63706 17.7141 8.85666 18.2014 10.0762C18.2191 10.1246 18.2368 10.1827 18.2634 10.2505V10.2408Z"
      fill="white"
    />
    <Path
      d="M18.077 13.7171C17.829 13.7171 17.5809 13.7171 17.3329 13.7171C16.9962 13.7171 16.7924 13.5041 16.7747 13.1363C16.7659 12.9427 16.7659 12.7588 16.7747 12.5652C16.7924 12.2264 17.0051 11.9941 17.324 11.9941C17.8378 11.9941 18.3428 11.9941 18.8567 11.9941C19.1756 11.9941 19.3882 12.2071 19.4148 12.5555C19.4325 12.7782 19.4414 13.0105 19.4059 13.2331C19.3616 13.5235 19.1756 13.6977 18.9098 13.7074C18.8921 13.7074 18.8832 13.7074 18.8655 13.7074C18.5997 13.7074 18.3428 13.7074 18.077 13.7074V13.7171Z"
      fill="white"
    />
    <Path
      d="M5.91432 13.7234C5.64854 13.7234 5.39162 13.7234 5.12584 13.7234C4.83348 13.7234 4.62971 13.5298 4.60313 13.2104C4.58541 12.9878 4.58541 12.7555 4.60313 12.5328C4.62971 12.2134 4.83348 12.0102 5.12584 12.0102C5.64854 12.0102 6.17124 12.0005 6.69394 12.0102C7.00402 12.0102 7.20778 12.2521 7.2255 12.6006C7.23436 12.7845 7.23436 12.9684 7.2255 13.1523C7.20778 13.5201 7.00402 13.7331 6.66736 13.7331C6.41044 13.7331 6.15352 13.7331 5.90546 13.7331L5.91432 13.7234Z"
      fill="white"
    />
  </Svg>
);

const Bus = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.3532 20.9922C16.1205 20.9922 15.8805 20.9922 15.6478 20.9922C15.1023 20.9771 14.7314 20.5378 14.7241 19.8939C14.7241 19.3637 14.7241 19.3712 15.1605 19.3106C16.0114 19.1894 16.8696 19.0607 17.7059 18.8334C17.9168 18.7728 18.0478 18.788 18.0114 19.1213C17.9823 19.3788 18.0114 19.6439 18.0114 19.9015C17.9968 20.5529 17.6259 20.9847 17.0805 20.9998C16.8332 20.9998 16.5932 20.9998 16.3459 20.9998L16.3532 20.9922Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M7.61913 20.9927C7.37185 20.9927 7.13185 21.0002 6.88458 20.9927C6.38276 20.9699 6.01913 20.5457 5.99731 19.9473C5.98276 19.6368 6.00458 19.3186 5.99731 19.0081C5.99004 18.796 6.07004 18.7884 6.20095 18.8187C7.03004 19.0384 7.88095 19.1671 8.72458 19.2959C8.73913 19.2959 8.76095 19.2959 8.77549 19.3035C8.94276 19.3262 9.20458 19.2505 9.26276 19.4095C9.35004 19.6368 9.32095 19.9398 9.26276 20.2049C9.15367 20.6745 8.83367 20.9699 8.41913 20.9851C8.15731 20.9927 7.89549 20.9851 7.63367 20.9851L7.61913 20.9927Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M21.1018 6.53448C20.4618 6.53448 19.8291 6.53448 19.1891 6.53448C19.0218 6.53448 18.9636 6.50419 18.9709 6.31482C18.9855 5.73913 18.9709 5.17103 18.9709 4.59534C18.9709 4.46657 18.9564 4.39082 18.8182 4.33022C17.0655 3.5879 15.2473 3.17128 13.3564 3.04251C11.8945 2.93647 10.4473 3.03494 9.00727 3.26976C7.72 3.48185 6.46182 3.82271 5.23273 4.3075C5.08 4.3681 5.02909 4.45142 5.02909 4.62564C5.04364 5.18617 5.02909 5.75428 5.03636 6.31482C5.03636 6.49661 4.98545 6.54206 4.81818 6.53448C4.17818 6.52691 3.54545 6.53448 2.90545 6.53448C2.39636 6.53448 2.01818 6.90565 2.01091 7.42831C1.99636 8.30698 1.99636 9.19323 2.01091 10.0719C2.01091 10.5567 2.33818 10.9051 2.79636 10.9657C2.99273 10.996 3.19636 10.9885 3.39273 10.9657C3.82182 10.8976 4.12727 10.5415 4.13455 10.0871C4.13455 9.82951 4.13455 9.57955 4.13455 9.322C4.13455 8.70845 4.13455 8.7236 4.73091 8.70845C4.97091 8.70087 5.02909 8.77662 5.02909 9.01901C5.02182 12.0565 5.02909 15.0864 5.02909 18.1239C5.02909 18.5329 5.09455 18.6238 5.48 18.7223C7.22545 19.1692 9 19.3965 10.8036 19.4722C13.4145 19.5858 15.9891 19.3359 18.5273 18.7072C18.8982 18.6163 18.9709 18.5178 18.9709 18.1239C18.9709 16.6165 18.9709 15.1091 18.9709 13.6018C18.9709 12.208 18.9709 10.8218 18.9709 9.42805C18.9709 9.19323 18.8691 8.87509 19.0145 8.75389C19.1527 8.6327 19.4436 8.7236 19.6691 8.70845C19.8218 8.6933 19.8582 8.75389 19.8582 8.90539C19.8509 9.29928 19.8509 9.68559 19.8582 10.0795C19.8655 10.534 20.1709 10.89 20.6 10.9657C20.7964 10.996 21 11.0036 21.1964 10.9733C21.6618 10.9127 21.9818 10.5643 21.9891 10.0795C22.0036 9.20081 22.0036 8.31456 21.9891 7.43588C21.9818 6.90565 21.5964 6.54206 21.0945 6.54206L21.1018 6.53448ZM17.2036 14.0562C15.4727 14.5259 13.7127 14.7152 11.9236 14.6849C10.2145 14.6622 8.52 14.4501 6.84727 14.0638C6.61455 14.0108 6.52727 13.935 6.53455 13.6623C6.55636 12.5564 6.54182 11.4429 6.54182 10.337C6.54182 9.2311 6.54182 8.11761 6.54182 7.0117C6.54182 6.54963 6.67273 6.40571 7.11636 6.40571C10.3673 6.40571 13.6255 6.40571 16.8764 6.40571C17.3127 6.40571 17.4509 6.55721 17.4509 7.00412C17.4509 9.23868 17.4509 11.4732 17.4509 13.7078C17.4509 13.9275 17.3782 13.9956 17.1964 14.0487L17.2036 14.0562Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M7.06375 17.7801C6.45284 17.7801 5.98011 17.2726 5.98739 16.6363C5.98739 16.0151 6.47466 15.5228 7.08557 15.5304C7.68921 15.5304 8.18375 16.0454 8.1692 16.6514C8.16193 17.2801 7.66739 17.7876 7.06375 17.7801Z"
      fill="white"
    />
    <Path
      d="M16.9242 17.7801C16.2988 17.7801 15.8188 17.2726 15.8333 16.6439C15.8406 16.0076 16.3279 15.5228 16.9533 15.5304C17.5497 15.5379 18.0151 16.0454 18.0079 16.6817C18.0079 17.2953 17.5206 17.7876 16.9242 17.7801Z"
      fill="white"
    />
  </Svg>
);

const Train = ({width, height, fill, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M5.28368 22.0002C4.94281 21.761 4.91441 21.5505 5.17006 21.2156C6.01276 20.1535 6.85546 19.0819 7.69816 18.0198C7.73604 17.9719 7.76444 17.9241 7.84019 17.8284C7.52773 17.8284 7.25314 17.838 6.98802 17.8284C5.93701 17.7614 5.07537 16.8525 5.09431 15.7904C5.10378 14.958 5.17006 14.1255 5.2174 13.2931C5.26474 12.3937 5.31209 11.5038 5.3689 10.6044C5.37837 10.3556 5.37836 10.3556 5.61508 10.413C6.49565 10.614 7.28155 11.035 8.03903 11.5134C9.31728 12.3171 10.4819 13.2548 11.5992 14.269C11.9306 14.5657 12.0821 14.5657 12.404 14.269C13.6728 13.1209 15.0079 12.0492 16.4944 11.1976C17.1194 10.8341 17.7727 10.5374 18.4828 10.3939C18.6059 10.3748 18.6249 10.3939 18.6343 10.5087C18.6722 11.2838 18.7101 12.0684 18.7574 12.8434C18.8048 13.6854 18.8426 14.5274 18.8995 15.379C18.9752 16.4219 18.5586 17.2448 17.7159 17.6466C17.4129 17.7902 17.091 17.838 16.7596 17.838C16.5702 17.838 16.3903 17.838 16.163 17.838C16.3145 18.0294 16.4376 18.192 16.5702 18.3642C17.3182 19.3115 18.0662 20.2492 18.8142 21.1964C19.0888 21.5409 19.0604 21.7514 18.7196 22.0002H18.445C18.2556 21.9523 18.1514 21.7992 18.0378 21.6557C17.6401 21.1677 17.8011 21.2347 17.1762 21.2347C13.6634 21.2347 10.1505 21.2347 6.63768 21.2347C6.38203 21.2347 6.20213 21.3113 6.05064 21.5218C5.91808 21.7131 5.79498 21.9332 5.53933 22.0002H5.26475H5.28368Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M5.55928 21.9955C5.81493 21.8042 5.97589 21.5267 6.17473 21.2875C6.24101 21.2014 6.30729 21.1631 6.41145 21.1631C10.1421 21.1631 13.8727 21.1631 17.5938 21.1631C17.698 21.1631 17.7642 21.2014 17.8305 21.2875C18.0294 21.5267 18.1903 21.8042 18.446 21.9955H5.5498H5.55928Z"
      fill="white"
    />
    <Path
      d="M12.0175 2.00957C13.1537 2.00957 14.2805 2.00957 15.4167 2.00957C16.8749 2.00957 18.0774 3.03337 18.2857 4.47817C18.3804 5.10967 18.3804 5.76031 18.4182 6.40138C18.4751 7.35821 18.5224 8.3246 18.5792 9.28142C18.5887 9.48235 18.5413 9.54933 18.3425 9.5876C17.5471 9.73113 16.8181 10.0756 16.1174 10.4774C14.6876 11.2907 13.3904 12.2954 12.169 13.3862C12.0459 13.4914 11.9891 13.501 11.866 13.3862C10.5025 12.171 9.07278 11.0611 7.44419 10.2191C6.85714 9.91292 6.24168 9.66415 5.58835 9.5589C5.47473 9.53976 5.44633 9.48235 5.45579 9.3771C5.50314 8.55423 5.54101 7.73137 5.58835 6.89893C5.62623 6.277 5.67357 5.65506 5.69251 5.03313C5.72091 4.09544 6.01444 3.29171 6.73405 2.67934C7.24535 2.23921 7.84187 2 8.51414 2C9.68824 2 10.8529 2 12.027 2L12.0175 2.00957Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M6.94971 20.3151C7.15802 20.0568 7.35686 19.8176 7.53676 19.5688C7.60304 19.4827 7.68825 19.5018 7.764 19.5018C10.3679 19.5018 12.9622 19.5018 15.5661 19.5018C15.7744 19.5018 15.9922 19.5114 16.2005 19.5018C16.3614 19.4922 16.4561 19.5497 16.5508 19.674C16.7023 19.8845 16.8727 20.0855 17.0526 20.3151H6.94971Z"
      fill="white"
    />
    <Path
      d="M15.7466 18.651H8.27588C8.49366 18.3735 8.6925 18.1247 8.89134 17.876C8.92921 17.8281 8.99549 17.8377 9.0523 17.8377C11.0312 17.8377 13.0007 17.8377 14.9796 17.8377C15.0554 17.8377 15.1122 17.8377 15.169 17.9047C15.3584 18.1439 15.5383 18.3831 15.756 18.651H15.7466Z"
      fill="white"
    />
    <Path
      d="M7.89608 16.1637C7.22381 16.1637 6.67463 15.6279 6.66516 14.939C6.65569 14.2596 7.1954 13.6951 7.86767 13.6855C8.54941 13.6855 9.10805 14.2214 9.10805 14.9007C9.10805 15.5992 8.57781 16.1541 7.88661 16.1637H7.89608Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M17.3573 14.9198C17.3573 15.6088 16.7987 16.1733 16.117 16.1637C15.4352 16.1637 14.8955 15.6088 14.8955 14.9198C14.8955 14.2405 15.4447 13.6855 16.1264 13.6855C16.7987 13.6855 17.3479 14.2405 17.3479 14.9198H17.3573Z"
      fill={fill ?? '#0E286A'}
    />
    <Path
      d="M11.5888 7.2247C11.5888 7.68398 11.5888 8.14325 11.5888 8.6121C11.5888 8.90871 11.4751 9.05223 11.1721 9.09051C10.2632 9.19576 9.36365 9.30101 8.45467 9.39669C8.17062 9.4254 7.89603 9.4541 7.61197 9.49237C7.29951 9.54021 7.07227 9.37755 7.07227 9.05223C7.07227 8.10498 7.07227 7.15773 7.07227 6.2009C7.07227 5.94256 7.22377 5.78947 7.46995 5.76077C8.42627 5.65551 9.3826 5.55026 10.3389 5.44501C10.5851 5.41631 10.8408 5.37804 11.0869 5.36847C11.4278 5.33976 11.5888 5.50242 11.5888 5.84688C11.5888 6.30615 11.5888 6.76543 11.5888 7.23427V7.2247Z"
      fill="white"
    />
    <Path
      d="M16.9474 7.63821C16.9474 8.07835 16.9474 8.51849 16.9474 8.9682C16.9474 9.37963 16.758 9.53272 16.3508 9.48488C15.3661 9.37006 14.3814 9.26481 13.4061 9.15956C13.1978 9.14042 12.999 9.11172 12.7907 9.08301C12.5539 9.04474 12.4309 8.90122 12.4214 8.66201C12.4214 7.70519 12.4214 6.74837 12.4214 5.79154C12.4214 5.49493 12.6013 5.34184 12.9138 5.36097C13.3398 5.39925 13.7659 5.44709 14.2015 5.49493C14.959 5.58104 15.7164 5.66716 16.4834 5.75327C16.7959 5.79154 16.9474 5.93507 16.9474 6.25082C16.9474 6.71009 16.9474 7.16937 16.9474 7.63821Z"
      fill="white"
    />
  </Svg>
);

const Filter = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Line
      x1={3.75}
      y1={5.42676}
      x2={13.5}
      y2={5.42676}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={16.125}
      y1={5.42676}
      x2={20.25}
      y2={5.42676}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={16.125}
      y1={3.75}
      x2={16.125}
      y2={7.54412}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={3.75}
      y1={18.1328}
      x2={13.5}
      y2={18.1328}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={16.125}
      y1={18.1333}
      x2={20.25}
      y2={18.1333}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={16.125}
      y1={16.4561}
      x2={16.125}
      y2={20.2502}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={20.25}
      y1={12.2212}
      x2={10.5}
      y2={12.2212}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={7.875}
      y1={12.2207}
      x2={3.75}
      y2={12.2207}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Line
      x1={7.875}
      y1={13.897}
      x2={7.875}
      y2={10.1029}
      stroke={stroke ?? '#379AFF'}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

const Trash = ({width, height, stroke, strokeWidth, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3 6H5H21"
      stroke="#D65656"
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
      stroke="#D65656"
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 11V17"
      stroke="#D65656"
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 11V17"
      stroke="#D65656"
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Minus = ({width, height, stroke, strokeWidth, ...props}) => (
  <Svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5 12H19"
      stroke={stroke ?? '#379AFF'}
      strokeWidth={strokeWidth ?? 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Refund = ({width, height, stroke, ...props}) => (
  <Svg
    width={width ?? 16}
    height={width ?? 18}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.0921 10.93C13.6901 12.3344 12.805 13.5647 11.5876 14.4113C10.3702 15.2579 8.89591 15.6685 7.41584 15.5731C5.93577 15.4777 4.54154 14.8821 3.47069 13.8879C2.39985 12.8938 1.71865 11.5625 1.54317 10.1209C1.36769 8.67933 1.70878 7.21667 2.50833 5.98213C3.30788 4.74759 4.51642 3.81756 5.92802 3.35051C7.33961 2.88347 8.86694 2.90829 10.2498 3.42077C11.6326 3.93324 12.7853 4.90166 13.5116 6.161"
      stroke={stroke ?? '#379AFF'}
      strokeLinecap="round"
    />
    <Path
      d="M14.7585 3.97072L13.8896 7.00576L10.8011 6.19177"
      stroke={stroke ?? '#379AFF'}
      strokeLinecap="round"
      strokeLinejoin="round"
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
  Edit,
  Minus,
  Refund,
  PoweredByGoogle,
  Clock,
  Meal,
  Seat,
  Baggage,
};

export default Icon;
