import React, {useState} from 'react';
import {View} from 'react-native';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Separator from '../../../common/components/separator';

import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import DialogBox from '../../../common/components/dialogBox';
import {FlatList} from 'react-native-gesture-handler';
import TripStatus from '../tripStatus';
import ReasonModal from '../../../common/components/reasonModal';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {MANAGER_ACTIONS} from '../managerActions';
import {SUB_TRIP_TYPE} from '../../../utils/Constants';
import Icon from '../../../assets/icons/Icon';

const ReceivedCard = ({item, onCardPress, onActionPress}) => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [approveModal, setApproveModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);

  const tripIcons = (requestType) => {
    let icons = [];
    if (requestType.includes(SUB_TRIP_TYPE.FLIGHT))
      icons.push(
        <Icon.Aeroplane
          fill={Color.DARK_SLATE_BLUE_TWO}
          width={DP._16}
          height={DP._16}
        />,
      );
    if (requestType.includes(SUB_TRIP_TYPE.HOTEL))
      icons.push(
        <Icon.Hotel
          fill={Color.DARK_SLATE_BLUE_TWO}
          width={DP._16}
          height={DP._16}
        />,
      );
    return icons;
  };

  const renderItem = ({item: coTravelerName}) => {
    return <FText style={{fontSize: DP._16}}>{coTravelerName}</FText>;
  };

  function _onActionPress(actionType, comments) {
    setApproveModal(false);
    setRejectModal(false);
    onActionPress({
      actionType,
      masterTripId: item.masterTripId,
      comments,
    });
  }

  return (
    <>
      <FTouchableOpacity
        onPress={() => onCardPress({['masterTripId']: item.masterTripId})}
        style={Styles.container}>
        <View style={Styles.tripIdContainer}>
          <View style={Styles.flexDirectionRow}>
            {tripIcons(item.requestType).map((asset) => (
              <View style={Styles.iconStyle}>{asset}</View>
            ))}
          </View>
          <TripStatus statusObj={item.status} />
        </View>
        <View style={Styles.flexRow}>
          <FText style={{color: Color.GREYISH_PURPLE}}>
            {Strings.requestBy}
          </FText>
          <FText
            numberOfLines={1}
            style={[Styles.destination, Styles.flex_1]}
            type={FONT_TYPE.MEDIUM}>
            {item.requestedBy}
          </FText>
        </View>
        <View style={Styles.flexRow}>
          <FText
            numberOfLines={1}
            style={Styles.destination}
            type={FONT_TYPE.MEDIUM}>
            {item.title}
          </FText>
        </View>
        <View style={Styles.flexRow}>
          <FText
            style={
              Styles.date
            }>{`${item.tripStartDate} - ${item.tripEndDate}`}</FText>
        </View>
        <View style={[Styles.flexRow, Styles.justifyBetween]}>
          <View style={Styles.flexDirectionRow}>
            <FText style={{color: Color.GREYISH_PURPLE}}>
              {Strings.cotravelers} {!item.coTravellers?.length && Strings.none}
            </FText>
            <FTouchableOpacity
              style={Styles.flex}
              onPress={() =>
                item.coTravellers.length > 1 && setSheetVisible(true)
              }>
              <FText numberOfLines={1}>
                {item.coTravellers?.[0]}
                {item.coTravellers?.length > 1 &&
                  ` +${item.coTravellers?.length - 1}`}
              </FText>
            </FTouchableOpacity>
          </View>
        </View>
        {item.isCancelled && (
          <View style={Styles.flexRow}>
            <View style={Styles.cancelledDot} />
            <FText style={Styles.cancelledText}>{item.cancelMsg}</FText>
          </View>
        )}
        <View style={Styles.footer}>
          {item.actions?.[0]?.type === MANAGER_ACTIONS.VIEW_DETAILS && (
            <FTouchableOpacity activeOpacity={1} style={[Styles.btn]} disabled>
              <FText style={Styles.actionText(Color.DODGER_BLUE)}>
                {item.actions?.[0].name}
              </FText>
            </FTouchableOpacity>
          )}
          {item.actions?.[1]?.type === MANAGER_ACTIONS.DENY && (
            <FTouchableOpacity
              activeOpacity={1}
              style={[Styles.btn]}
              onPress={() => setRejectModal(true)}>
              <Icon.Reject width={DP._16} height={DP._16} />
              <FText style={Styles.actionText(Color.PASTEL_RED)}>
                {item.actions?.[1].name}
              </FText>
            </FTouchableOpacity>
          )}
          {item.actions?.[0]?.type === MANAGER_ACTIONS.APPROVE && (
            <FTouchableOpacity
              activeOpacity={1}
              style={[Styles.btn]}
              onPress={() => setApproveModal(true)}>
              <Icon.Approve width={DP._16} height={DP._16} />
              <FText style={Styles.actionText(Color.DARK_SEA_FOAM)}>
                {item.actions?.[0].name}
              </FText>
            </FTouchableOpacity>
          )}
        </View>
      </FTouchableOpacity>
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._48, paddingHorizontal: DP._24}}>
            <FText style={Styles.modalHeading}>{Strings.coTravelers}</FText>
            <FlatList
              data={item.coTravellers}
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <Separator
                  style={{
                    marginVertical: DP._16,
                    backgroundColor: Color.SILVER,
                  }}
                />
              )}
              keyExtractor={(_) => _}
            />
          </View>
        }
      />
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
    </>
  );
};

export default ReceivedCard;
