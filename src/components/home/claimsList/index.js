import React from 'react';
import {FlatList} from 'react-native';
import ClaimsCard from '../../../common/components/claimsCard';
import Styles from './Styles';

export default function ClaimsList(props) {
  return (
    <FlatList
      data={props.cardData}
      renderItem={({item}) => (
        <ClaimsCard
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
