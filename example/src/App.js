import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import ComponentList from './ComponentList';
import {FlatList} from 'react-native-gesture-handler';
import CustomDrawer from './CustomDrawer';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{drawerStyle: {width: 250}}}
        detachInactiveScreens={true}>
        {ComponentList.map((item, index) => {
          if (item.component)
            return (
              <Drawer.Screen name={item.name} key={`abc${index}`}>
                {() => (
                  // <FlatList
                  //   contentContainerStyle={styles.container}
                  //   showsVerticalScrollIndicator={false}
                  //   ListHeaderComponent={item.component}
                  // />
                  <SafeAreaView style={styles.container}>
                    {item.component}
                  </SafeAreaView>
                )}
              </Drawer.Screen>
            );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    // justifyContent: 'center',
    // // paddingVertical: 16,
    // // paddingHorizontal: 16,
    flexGrow: 1,
  },
});
