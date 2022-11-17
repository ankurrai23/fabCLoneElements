import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import DashedLine from '../../../../common/components/dashedLine';
import Separator from '../../../../common/components/separator';
import InfoBox from '../../components/infoBox';
import TripStatus from '../../tripStatus';
import {FlightSubTripActions} from '../../../../utils/SubTripActions';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import {getStatusObject} from '../../../../utils/Utils';

const FlightItineraryCard = ({
  status,
  tripRequest,
  bookingDetails,
  showStatus,
  actions,
  onActionPress,
  onCardPress,
  style,
  actionDisabled,
  hideIcon,
  showLine,
  showInfo,
  timelineGreyed,
  showPreBookingCard,
  notificationText,
  hideChevron,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(FlightSubTripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(FlightSubTripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(FlightSubTripActions.VIEW_REMARKS);
  const shortlistingAction = isActionEnabled(
    FlightSubTripActions.SHORTLIST_FLIGHT_TRIPS,
  );
  const viewShortlistedFlightAction = isActionEnabled(
    FlightSubTripActions.VIEW_SHORTLISTED_FLIGHT_TRIPS,
  );

  const ActionsInItinerary = () => (
    <>
      <Separator style={Styles.seperatorStyle} />
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

  const FlightPreBookingCard = () => (
    <View style={Styles.container}>
      <FTouchableOpacity
        activeOpacity={tripRequest.reduceOpacity ? 0.6 : 1}
        style={Styles.card(tripRequest.reduceOpacity)}
        onPress={onCardPress}>
        <View style={[Styles.flexDirectionRow, Styles.baseline]}>
          <FText>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
              {tripRequest.date}
            </FText>
            <FText style={Styles.headingMonth}>{` ${tripRequest.month}`}</FText>
          </FText>
          {showStatus ? (
            <TripStatus statusObj={status} />
          ) : (
            <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
              {tripRequest.slotDetail}
            </FText>
          )}
        </View>
        <View style={[Styles.flexDirectionRow, Styles.marginTop_12]}>
          <View style={Styles.flex}>
            <FText style={Styles.time} numberOfLines={1}>
              {tripRequest.source}
            </FText>
            <FText style={Styles.portName}>
              {tripRequest.sourceAirportCode}
            </FText>
          </View>
          <View
            style={[
              Styles.justifyContent_around(tripRequest.duration),
              Styles.flex,
            ]}>
            <Icon.Aeroplane
              width={DP._18}
              height={DP._18}
              fill={Color.LIGHT_BLUEY_GREY}
              style={Styles.airplane}
            />
          </View>
          <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
            <FText style={Styles.time} numberOfLines={1}>
              {tripRequest.destination}
            </FText>
            <FText style={Styles.portName}>
              {tripRequest.destinationAirportCode}
            </FText>
          </View>
        </View>
      </FTouchableOpacity>

      {!actionDisabled &&
        (rescheduleAction || cancelAction || viewRemarksAction) && (
          <ActionsInItinerary />
        )}
      {showInfo && (
        <InfoBox
          isAlert={shortlistingAction || !!notificationText}
          text={
            viewShortlistedFlightAction?.name ||
            shortlistingAction?.name ||
            notificationText
          }
          showChevron={!!shortlistingAction}
          disablePressEvent={!!notificationText}
          onPress={() =>
            onActionPress(viewShortlistedFlightAction || shortlistingAction)
          }
        />
      )}
    </View>
  );

  const FlightPostBookingCard = () => (
    <View style={Styles.container}>
      <FTouchableOpacity
        activeOpacity={tripRequest.reduceOpacity ? 0.6 : 1}
        style={Styles.card(tripRequest.reduceOpacity)}
        onPress={onCardPress}>
        <View style={[Styles.flexDirectionRow, Styles.baseline]}>
          <FText>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
              {bookingDetails.date}
            </FText>
            <FText
              style={Styles.headingMonth}>{` ${bookingDetails.month}`}</FText>
          </FText>
          {showStatus && bookingDetails.flightBookingStatus ? (
            <TripStatus
              statusObj={getStatusObject(bookingDetails.flightBookingStatus)}
            />
          ) : (
            !hideChevron && (
              <Icon.ChevronRight
                width={DP._18}
                height={DP._18}
                stroke={Color.BATTLESHIP_GREY_TWO}
              />
            )
          )}
        </View>
        <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
          <View style={Styles.flex}>
            <FText style={Styles.time}>{bookingDetails.departureTime}</FText>

            <FText style={Styles.portName} numberOfLines={1}>
              {bookingDetails.sourceAirportCode +
                (bookingDetails.sourceAirportTerminal
                  ? ` - ${bookingDetails.sourceAirportTerminal}`
                  : '')}
            </FText>
          </View>
          <View
            style={[
              Styles.justifyContent_around(bookingDetails.duration),
              Styles.flex,
            ]}>
            <Icon.Aeroplane
              width={DP._18}
              height={DP._18}
              fill={Color.LIGHT_BLUEY_GREY}
              style={Styles.airplane}
            />
            {bookingDetails.duration && (
              <View style={Styles.durationContainer}>
                <FText style={Styles.duration}>{bookingDetails.duration}</FText>
                <View style={Styles.dot_two} />
                <FText style={Styles.duration}>{bookingDetails.stop}</FText>
              </View>
            )}
          </View>
          <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
            <FText style={Styles.time}>{bookingDetails.arrivalTime}</FText>

            <FText style={Styles.portName} numberOfLines={1}>
              {bookingDetails.destinationAirportCode +
                (bookingDetails.destinationAirportTerminal
                  ? ` - ${bookingDetails.destinationAirportTerminal}`
                  : '')}
            </FText>
          </View>
        </View>
        <View style={[Styles.flexDirectionRow, Styles.marginTop_12]}>
          <View>
            <FText style={Styles.time}>{bookingDetails.airline}</FText>
            <FText style={Styles.portName}>{bookingDetails.flightNumber}</FText>
          </View>
          <View style={Styles.alignItem_flexEnd}>
            <FText style={Styles.time}>{Strings.pnr}</FText>
            <FText style={Styles.portName}>{bookingDetails.pnr}</FText>
          </View>
        </View>
      </FTouchableOpacity>
      {!actionDisabled &&
        (rescheduleAction || cancelAction || viewRemarksAction) && (
          <ActionsInItinerary />
        )}
      {showInfo && (
        <InfoBox
          isAlert={shortlistingAction || !!notificationText}
          text={
            viewShortlistedFlightAction?.name ||
            shortlistingAction?.name ||
            notificationText
          }
          showChevron={!!shortlistingAction}
          disablePressEvent={!!notificationText}
          onPress={() =>
            onActionPress(viewShortlistedFlightAction || shortlistingAction)
          }
        />
      )}
    </View>
  );

  return (
    <View style={[Styles.flexRow, style]}>
      <View>
        {!hideIcon &&
          (timelineGreyed ? (
            <Icon.FlightItineraryGreyed
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ) : (
            <Icon.FlightItinerary
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
      {showPreBookingCard ? (
        <FlightPreBookingCard />
      ) : (
        <FlightPostBookingCard />
      )}
    </View>
  );
};

export default FlightItineraryCard;
