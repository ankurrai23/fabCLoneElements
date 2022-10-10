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
import {BusSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const PreBookingCard = ({onCardPress, tripRequest, showStatus, status}) => {
  return (
    <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
      <View style={[Styles.flexDirectionRow, Styles.baseline]}>
        <FText>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {tripRequest.date}
          </FText>
          <FText
            style={{
              color: Color.BLUEY_GREY,
              fontSize: DP._12,
            }}>{` ${tripRequest.month}`}</FText>
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
        <View style={Styles.width_48}>
          <FText style={Styles.portName} numberOfLines={1}>
            {tripRequest?.sourceStationCode}
          </FText>

          {(tripRequest?.destinationCity || tripRequest?.sourceCity) && (
            <FText style={Styles.time} numberOfLines={1}>
              {tripRequest.sourceCity}
            </FText>
          )}
          {(tripRequest?.arrivalDate || tripRequest?.departureDate) && (
            <FText style={Styles.time} numberOfLines={1}>
              {tripRequest.departureDate}
            </FText>
          )}
        </View>
        <View style={[Styles.alignItem_flexEnd, Styles.width_48]}>
          <FText style={Styles.portName} numberOfLines={1}>
            {tripRequest?.destinationStationCode}
          </FText>
          {(tripRequest?.destinationCity || tripRequest?.sourceCity) && (
            <FText style={Styles.time} numberOfLines={1}>
              {tripRequest.destinationCity}
            </FText>
          )}
          {(tripRequest.arrivalDate || tripRequest.departureDate) && (
            <FText style={Styles.time} numberOfLines={1}>
              {tripRequest.arrivalDate}
            </FText>
          )}
        </View>
      </View>
    </FTouchableOpacity>
  );
};

const PostBookingCard = ({
  onCardPress,
  bookingDetails,
  showStatus,
  status,
  hideChevron,
}) => {
  return (
    <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
      <View style={[Styles.flexDirectionRow, Styles.baseline]}>
        <FText>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {bookingDetails.date}
          </FText>
          <FText
            style={{
              color: Color.BLUEY_GREY,
              fontSize: DP._12,
            }}>{` ${bookingDetails.month}`}</FText>
        </FText>
        {showStatus ? (
          <TripStatus statusObj={status} />
        ) : (
          <View style={[Styles.flexDirectionRow, Styles.baseline]}>
            {hideChevron && (
              <Icon.ChevronRight
                width={DP._18}
                height={DP._18}
                stroke={Color.BATTLESHIP_GREY_TWO}
              />
            )}
          </View>
        )}
      </View>

      <View style={[Styles.marginTop_12]}>
        <View style={[Styles.flexDirectionRow]}>
          <FText
            style={[Styles.portName, Styles.width_40, Styles.textAlign_left]}
            numberOfLines={1}>
            {bookingDetails.sourceStationCode}
          </FText>
          <FText
            style={[
              Styles.duration,
              Styles.width_20,
              Styles.textAlign_center,
              Styles.selfAlign_center,
            ]}>
            {bookingDetails.duration}
          </FText>
          <FText
            style={[Styles.portName, Styles.width_40, Styles.textAlign_right]}
            numberOfLines={1}>
            {bookingDetails.destinationStationCode}
          </FText>
        </View>
        <View style={[Styles.flexDirectionRow]}>
          <View style={Styles.width_40}>
            <FText style={Styles.time} numberOfLines={1}>
              {bookingDetails.sourceCity}
            </FText>
            {(bookingDetails?.departureTime || bookingDetails?.arrivalTime) && (
              <FText style={Styles.time} numberOfLines={1}>
                {bookingDetails.departureTime}
              </FText>
            )}
            {bookingDetails?.sourcePF && (
              <FText style={Styles.time} numberOfLines={1}>
                {Strings.platform}: {bookingDetails.sourcePF}
              </FText>
            )}
          </View>
          <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
            <FText style={Styles.time} numberOfLines={1}>
              {bookingDetails.destinationCity}
            </FText>
            {(bookingDetails?.departureTime || bookingDetails?.arrivalTime) && (
              <FText style={Styles.time} numberOfLines={1}>
                {bookingDetails.arrivalTime}
              </FText>
            )}
            {bookingDetails?.destinationPF && (
              <FText style={Styles.time} numberOfLines={1}>
                {Strings.platform}: {bookingDetails.destinationPF}
              </FText>
            )}
          </View>
        </View>
      </View>

      <View style={Styles.marginTop_12}>
        <FText style={Styles.portName} numberOfLines={1}>
          {bookingDetails?.trainName ?? Strings.trainNa}
        </FText>
        {bookingDetails?.pnr && (
          <FText style={Styles.time} numberOfLines={1}>
            {Strings.pnr}: {bookingDetails.pnr}
          </FText>
        )}
        {bookingDetails?.class && (
          <FText style={Styles.time} numberOfLines={1}>
            {Strings.class}: {bookingDetails.class}
          </FText>
        )}
        {bookingDetails?.berth && (
          <FText style={Styles.time} numberOfLines={1}>
            {Strings.berth}: {bookingDetails.berth}
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
  hideChevron,
}) => {
  console.log({showPreBookingCard, tripRequest});
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(BusSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(BusSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);
  const shortlistingAction = isActionEnabled(
    BusSubtripActions.SHORTLIST_FLIGHT_TRIPS,
  );
  const viewShortlistedFlightAction = isActionEnabled(
    BusSubtripActions.VIEW_SHORTLISTED_FLIGHT_TRIPS,
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
        {showPreBookingCard ? (
          <PreBookingCard
            onCardPress={onCardPress}
            tripRequest={tripRequest}
            showStatus={showStatus}
            status={status}
          />
        ) : (
          <PostBookingCard
            onCardPress={onCardPress}
            bookingDetails={bookingDetails}
            showStatus={showStatus}
            status={status}
            hideChevron={hideChevron}
          />
        )}
        {(rescheduleAction || cancelAction || viewRemarksAction) && (
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
    </View>
  );
};

export default BusItineraryCard;
