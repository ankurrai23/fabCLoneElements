import {View} from 'react-native';
import React, {useState} from 'react';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Button from '../../../common/components/button';
import FImage from '../../../common/rn/FImage';

import {DP} from '../../../utils/Dimen';
import {ImageConst} from '../../../utils/imageConst';
import Styles from './Styles';
import ReasonModal from '../../../common/components/reasonModal';
import {Strings} from '../../../utils/strings/index.travelPlus';

export const MANAGER_ACTIONS = {
  APPROVE: 'APPROVE',
  DENY: 'DENY',
  REQUEST_MODIFICATION: 'REQUEST_MODIFICATION',
  VIEW_DETAILS: 'VIEW_DETAILS',
};

export default function ManagerActions({actions, onActionPress}) {
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

  if (!approveAction && !denyAction && !modificationRequestAction) {
    return null;
  }

  return (
    <View style={Styles.container}>
      {modificationRequestAction && (
        <View style={Styles.requestForModificationContainer}>
          <FText style={{fontSize: DP._16}}>
            {Strings.requestForModification}
          </FText>
          <FTouchableOpacity onPress={() => setModificationModal(true)}>
            <FImage source={ImageConst.editIcon} style={Styles.editIcon} />
          </FTouchableOpacity>
        </View>
      )}
      <View style={Styles.FlexGrow} />
      <View style={Styles.buttonContainer}>
        {denyAction && (
          <Button
            style={Styles.rejectButtonStyle}
            textStyle={{fontSize: DP._16}}
            textFont={FONT_TYPE.MEDIUM}
            onPress={() => setRejectModal(true)}>
            {Strings.reject}
          </Button>
        )}
        {approveAction && (
          <Button
            style={Styles.approveButtonStyle}
            textStyle={{fontSize: DP._16}}
            textFont={FONT_TYPE.MEDIUM}
            onPress={() => setApproveModal(true)}>
            {Strings.approve}
          </Button>
        )}
      </View>

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
