import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import DashedLine from '../../../common/components/dashedLine';
import Separator from '../../../common/components/separator';
import InfoBox from '../components/infoBox';
import TripStatus from '../tripStatus';
import {TrainSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const TrainItineraryCard = ({
  item,
  onActionPress,
  onCardPress,
  style,
  hideIcon,
  showLine,
  showInfo,
  timelineGreyed,
  processed,
}) => {
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(TrainSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(TrainSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(TrainSubtripActions.VIEW_REMARKS);
  const shortlistingAction = isActionEnabled(
    TrainSubtripActions.SHORTLIST_FLIGHT_TRIPS,
  );
  const viewShortlistedFlightAction = isActionEnabled(
    TrainSubtripActions.VIEW_SHORTLISTED_FLIGHT_TRIPS,
  );

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
    <View style={[Styles.flexRow, style]}>
      <View>
        {!hideIcon &&
          (timelineGreyed ? (
            <Icon.TrainItineraryGreyed
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ) : (
            <Icon.TrainItinerary
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ))}
        {showLine && (
          <View style={Styles.dashedLineContainer}>
            <DashedLine
              dashSize={3}
              dashWidth={1}
              dashColor={
                timelineGreyed ? Color.LIGHT_BLUEY_GREY : Color.DODGER_BLUE
              }
            />
          </View>
        )}
      </View>
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
            {item.showStatus ? (
              <TripStatus statusObj={item.status} />
            ) : processed ? (
              <Icon.ChevronRight
                width={DP._18}
                height={DP._18}
                stroke={Color.BATTLESHIP_GREY_TWO}
              />
            ) : (
              <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
                {item.slotDetail}
              </FText>
            )}
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
            <View style={Styles.flex}>
              <FText style={Styles.portName} numberOfLines={1}>
                {processed ? item.sourceStationCode : item.source}
              </FText>
              <FText style={Styles.time}>
                {processed ? item.departureTime : item.sourceStationCode}
              </FText>
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
                {processed ? item.destinationStationCode : item.destination}
              </FText>
              <FText style={Styles.time}>
                {processed ? item.arrivalTime : item.destinationStationCode}
              </FText>
            </View>
          </View>
          {processed ? (
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
          ) : (
            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
              <View>
                <FText style={Styles.portName}>{Strings.preferredTrain}</FText>
                <FText style={Styles.time}>{item.preferredTrain}</FText>
              </View>
              <View style={Styles.alignItem_flexEnd}>
                <FText style={Styles.portName}>{Strings.class}</FText>
                <FText style={Styles.time}>{item.preferredClass}</FText>
              </View>
            </View>
          )}
        </FTouchableOpacity>
        {(rescheduleAction || cancelAction || viewRemarksAction) && (
          <ActionsInItinerary />
        )}
        {showInfo && (
          <InfoBox
            isAlert={shortlistingAction || !!item.notificationText}
            text={
              viewShortlistedFlightAction?.name ||
              shortlistingAction?.name ||
              item.notificationText
            }
            showChevron={!!shortlistingAction}
            disablePressEvent={!!item.notificationText}
            onPress={() =>
              onActionPress(viewShortlistedFlightAction || shortlistingAction)
            }
          />
        )}
      </View>
    </View>
  );
};

export default TrainItineraryCard;
