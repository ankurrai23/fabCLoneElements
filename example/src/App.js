import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ComponentsDrawer from './ComponentsDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <ComponentsDrawer />
    </NavigationContainer>
  );
}
