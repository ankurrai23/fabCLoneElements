const selectorProps = {
  title: 'Preferred class',
  data: [
    {
      key: '1A',
      value: '1A',
    },
    {
      key: '2A',
      value: '2A',
    },
  ],
  onClose: () => console.log('closed'),
  onItemSelect: (item) => console.log(item),
  keySelected: '2A',
};

export default selectorProps;
