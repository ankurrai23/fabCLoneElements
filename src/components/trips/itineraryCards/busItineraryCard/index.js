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
import {BusSubtripActions} from '../../../../utils/SubTripActions';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import {getStatusObject} from '../../../../utils/Utils';

const PreBookingCard = ({onCardPress, tripRequest, showStatus, status}) => {
  return (
    <FTouchableOpacity
      activeOpacity={tripRequest.reduceOpacity ? 0.6 : 1}
      style={Styles.card(tripRequest.reduceOpacity)}
      onPress={onCardPress}>
      <View style={[Styles.flexDirectionRow, Styles.baseline]}>
        <View style={Styles.flexDirectionRow}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {tripRequest.date}
          </FText>
          <FText style={Styles.headerMonth}>{`${tripRequest.month}`}</FText>
        </View>
        {showStatus ? (
          <TripStatus statusObj={status} />
        ) : (
          <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
            {tripRequest.slotDetail}
          </FText>
        )}
      </View>

      <View style={[Styles.flexDirectionRow, Styles.marginTop_12]}>
        <View style={Styles.width_48}>
          <FText style={Styles.heading} numberOfLines={1}>
            {tripRequest.source}
          </FText>
          {(tripRequest?.sourceLocality ||
            tripRequest?.destinationLocality) && (
            <FText style={Styles.details} numberOfLines={1}>
              {tripRequest.sourceLocality}
            </FText>
          )}
        </View>
        <View style={[Styles.alignItem_flexEnd, Styles.width_48]}>
          <FText style={Styles.heading} numberOfLines={1}>
            {tripRequest.destination}
          </FText>
          {(tripRequest?.sourceLocality ||
            tripRequest?.destinationLocality) && (
            <FText style={Styles.details} numberOfLines={1}>
              {tripRequest.destinationLocality}
            </FText>
          )}
        </View>
      </View>
    </FTouchableOpacity>
  );
};

const PostBookingCard = ({
  onCardPress,
  reduceOpacity,
  bookingDetails,
  showStatus,
  status,
  hideChevron,
}) => {
  return (
    <FTouchableOpacity
      activeOpacity={reduceOpacity ? 0.6 : 1}
      style={Styles.card(reduceOpacity)}
      onPress={onCardPress}>
      <View style={[Styles.flexDirectionRow, Styles.baseline]}>
        <View style={Styles.flexDirectionRow}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {bookingDetails.date}
          </FText>
          <FText style={Styles.headerMonth}>{`${bookingDetails.month}`}</FText>
        </View>
        {showStatus && status ? (
          <TripStatus statusObj={getStatusObject(status)} />
        ) : (
          <View style={[Styles.flexDirectionRow, Styles.baseline]}>
            {!hideChevron && (
              <Icon.ChevronRight
                width={DP._18}
                height={DP._18}
                stroke={Color.BATTLESHIP_GREY_TWO}
              />
            )}
          </View>
        )}
      </View>

      <View style={Styles.marginTop_12}>
        <View style={Styles.flexDirectionRow}>
          <FText
            style={[Styles.heading, Styles.width_40, Styles.textAlign_left]}
            numberOfLines={1}>
            {bookingDetails.departureTime}
          </FText>
          <FText
            style={[Styles.duration, Styles.width_20, Styles.textAlign_center]}>
            {bookingDetails.estimateDuration}
          </FText>
          <FText
            style={[Styles.heading, Styles.width_40, Styles.textAlign_right]}
            numberOfLines={1}>
            {bookingDetails.arrivalTime}
          </FText>
        </View>
        <View style={Styles.flexDirectionRow}>
          <View style={Styles.width_40}>
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText style={Styles.details} numberOfLines={1}>
                {bookingDetails.sourceLocality}
              </FText>
            )}
            {(bookingDetails?.source || bookingDetails?.destination) && (
              <FText
                style={[Styles.details, Styles.textAlign_left]}
                numberOfLines={1}>
                {bookingDetails.source}
              </FText>
            )}
          </View>
          <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText style={Styles.details} numberOfLines={1}>
                {bookingDetails.destinationLocality}
              </FText>
            )}
            {(bookingDetails?.destination || bookingDetails?.source) && (
              <FText style={Styles.details} numberOfLines={1}>
                {bookingDetails.destination}
              </FText>
            )}
          </View>
        </View>
      </View>

      <View style={Styles.marginTop_12}>
        <FText style={Styles.heading} numberOfLines={1}>
          {bookingDetails?.busName ?? Strings.busNa}
        </FText>
        {(bookingDetails.busNumber || bookingDetails.pnr) && (
          <View style={Styles.flexDirectionRow}>
            <FText
              style={[Styles.details, Styles.textAlign_left, Styles.width_40]}
              numberOfLines={1}>
              {bookingDetails.busNumber}
            </FText>

            <FText
              style={[Styles.details, Styles.textAlign_right, Styles.width_40]}
              numberOfLines={1}>
              {Strings.pnr}: {bookingDetails.pnr}
            </FText>
          </View>
        )}
        {bookingDetails?.busType && (
          <FText style={Styles.details} numberOfLines={1}>
            {bookingDetails.busType}
          </FText>
        )}
      </View>
    </FTouchableOpacity>
  );
};

const BusItineraryCard = ({
  tripRequest,
  onActionPress,
  onCardPress,
  style,
  hideIcon,
  showLine,
  showInfo,
  showStatus,
  status,
  timelineGreyed,
  showPreBookingCard,
  bookingDetails,
  actions,
  notificationText,
  actionDisabled,
  hideChevron,
}) => {
  console.log({showPreBookingCard, tripRequest});
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(BusSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(BusSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);

  const ActionsInItinerary = () => (
    <>
      <Separator style={Styles.actionsSeperator} />
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
            <Icon.BusItineraryGreyed
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ) : (
            <Icon.BusItinerary
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
        {showPreBookingCard ? (
          <PreBookingCard
            onCardPress={onCardPress}
            tripRequest={tripRequest}
            showStatus={showStatus}
            status={status}
          />
        ) : (
          <PostBookingCard
            reduceOpacity={tripRequest.reduceOpacity}
            onCardPress={onCardPress}
            bookingDetails={bookingDetails}
            showStatus={showStatus}
            status={bookingDetails.busBookingStatus}
            hideChevron={hideChevron}
          />
        )}
        {!actionDisabled &&
          (rescheduleAction || cancelAction || viewRemarksAction) && (
            <ActionsInItinerary />
          )}
        {showInfo && (
          <InfoBox
            isAlert={!!notificationText}
            text={notificationText}
            showChevron={false}
            disablePressEvent={!!notificationText}
          />
        )}
      </View>
    </View>
  );
};

export default BusItineraryCard;
