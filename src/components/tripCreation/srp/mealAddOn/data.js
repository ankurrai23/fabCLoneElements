const selectMealProps = {
  data: {
    mealDescription:
      'Chargrilled Mackerel With Sweet And Sour Beetroot or Grilled Lobster Tails With Lemon & Herb Butter',
    price: 1023,
    mealType: 'PAID',
    error: 'Sorry, you cannot select more than 4 meals',
  },
  isSelected: true,
  isLcc: true,
  onPress: () => {
    console.log('pressed');
  },
};

export default selectMealProps;
