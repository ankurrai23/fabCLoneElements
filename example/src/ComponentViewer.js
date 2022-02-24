import React from 'react';
import {View, StyleSheet} from 'react-native';
import Components from './Components';
const ComponentViewer = ({route}) => {
  return (
    <View style={styles.container}>
      <Components route={route} />
    </View>
  );
};

export default ComponentViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
