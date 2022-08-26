import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Color} from '../../utils/color/index.travelPlus';

//Svg files
import Reschedule from './reschedule.svg';
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
};

export default Icon;
