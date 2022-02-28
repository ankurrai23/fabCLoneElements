import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  dash: (height, dashColour, width) => ({
    backgroundColor: dashColour || 'transparent',
    height: height,
    width: width,
  }),
  container: {
    height: '100%',
    overflow: 'hidden',
  },
});
