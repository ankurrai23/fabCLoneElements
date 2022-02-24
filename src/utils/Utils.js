// import moment from 'moment';
import {Platform} from 'react-native';
import Config from './config';
import {DP} from './Dimen';
import {ImageConst} from './imageConst';

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
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 10,
};

export const dialogBoxStyle = {
  flexGrow: 0,
  maxHeight: DP.match_height / 2,
};

// export function formattedDate(date = new Date(), format = 'DD MMM YY') {
//   return moment(date).format(format);
// }

// export function formattedPrice(val) {
//   let price = Number(val);
//   if (isNaN(price)) {
//     return val;
//   }
//   price = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 2,
//   }).format(price);
//   return price;
// }

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

// export const EXPENSE_TYPE = [
//   {
//     type: 'Food',
//     asset: ImageConst.food,
//   },
//   {
//     type: 'Hotels',
//     asset: ImageConst.hotels,
//   },
//   {
//     type: 'Bills',
//     asset: ImageConst.bills,
//   },
//   {
//     type: 'Local travel',
//     asset: ImageConst.localTravel,
//   },
//   {
//     type: 'Outstation travel',
//     asset: ImageConst.outstationTravel,
//   },
//   {
//     type: 'Others',
//     asset: ImageConst.other,
//   },
// ];

// export function getExpenseTypeAsset(expenseType) {
//   switch (expenseType.toLowerCase()) {
//     case 'food':
//       return ImageConst.food;
//     case 'bills':
//       return ImageConst.bills;
//     case 'hotels':
//       return ImageConst.hotels;
//     case 'localtravel':
//       return ImageConst.localTravel;
//     case 'outstationtravel':
//       return ImageConst.outstationTravel;
//     default:
//       return ImageConst.other;
//   }
// }

export default {
  FontFamily,
  Specs,
  shadowObj,
  dialogBoxStyle,
  // formattedDate,
  // isEmpty,
  isPlatformIos,
  getPluralText,
};
