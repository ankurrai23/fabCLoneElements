import {View} from 'react-native';
import React, {useState} from 'react';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Button from '../../../common/components/button';

import {DP} from '../../../utils/Dimen';
import Styles from './Styles';
import ReasonModal from '../../../common/components/reasonModal';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {Color} from '../../../utils/color/index.travelPlus';
import Separator from '../../../common/components/separator';
import {formattedPrice} from '../../../utils/Utils';

export const MANAGER_ACTIONS = {
  APPROVE: 'APPROVE',
  DENY: 'DENY',
  REQUEST_MODIFICATION: 'REQUEST_MODIFICATION',
  VIEW_DETAILS: 'VIEW_DETAILS',
};

const Amount = ({price, inclGST = true}) => (
  <View style={Styles.priceContainer}>
    <FText type={FONT_TYPE.MEDIUM} style={Styles.price}>
      {price}
    </FText>
    {inclGST && <FText style={Styles.gstIncl}>Incl GST & Fees</FText>}
  </View>
);

export default function ManagerActions({
  actions,
  onActionPress,
  msg,
  isSubTripSoldOut,
  amount,
}) {
  const [approveModal, setApproveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [modificationModal, setModificationModal] = useState(false);

  const isActionEnabled = (type) => actions?.find((e) => e.type === type);
  const approveAction = isActionEnabled(MANAGER_ACTIONS.APPROVE);
  const denyAction = isActionEnabled(MANAGER_ACTIONS.DENY);
  const modificationRequestAction = isActionEnabled(
    MANAGER_ACTIONS.REQUEST_MODIFICATION,
  );

  function _onActionPress(actionType, comments) {
    setApproveModal(false);
    setRejectModal(false);
    setModificationModal(false);
    onActionPress({
      actionType,
      comments,
    });
  }

  const showManagerActions =
    approveAction || denyAction || modificationRequestAction;

  return (
    <View style={Styles.container}>
      {!isSubTripSoldOut && <Separator style={Styles.separator} />}
      {showManagerActions && (
        <View>
          {!isSubTripSoldOut && (
            <>
              {modificationRequestAction && (
                <>
                  <View style={Styles.requestForModifyContainer}>
                    <FText
                      type={FONT_TYPE.MEDIUM}
                      style={Styles.requestToModifyStyle}>
                      {Strings.requestForModification}
                    </FText>
                    <FTouchableOpacity
                      onPress={() => setModificationModal(true)}>
                      <FText style={Styles.notifyText} type={FONT_TYPE.MEDIUM}>
                        {Strings.notify}
                      </FText>
                    </FTouchableOpacity>
                  </View>
                  {!msg && <Separator style={Styles.separator} />}
                </>
              )}
            </>
          )}
          {!!msg && (
            <View style={Styles.infoContainer(msg.type)}>
              <FText style={Styles.infoText}>{msg.value}</FText>
            </View>
          )}
          {!isSubTripSoldOut ? (
            <View style={Styles.buttonContainer}>
              {!!amount && <Amount price={amount} />}
              {denyAction && (
                <Button
                  onPress={() => setRejectModal(true)}
                  style={Styles.rejectButtonStyle}
                  textFont={FONT_TYPE.MEDIUM}
                  textStyle={Styles.rejectText}>
                  {Strings.reject}
                </Button>
              )}
              {approveAction && (
                <Button
                  onPress={() => setApproveModal(true)}
                  textFont={FONT_TYPE.MEDIUM}
                  style={Styles.approveButtonStyle}>
                  {Strings.approve}
                </Button>
              )}
            </View>
          ) : (
            <Button
              onPress={() => setModificationModal(true)}
              style={Styles.requestModification}
              textFont={FONT_TYPE.MEDIUM}
              textStyle={Styles.requestModificationText}>
              {Strings.requestModification}
            </Button>
          )}
        </View>
      )}
      <ReasonModal
        visible={approveModal}
        setVisible={setApproveModal}
        onSubmit={(reason) => _onActionPress(MANAGER_ACTIONS.APPROVE, reason)}
        heading={Strings.approveRequest}
        buttonText={Strings.approve}
      />
      <ReasonModal
        visible={rejectModal}
        setVisible={setRejectModal}
        onSubmit={(reason) => _onActionPress(MANAGER_ACTIONS.DENY, reason)}
        heading={Strings.rejectRequest}
        buttonText={Strings.reject}
      />
      <ReasonModal
        visible={modificationModal}
        setVisible={setModificationModal}
        onSubmit={(reason) =>
          _onActionPress(MANAGER_ACTIONS.REQUEST_MODIFICATION, reason)
        }
        heading={Strings.requestForModification}
        buttonText={Strings.confirm}
      />
    </View>
  );
}
