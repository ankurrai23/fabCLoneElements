const data = [
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/22/b2/6a/bill.jpg',
    name: 'Stationary',
    size: 140000,
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Ola',
    size: 140000,
  },
  {
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/22/b2/6a/bill.jpg',
    name: 'Ubar',
    size: 140000,
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Dunzo',
    size: 140000,
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Food',
    size: 140000,
  },
  {
    image: 'https://www.billeasy.in/images/Bitmap-min.png',
    name: 'Rapido',
    size: 140000,
  },
];

const receiptListViewProps = {
  data: data,
  onClosePress: () => console.log('close button pressed'),
  onScanAgainPress: () => console.log('scan again pressed'),
  onUploadReceiptPress: () => console.log('upload button pressed'),
  onImagePress: () => console.log('image pressed'),
  scanDisabled: true,
  onPressDelete: () => console.log('press delete'),
  type: 'list',
};

export default receiptListViewProps;
