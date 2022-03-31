import {Color} from '../../../utils/color/index.travelPlus';

const expenseCardProps = {
  title: 'Domino Pizza',
  expenseIcon: 'https://picsum.photos/100',
  date: `23 Dec`,
  amount: 4500,
  outOfPolicy: true,
  receiptRequired: false,
  viewReceipt: true,
  showStatus: true,
  status: {
    type: 'APPROVED',
    text: 'Approved',
    color: Color.DARK_SEA_FOAM,
  },
  showSeparator: true,
  onUploadReceipt: () => console.log('upload receipt button pressed'),
  onViewReceipt: () => console.log('open view receipt'),
  onPress: () => console.log('card pressed'),
};

export default expenseCardProps;
