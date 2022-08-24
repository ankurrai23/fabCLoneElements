import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Color} from '../../utils/color/index.travelPlus';

//Svg files
import Reschedule from './reschedule.svg';
import PlusCircle from './plus-circle.svg';
import Phone from './phone.svg';
import Search from './search.svg';

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

const Icon = {
  Reschedule,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Cross,
  Check,
  Phone,
  Search,
};

export default Icon;
