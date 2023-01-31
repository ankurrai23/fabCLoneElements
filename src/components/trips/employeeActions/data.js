import {Color} from '../../../utils/color/index.travelPlus';

const employeeActionsProps = {
  msg: {
    value: 'Flight is sold out. Please notify Nikhil',
    type: 'INFO', // INFO/ERROR
  },
  onPayPress: () => console.log('pay pressed'),
  amount: 2334,
};

export default employeeActionsProps;
