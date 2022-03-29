import React from 'react';
import {FlatList} from 'react-native';
import {HomeCard} from '../../..';
import Styles from './Styles';

export default function ClaimsList(props) {
  return (
    <FlatList
      data={props.cardData}
      renderItem={({item}) => (
        <HomeCard
          {...item}
          type={'large'}
          onPress={() => props.onPress(item)}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal={true}
      style={Styles.container}
      contentContainerStyle={Styles.contentContainerStyle}
      showsHorizontalScrollIndicator={false}
    />
  );
}
