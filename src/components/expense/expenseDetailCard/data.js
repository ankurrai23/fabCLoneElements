import {Color} from '../../../utils/color';

const expenseDetailCardProps = {
  data: {
    name: '25 kms driven',
    expenseDate: '23 March, 2022',
    amount: '₹460',
    remarks: 'Sales meet in gurgaon 3 locations',
    status: {
      type: 'APPROVED',
      text: 'Approved',
      color: Color.DARK_SEA_FOAM,
    },
    expenseIcon: 'https://picsum.photos/100',
    notes: 'Sales meet in gurgaon 4 locations',
    entitlementDetail: '4 wheeler | ₹12/km',
  },
};

export default expenseDetailCardProps;
