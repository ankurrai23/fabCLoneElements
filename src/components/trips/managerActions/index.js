import {View} from 'react-native';
import React from 'react';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Button from '../../../common/components/button';

import {DP} from '../../../utils/Dimen';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {Color} from '../../../utils/color/index.travelPlus';
import Separator from '../../../common/components/separator';

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
  msg,
  isSubTripSoldOut,
  amount,
  onRequestModificationPress,
  onRejectPress,
  onApprovePress,
}) {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);
  const approveAction = isActionEnabled(MANAGER_ACTIONS.APPROVE);
  const denyAction = isActionEnabled(MANAGER_ACTIONS.DENY);
  const modificationRequestAction = isActionEnabled(
    MANAGER_ACTIONS.REQUEST_MODIFICATION,
  );

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
                    <FTouchableOpacity onPress={onRequestModificationPress}>
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
              <Icon.Info
                width={DP._16}
                height={DP._16}
                stroke={isSubTripSoldOut ? Color.PASTEL_RED : Color.DODGER_BLUE}
              />
              <FText style={Styles.infoText}>{msg.value}</FText>
            </View>
          )}
          {!isSubTripSoldOut ? (
            <View style={Styles.buttonContainer}>
              {!!amount && <Amount price={amount} />}
              {denyAction && (
                <Button
                  onPress={onRejectPress}
                  style={Styles.rejectButtonStyle}
                  textFont={FONT_TYPE.MEDIUM}
                  textStyle={Styles.rejectText}>
                  {Strings.reject}
                </Button>
              )}
              {approveAction && (
                <Button
                  onPress={onApprovePress}
                  textFont={FONT_TYPE.MEDIUM}
                  style={Styles.approveButtonStyle}>
                  {Strings.approve}
                </Button>
              )}
            </View>
          ) : (
            <Button
              onPress={onRequestModificationPress}
              style={Styles.requestModification}
              textFont={FONT_TYPE.MEDIUM}
              textStyle={Styles.requestModificationText}>
              {Strings.requestModification}
            </Button>
          )}
        </View>
      )}
    </View>
  );
}
