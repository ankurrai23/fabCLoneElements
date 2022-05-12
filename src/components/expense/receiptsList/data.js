const data = [
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/22/b2/6a/bill.jpg',
    name: 'Stationary',
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Ola',
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/22/b2/6a/bill.jpg',
    name: 'Ubar',
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Dunzo',
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Food',
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Rapido',
  },
];

const receiptsListProps = {
  receipts: data,
  onImagePress: () => console.log('image pressed'),
  onPressDelete: () => console.log('press delete'),
  onPressAddMore: () => console.log('press add more'),
  type: 'file',
};

export default receiptsListProps;
