import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ViewAndEditProperties from './ViewAndEditProperties.js';
const Drawer = createDrawerNavigator();
import ComponentList from './ComponentList';
import CustomDrawer from './CustomDrawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {data} from 'react-native-fab-elements';

export default function App() {
  const [showProperties, setShowProperties] = useState(false);
  const [componetPropObjectName, setComponetPropObjectName] = useState();
  const [componentPropsDataString, setComponentPropsDataString] = useState();
  const [onSave, setOnSave] = useState(false);
  useEffect(() => {
    console.log({componetPropObjectName});
    setComponentPropsDataString(JSON.stringify(data[componetPropObjectName]));
  }, [componetPropObjectName]);
  useEffect(() => {
    if (onSave) {
      data[componetPropObjectName] = componentPropsDataString;
      setOnSave(false);
    }
  }, [onSave]);
  useEffect(() => {
    console.log({componentPropsDataString});
  }, [componentPropsDataString]);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{drawerStyle: {width: 250}}}
        detachInactiveScreens={true}>
        {ComponentList.map((item, index) => {
          if (item.component)
            return (
              <Drawer.Screen
                name={item.name}
                key={`abc${index}`}
                options={{
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => {
                        setShowProperties((currentState) => !currentState);
                        if (showProperties) setOnSave(true);
                      }}>
                      <Text
                        style={{
                          paddingRight: 6,
                          color: 'blue',
                        }}>
                        {showProperties
                          ? 'Show Component'
                          : 'Change Properties'}
                      </Text>
                    </TouchableOpacity>
                  ),
                }}>
                {() => {
                  // <FlatList
                  //   contentContainerStyle={styles.container}
                  //   showsVerticalScrollIndicator={false}
                  //   ListHeaderComponent={item.component}
                  // />
                  setComponetPropObjectName(
                    item.name.charAt(0).toLowerCase() +
                      item.name.slice(1) +
                      'Props',
                  );
                  return (
                    <SafeAreaView style={styles.container}>
                      {showProperties ? (
                        <ViewAndEditProperties
                          componentName={item.name}
                          setComponentPropName={(name) => {
                            console.log({name});
                            setComponetPropObjectName(name);
                          }}
                          componentData={componentPropsDataString}
                          setComponentData={(newData) => {
                            console.log({newData});
                            setComponentPropsDataString(newData);
                          }}
                        />
                      ) : (
                        item.component(
                          componentPropsDataString
                            ? JSON.parse(componentPropsDataString)
                            : null,
                        )
                      )}
                    </SafeAreaView>
                  );
                }}
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
