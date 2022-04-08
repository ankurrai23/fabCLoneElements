const expenseApprovalCardProps = {
  item: {
    date: '23 Mar',
    expenseIcon: 'https://picsum.photos/100',
    title: 'Domino Pizza',
    amount: '₹536',
    expenseType: 'food',
    outOfPolicy: true,
    viewReceipt: true,
  },
  onPress: () => console.log('view receipt'),
  _onPressCheckbox: () => console.log('check box'),
};

export default expenseApprovalCardProps;
