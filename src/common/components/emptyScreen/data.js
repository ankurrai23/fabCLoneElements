import {BUTTON_TYPE} from '../button';

const emptyScreenProps = {
  heading: 'This list is empty',
  image: null,
  subHeading: 'This list is empty',
  btnText: 'Refresh',
  btnType: BUTTON_TYPE.PRIMARY,
  onPress: () => console.log('Button Pressed'),
};

export default emptyScreenProps;
