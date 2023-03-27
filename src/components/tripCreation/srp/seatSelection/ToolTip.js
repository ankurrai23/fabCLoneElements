import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const Tooltip = ({text, children}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handlePressIn = () => {
    setTooltipVisible(true);
  };

  const handlePressOut = () => {
    setTooltipVisible(false);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      {children}
      {tooltipVisible && (
        <View>
          <Text style={styles.tooltip}>ToolTipText</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: '#000',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    top: 0,
  },
});

export default Tooltip;
