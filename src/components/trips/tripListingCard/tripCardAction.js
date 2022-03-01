import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

import {FTouchableOpacity, FText} from '../../..';
import Styles from './Styles';
import ReasonModal from '../../../common/components/reasonModal';
import SupportDialog from '../../../common/components/supportDialog';

function TripCardAction({type, ...props}) {
  const [cancelModal, setCancelModal] = useState(false);
  const [supportModal, setSupportModal] = useState(false);

  function onActionPress(comments) {
    const data = {
      tripActionType: type,
      bookingId: props.bookingId,
      hotelTripId: props.hotelTripId,
      comments: comments,
    };
    props.onActionPress(data);
    if (type === 'SUPPORT') {
      setSupportModal(true);
    }
    if (type === 'REQUEST_CANCELLATION') {
      setCancelModal(false);
    }
  }

  let action = null;
  switch (type) {
    case 'SUPPORT':
      action = (
        <FTouchableOpacity
          activeOpacity={1}
          style={Styles.flexRows}
          onPress={onActionPress}>
          <Icon name="call" size={DP._14} color={Color.DODGER_BLUE} />
          <FText style={Styles.linkText}>{props.name}</FText>
        </FTouchableOpacity>
      );
      break;
    case 'DIRECTION':
      action = (
        <FTouchableOpacity
          activeOpacity={1}
          style={Styles.flexRows}
          onPress={onActionPress}>
          <FontAwesome
            name="paper-plane"
            size={DP._14}
            color={Color.DODGER_BLUE}
          />
          <FText style={Styles.linkText}>{props.name}</FText>
        </FTouchableOpacity>
      );
      break;
    case 'REQUEST_CANCELLATION':
      action = (
        <FTouchableOpacity
          activeOpacity={1}
          style={Styles.flexRows}
          onPress={() => setCancelModal(true)}>
          <Icon name="close-outline" size={DP._20} color={Color.PASTEL_RED} />
          <FText style={Styles.cancelRequest}>{props.name}</FText>
        </FTouchableOpacity>
      );
      break;
    case 'SUBMIT_REVIEW':
      action = (
        <FTouchableOpacity
          activeOpacity={1}
          style={Styles.flexRows}
          onPress={onActionPress}>
          <FontAwesome name="star" size={DP._16} color={Color.DODGER_BLUE} />
          <FText style={Styles.linkText}>{props.name}</FText>
        </FTouchableOpacity>
      );
      break;
    case 'VIEW_DETAILS':
      action = (
        <FTouchableOpacity activeOpacity={1} style={Styles.flexRows} disabled>
          <FText style={Styles.linkText}>{props.name}</FText>
        </FTouchableOpacity>
      );
      break;
    default:
      break;
  }
  return (
    <>
      {action}
      <ReasonModal
        visible={cancelModal}
        setVisible={setCancelModal}
        onSubmit={onActionPress}
        heading={'Request cancellation'}
        buttonText={'Cancel booking'}
      />
      <SupportDialog
        visible={supportModal}
        setVisible={setSupportModal}
        supportDetails={props.supportDetails}
      />
    </>
  );
}

export default TripCardAction;
