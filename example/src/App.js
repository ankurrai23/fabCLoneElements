import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import ComponentList from './ComponentList';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {ComponentList.map((item, index) => (
          <Drawer.Screen name={item.name} key={`abc${index}`}>
            {() => <View style={styles.container}>{item.component}</View>}
          </Drawer.Screen>
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
