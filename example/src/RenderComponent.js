import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Alert,
} from 'react-native';
import {data} from 'react-native-fab-elements';
import {DP} from '../../src/utils/Dimen';

const RenderComponent = ({
  showProperties,
  item,
  compPropsObjName,
  setShowProperties,
}) => {
  const [compProps, setCompProps] = useState(
    JSON.stringify(data[compPropsObjName]),
  );

  useEffect(() => {
    setCompProps(JSON.stringify(data[compPropsObjName]));
  }, [compPropsObjName]);

  const checkAndRenderComponent = (propsString) => {
    try {
      if (!propsString) propsString = '{}';
      const propsObj = JSON.parse(propsString);
      return item.component(propsObj ?? null);
    } catch (e) {
      setShowProperties((currentState) => !currentState);
      Alert.alert("You provide a value in json that can't be parsed");
    }
  };

  return (
    <SafeAreaView style={styles.flexGrow}>
      <View style={styles.container}>
        {showProperties ? (
          <ScrollView>
            <TextInput
              value={compProps}
              multiline={true}
              onChangeText={setCompProps}
            />
          </ScrollView>
        ) : (
          checkAndRenderComponent(compProps)
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: DP._24,
    paddingTop: DP._24,
    flexGrow: 1,
  },
});

export default RenderComponent;
