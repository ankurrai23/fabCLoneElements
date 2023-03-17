import React from 'react';
import {View} from 'react-native';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';
import {Color} from '../../../utils/color';
import TripStatus from '../tripStatus';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {MANAGER_ACTIONS} from '../managerActions';
import {getSubTripIcon} from '../../../utils/Utils';

const ReceivedCard = ({item, onCardPress, onCoTravelerPress}) => {
  const isActionEnabled = (type) => item.actions?.find((e) => e.type === type);
  const denyAction = isActionEnabled(MANAGER_ACTIONS.DENY);
  const approveAction = isActionEnabled(MANAGER_ACTIONS.APPROVE);

  return (
    <>
      <FTouchableOpacity
        onPress={() =>
          onCardPress({
            masterTripId: item.masterTripId,
            isSBT: item.requestType === 'SELF_BOOKING',
          })
        }
        style={Styles.container}>
        <View style={Styles.tripIdContainer}>
          <View style={Styles.flexRowAndAlignCenter}>
            {item?.subTripsIcon?.slice(0, 3)?.map((asset, index) => {
              const subTripIcon = getSubTripIcon(asset.key);
              return (
                <View key={index} style={Styles.iconStyle}>
                  {subTripIcon}
                </View>
              );
            })}
            {item?.subTripsIcon?.length > 3 && (
              <FText weight={FONT_TYPE.MEDIUM} style={Styles.fontSize_14}>
                +{item?.subTripsIcon?.length - 3}
              </FText>
            )}
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
                item.coTravellers.length > 1 &&
                onCoTravelerPress(item.coTravellers)
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
          {!!(denyAction || approveAction) && (
            <FText style={Styles.actionText(Color.DODGER_BLUE)}>
              {denyAction ? denyAction.name : ''}
              {denyAction && approveAction ? '/' : ''}
              {approveAction ? approveAction.name : ''}
            </FText>
          )}
        </View>
      </FTouchableOpacity>
    </>
  );
};

export default ReceivedCard;
