import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ComponentList from './ComponentList';
import CustomDrawer from './CustomDrawer';
import RenderComponent from './RenderComponent';

const Drawer = createDrawerNavigator();
export default function App() {
  const [showProperties, setShowProperties] = useState(true);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{drawerStyle: {width: 250}}}
        detachInactiveScreens={true}>
        {ComponentList.map((item, index) => {
          if (item.component) {
            return (
              <Drawer.Screen
                name={item.name}
                key={`abc${index}`}
                options={{
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => {
                        setShowProperties((currentState) => !currentState);
                        // if (showProperties) setOnSave(true);
                      }}>
                      <Text style={styles.rightHeaderText} numberOfLines={2}>
                        {showProperties
                          ? 'Show Component'
                          : 'Change Properties'}
                      </Text>
                    </TouchableOpacity>
                  ),
                }}>
                {() => (
                  <RenderComponent
                    showProperties={showProperties}
                    item={item}
                    setShowProperties={setShowProperties}
                    compPropsObjName={
                      item.name.charAt(0).toLowerCase() +
                      item.name.slice(1) +
                      'Props'
                    }
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
