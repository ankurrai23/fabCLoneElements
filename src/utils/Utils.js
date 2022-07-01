import moment from 'moment';
import {Platform} from 'react-native';
import Config from './config';
import {DP} from './Dimen';
import percentToHexChart from './color/percent-to-hex-chart.json';
import {Color} from './color';

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

export function formattedPrice(val) {
  let price = Number(val);
  if (isNaN(price)) {
    return val;
  }
  price = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
  return price;
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

export const FontWegithSpec = {
  normal: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  semiBold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: '700',
  },
};

export function convertOpacityPercentIntoHex(percent) {
  if (percentToHexChart[percent]) {
    return percentToHexChart[percent];
  }
  throw Error('Invalid opacity percentage');
}

export default {
  FontFamily,
  Specs,
  shadowObj,
  dialogBoxStyle,
  formattedDate,
  isEmpty,
  isPlatformIos,
  getPluralText,
  convertOpacityPercentIntoHex,
};
