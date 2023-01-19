import moment from 'moment';
import {Platform} from 'react-native';
import Config from './config';
import {DP} from './Dimen';
import percentToHexChart from './color/percent-to-hex-chart.json';
import {Color} from './color';
import {SUB_TRIP_TYPE} from './Constants';
import Icon from '../assets/icons/Icon';
import React, {useEffect, useState} from 'react';
import {Strings} from './strings/index.travelPlus';

export const FontFamily = Config.fontFamily || 'Metropolis';

export const Specs = {
  light: {
    fontFamily: `${FontFamily}-Light`,
  },
  regular: {
    fontFamily: `${FontFamily}-Regular`,
  },
  medium: {
    fontFamily: `${FontFamily}-Medium`,
  },
  semiBold: {
    fontFamily: `${FontFamily}-SemiBold`,
  },
  bold: {
    fontFamily: `${FontFamily}-Bold`,
  },
};

export const getSubTripIcon = (key) => {
  switch (key) {
    case SUB_TRIP_TYPE.BUS:
      return (
        <Icon.Bus
          fill={Color.DARK_SLATE_BLUE_TWO}
          width={DP._16}
          height={DP._16}
        />
      );
    case SUB_TRIP_TYPE.TRAIN:
      return (
        <Icon.Train
          fill={Color.DARK_SLATE_BLUE_TWO}
          width={DP._16}
          height={DP._16}
        />
      );
    case SUB_TRIP_TYPE.CAB:
      return (
        <Icon.Cab
          fill={Color.DARK_SLATE_BLUE_TWO}
          width={DP._16}
          height={DP._16}
        />
      );

    case SUB_TRIP_TYPE.HOTEL:
      return (
        <Icon.Hotel
          fill={Color.DARK_SLATE_BLUE_TWO}
          width={DP._16}
          height={DP._16}
        />
      );
    case SUB_TRIP_TYPE.FLIGHT:
      return (
        <Icon.Aeroplane
          fill={Color.DARK_SLATE_BLUE_TWO}
          width={DP._16}
          height={DP._16}
        />
      );
  }
};

export const shadowObj = {
  shadowColor: 'rgba(0,0,0,0.4)',
  shadowOffset: {width: 3, height: 3},
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 7,
};

export const cardStyleObj = {
  backgroundColor: Color.WHITE,
  borderWidth: DP._0_5,
  borderColor: Color.LIGHT_PERIWINKLE,
  borderRadius: DP._12,
};

export const dialogBoxStyle = {
  flexGrow: 0,
  maxHeight: DP.match_height / 2,
};

export function formattedDate(date = new Date(), format = 'DD MMM YY') {
  return moment(date).format(format);
}

export function formattedPrice(val, maxFractionDigit = 0) {
  let price = Number(val);
  if (isNaN(price)) {
    return val;
  }
  price = new Intl.NumberFormat('en-IN', {
    // style: 'currency', // enables ₹ symbol with a little right padding
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: maxFractionDigit,
  }).format(price);
  return Strings.rupee + price;
}

export function isEmpty(obj) {
  if (!obj) {
    return true;
  }

  switch (obj.constructor) {
    case Object:
      return Object.keys(obj).length === 0;
    case Array:
      return obj.length === 0;
    default:
      return false;
  }
}

export function isPlatformIos() {
  return Platform.OS === 'ios';
}

export function getPluralText(number, text, isCaps, isNumberPrefix) {
  return text
    ? (isNumberPrefix ? number + ' ' : '') +
        (number > 1 ? (isCaps ? `${text}S` : `${text}s`) : text)
    : '';
}

export const FontWeightSpec = {
  300: {
    fontFamily: `${FontFamily}-Light`,
  },
  400: {
    fontFamily: `${FontFamily}-Regular`,
  },
  500: {
    fontFamily: `${FontFamily}-Medium`,
  },
  600: {
    fontFamily: `${FontFamily}-SemiBold`,
  },
  700: {
    fontFamily: `${FontFamily}-Bold`,
  },
};

export function convertOpacityPercentIntoHex(percent) {
  if (percentToHexChart[percent]) {
    return percentToHexChart[percent];
  }
  throw Error('Invalid opacity percentage');
}

export const getStatusObject = (status) => {
  if (!status) return null;
  const capitalize = () => {
    return `${status[0]}${status.slice(1).toLowerCase()}`;
  };
  switch (status) {
    case 'CANCELLED':
      return {
        key: status,
        value: capitalize(),
        bgColor: Color.PASTEL_RED + '1a',
        textColor: Color.PASTEL_RED,
      };
    case 'NO_SHOW':
      return {
        key: status,
        value: 'No show',
        bgColor: Color.PASTEL_RED + '1a',
        textColor: Color.PASTEL_RED,
      };
    case 'TENTATIVE':
      return {
        key: status,
        value: capitalize(),
        bgColor: Color.MANGO + '1a',
        textColor: Color.MANGO,
      };
    default:
      return {
        key: status,
        value: capitalize(),
        bgColor: Color.DARK_SEA_FOAM + '1a',
        textColor: Color.DARK_SEA_FOAM,
      };
  }
};

export default {
  FontFamily,
  Specs,
  shadowObj,
  dialogBoxStyle,
  isEmpty,
  isPlatformIos,
};
