import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {FText, FTouchableOpacity} from 'react-native-fab-elements';

import Icon from '../../src/assets/icons/Icon';
import ComponentList from './ComponentList';
import {TextField} from 'react-native-fab-elements';

export default function CustomDrawer({navigation, state}) {
  let [searchText, setSearchText] = useState('');

  const renderItem = ({item}) => {
    const selected = state.routeNames[state.index] === item.name;
    if (item.component) {
      return (
        <FTouchableOpacity
          onPress={() => navigation.navigate(item.name)}
          style={styles.buttonStyle(selected)}>
          <FText style={styles.componentName(selected)} numberOfLines={1}>
            {item.name}
          </FText>
          <Icon.ChevronRight
            name="chevron-right"
            size={18}
            stroke={selected ? '#379aff' : 'black'}
          />
        </FTouchableOpacity>
      );
    } else {
      return (
        <FText style={styles.titleText} type="medium">
          {item.name}
        </FText>
      );
    }
  };

  return (
    <SafeAreaView>
      <>
        <TextField
          containerStyle={styles.searchMargin}
          label={'Search component'}
          onChangeText={setSearchText}
        />
        <FlatList
          data={ComponentList.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase()),
          )}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          bounces={false}
        />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  searchMargin: {
    margin: 10,
  },
  buttonStyle: selected => ({
    flexDirection: 'row',
    padding: 8,
    marginVertical: 1,
    paddingLeft: 16,
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: selected ? '#379aff1a' : 'transparent',
  }),
  titleText: {fontSize: 20, marginVertical: 5},
  componentName: selected => ({
    color: selected ? '#379aff' : 'black',
    flex: 0.9,
  }),
});
