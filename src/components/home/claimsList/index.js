import React from 'react';
import {FlatList} from 'react-native';
import ClaimsCard, {
  CLAIM_CARD_TYPE,
} from '../../../common/components/claimsCard';
import Styles from './Styles';

export default function ClaimsList(props) {
  return (
    <FlatList
      data={props.cardData}
      renderItem={({item}) => (
        <ClaimsCard
          {...item}
          type={CLAIM_CARD_TYPE.LARGE}
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
