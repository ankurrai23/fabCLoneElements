const selectRoomSheetProps = {
  visible: true,
  onClose: () => console.log('on close pressed'),
  roomData: [2, 3, 1, 2, 1, 3],
  onApply: (item) => console.log('apply', item),
  onCancel: () => console.log('cancel'),
};

export default selectRoomSheetProps;
