import React from 'react';
import {FText, FTouchableOpacity} from '../../..';
import Styles from './Styles';

export default function MessageCard({...props}) {
  return (
    <FTouchableOpacity style={[Styles.container, {...props.marginTop}]} onPress={props.onPress}>
      <FText
        type={props.isRead ? 'regular' : 'medium'}
        style={Styles.title}
        numberOfLines={1}
        ellipsizeMode={'tail'}>
        {`${props.title}`}
      </FText>
      <FText style={Styles.message} numberOfLines={2} ellipsizeMode={'tail'}>
        {`${props.message}`}
      </FText>
      <FText type={props.isRead ? 'regular' : 'medium'} style={Styles.date}>
        {props.dateTime}
      </FText>
    </FTouchableOpacity>
  );
}
