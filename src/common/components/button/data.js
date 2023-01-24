import {BUTTON_TYPE} from './index';

export default {
  type: BUTTON_TYPE.PRIMARY,
  onPress: () => console.log('Button Pressed'),
  children: 'Press Me',
  selected: false,
  disabled: false,
};
