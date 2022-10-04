import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../common/components/separator';
import TripStatus from '../tripStatus';
import {TrainSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {getStatusObject} from '../../../utils/Utils';

const TrainItineraryCard = ({
  item,
  onActionPress,
  onCardPress,
  style,
  title,
}) => {
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(TrainSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(TrainSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(TrainSubtripActions.VIEW_REMARKS);

  const ActionsInItinerary = () => (
    <>
      <Separator
        style={{
          marginHorizontal: DP._16,
          backgroundColor: Color.LIGHT_PERIWINKLE,
        }}
      />
      <View style={Styles.actionContainer}>
        {viewRemarksAction ? (
          <FTouchableOpacity
            onPress={() => onActionPress(viewRemarksAction)}
            style={Styles.flexRowAndAlignCenter}>
            <FText style={Styles.reschedule}>{viewRemarksAction.name}</FText>
          </FTouchableOpacity>
        ) : (
          <>
            {cancelAction && (
              <FTouchableOpacity
                onPress={() => onActionPress(cancelAction)}
                style={Styles.flexRowAndAlignCenter}>
                <Icon.Cross
                  width={DP._16}
                  height={DP._16}
                  stroke={Color.PASTEL_RED}
                />
                <FText style={Styles.cancel}>{cancelAction.name}</FText>
              </FTouchableOpacity>
            )}
            {rescheduleAction && (
              <FTouchableOpacity
                onPress={() => onActionPress(rescheduleAction)}
                style={Styles.primaryButtonStyle}>
                <Icon.Reschedule width={DP._16} height={DP._16} />
                <FText style={Styles.reschedule}>{rescheduleAction.name}</FText>
              </FTouchableOpacity>
            )}
          </>
        )}
      </View>
    </>
  );
  return (
    <>
      {title && (
        <FText type={FONT_TYPE.MEDIUM} style={Styles.heading}>
          {title}
        </FText>
      )}
      <View style={[Styles.flexRow, style]}>
        <View style={Styles.container}>
          <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
            <View style={[Styles.flexDirectionRow, Styles.baseline]}>
              <FText>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {item.date}
                </FText>
                <FText
                  style={{
                    color: Color.BLUEY_GREY,
                    fontSize: DP._12,
                  }}>{` ${item.month}`}</FText>
              </FText>
              {!!item.trainBookingStatus && (
                <TripStatus
                  statusObj={getStatusObject(item.trainBookingStatus)}
                />
              )}
            </View>
            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
              <View style={Styles.flex}>
                <FText style={Styles.portName} numberOfLines={1}>
                  {item.source} ({item.sourceStationCode})
                </FText>
                <FText style={Styles.time}>{item.departureTime}</FText>
              </View>
              <View
                style={[
                  Styles.justifyContent_around(item.duration),
                  Styles.flex,
                ]}>
                {item.duration && (
                  <View style={Styles.durationContainer}>
                    <FText style={Styles.duration} weight={400}>
                      {item.duration}
                    </FText>
                  </View>
                )}
              </View>
              <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
                <FText style={Styles.portName} numberOfLines={1}>
                  {item.destination} ({item.destinationStationCode})
                </FText>
                <FText style={Styles.time}>{item.arrivalTime}</FText>
              </View>
            </View>

            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
              <View>
                <FText style={Styles.portName}>{item.trainName}</FText>
                <FText style={Styles.time}>
                  {item.seatNumber} {item.trainNumber}
                </FText>
              </View>
              <View style={Styles.alignItem_flexEnd}>
                <FText style={Styles.portName}>{Strings.pnr}</FText>
                <FText style={Styles.time}>{item.pnr}</FText>
              </View>
            </View>
          </FTouchableOpacity>
          {(rescheduleAction || cancelAction || viewRemarksAction) && (
            <ActionsInItinerary />
          )}
        </View>
      </View>
    </>
  );
};

export default TrainItineraryCard;
