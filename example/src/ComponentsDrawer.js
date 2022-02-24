import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ComponentViewer from './ComponentViewer';

const Drawer = createDrawerNavigator();

import {COMPONENTS} from './ComponentList';

const ComponentsDrawer = () => {
  return (
    <Drawer.Navigator>
      {COMPONENTS.map((item, index) => (
        <Drawer.Screen
          name={item}
          component={ComponentViewer}
          key={`abc${index}`}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default ComponentsDrawer;
