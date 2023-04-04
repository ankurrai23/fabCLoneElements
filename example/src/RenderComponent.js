import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Alert,
  Button,
} from 'react-native';

import {DP} from '../../src/utils/Dimen';

const RenderComponent = ({showProperties, item}) => {
  function encodeProps(props) {
    return JSON.stringify(
      props,
      function (key, value) {
        if (typeof value === 'function' || React.isValidElement(value)) {
          return undefined;
        } else {
          return value;
        }
      },
      2,
    );
  }

  function decodeProps(propsString) {
    try {
      if (!propsString) propsString = '{}';
      return {...item.defaultProps, ...JSON.parse(propsString)};
    } catch (e) {
      Alert.alert(
        `Invalid properties set in json, ${e} resetting and rendering component with default values`,
      );
      setCompProps(encodeProps(item.defaultProps));
      return item.defaultProps;
    }
  }

  const [compProps, setCompProps] = useState(encodeProps(item.defaultProps));

  useEffect(() => {
    setCompProps(encodeProps(item.defaultProps));
  }, [item.defaultProps]);

  const checkAndRenderComponent = propsString => {
    let propsObj = decodeProps(propsString);
    return item.component(propsObj);
  };

  console.log('Rendering comp', item.name);

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
    paddingHorizontal: DP._16,
    paddingTop: DP._24,
    flexGrow: 1,
  },
});

export default RenderComponent;
