import React from 'react';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';

export default function MessageCard({...props}) {
  return (
    <FTouchableOpacity
      style={[Styles.container, {...props.style}]}
      onPress={props.onPress}>
      <FText
        type={props.isRead ? FONT_TYPE.REGULAR : FONT_TYPE.MEDIUM}
        style={Styles.title}
        numberOfLines={1}
        ellipsizeMode={'tail'}>
        {`${props.title}`}
      </FText>
      <FText style={Styles.message} numberOfLines={2} ellipsizeMode={'tail'}>
        {`${props.message}`}
      </FText>
      <FText
        type={props.isRead ? FONT_TYPE.REGULAR : FONT_TYPE.MEDIUM}
        style={Styles.date}>
        {props.dateTime}
      </FText>
    </FTouchableOpacity>
  );
}
