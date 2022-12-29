import {Color} from '../../../utils/color/index.travelPlus';

const employeeActionsProps = {
  info: {
    text: 'Flight is sold out. Please notify Nikhil',
    bgColor: Color.PASTEL_RED + '1a',
    iconColor: Color.PASTEL_RED,
  },
  onPayPress: () => console.log('pay pressed'),
  amount: 2334,
};

export default employeeActionsProps;
