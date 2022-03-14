import {View} from 'react-native';
import React, {useState} from 'react';
import {FText, FTouchableOpacity, Button, FImage} from '../../..';
import {DP} from '../../../utils/Dimen';
import {ImageConst} from '../../../utils/imageConst';
import Styles from './Styles';
import ReasonModal from '../../../common/components/reasonModal';

export default function ManagerActions({onActionPress}) {
  const [approveModal, setApproveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);
  const [modificationModal, setModificationModal] = useState(false);

  function _onActionPress(actionType, comments) {
    setApproveModal(false);
    setRejectModal(false);
    onActionPress({
      actionType,
      comments,
    });
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.requestForModificationContainer}>
        <FText style={{fontSize: DP._16}}>Request for modification</FText>
        <FTouchableOpacity onPress={() => setModificationModal(true)}>
          <FImage source={ImageConst.editIcon} style={Styles.editIcon} />
        </FTouchableOpacity>
      </View>
      <View style={{flexGrow: 1}} />
      <View style={Styles.buttonContainer}>
        <Button
          style={Styles.rejectButtonStyle}
          textStyle={{fontSize: DP._16}}
          textFont="medium"
          onPress={() => setRejectModal(true)}>
          Reject
        </Button>
        <Button
          style={Styles.approveButtonStyle}
          textStyle={{fontSize: DP._16}}
          textFont="medium"
          onPress={() => setApproveModal(true)}>
          Approve
        </Button>
      </View>

      <ReasonModal
        visible={approveModal}
        setVisible={setApproveModal}
        onSubmit={(reason) => _onActionPress('APPROVE', reason)}
        heading={'Approve request'}
        buttonText={'Approve'}
      />
      <ReasonModal
        visible={rejectModal}
        setVisible={setRejectModal}
        onSubmit={(reason) => _onActionPress('DENY', reason)}
        heading={'Reject request'}
        buttonText={'Reject'}
      />
      <ReasonModal
        visible={modificationModal}
        setVisible={setModificationModal}
        onSubmit={(reason) => _onActionPress('REQUEST_MODIFICATION', reason)}
        heading={'Request for modification'}
        buttonText={'Confirm'}
      />
    </View>
  );
}
