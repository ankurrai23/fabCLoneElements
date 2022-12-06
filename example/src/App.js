import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ComponentList from './ComponentList';
import CustomDrawer from './CustomDrawer';
import RenderComponent from './RenderComponent';

const Drawer = createDrawerNavigator();

const headerRightText = (onPress, showProperties) => {
  return () => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.rightHeaderText} numberOfLines={2}>
        {showProperties ? 'Show Component' : 'Change Properties'}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [showProperties, setShowProperties] = useState(false);

  const onHeaderTextPress = () => {
    setShowProperties((currentState) => !currentState);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{drawerStyle: {width: 250}}}
        detachInactiveScreens={true}>
        {ComponentList.map((item, index) => {
          if (item.component) {
            // noinspection JSUnusedGlobalSymbols
            return (
              <Drawer.Screen
                name={item.name}
                key={`abc${index}`}
                options={{
                  headerRight: headerRightText(
                    onHeaderTextPress,
                    showProperties,
                  ),
                }}>
                {() => (
                  <RenderComponent
                    showProperties={showProperties}
                    item={item}
                  />
                )}
              </Drawer.Screen>
            );
          }
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  rightHeaderText: {
    paddingRight: 6,
    color: 'blue',
  },
});
