import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {data} from 'react-native-fab-elements';
// const handleProperty = ({componetName, propertyName}) => {}
const ViewAndEditProperties = ({
  componentName,
  componentData,
  setComponentPropName,
  setComponentData,
}) => {
  useEffect(() => {
    setComponentPropName(
      componentName.charAt(0).toLowerCase() + componentName.slice(1) + 'Props',
    );
  }, [componentName, setComponentPropName]);
  return (
    <ScrollView>
      <TextInput
        value={componentData}
        multiline={true}
        onChangeText={setComponentData}
      />
    </ScrollView>
  );
};

export default ViewAndEditProperties;
