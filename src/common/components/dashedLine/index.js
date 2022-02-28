import React, {useState} from 'react';
import {View} from 'react-native';
import Styles from './Styles';

const DashedLine = ({dashSize, dashWidth, dashColor}) => {
  const [array, setArray] = useState([]);

  const Dash = () => {
    return (
      <>
        <View style={Styles.dash(dashSize, dashColor, dashWidth)} />
        <View style={Styles.dash(dashSize, 'transparent', dashWidth)} />
      </>
    );
  };

  const onLayoutChanged = (event) => {
    let height = event.nativeEvent.layout.height;
    let noOfDashes = height / (dashSize * 2);
    let tempArray = [];
    for (let i = 0; i < noOfDashes; i++) {
      tempArray.push(i);
    }
    setArray(tempArray);
  };

  return (
    <View style={Styles.container} onLayout={(e) => onLayoutChanged(e)}>
      {array.map((_, index) => (
        <Dash key={index} />
      ))}
    </View>
  );
};

export default DashedLine;
