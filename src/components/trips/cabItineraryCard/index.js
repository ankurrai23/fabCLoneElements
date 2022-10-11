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
import {CabSubtripActions} from '../../../utils/SubTripActions';
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
          tripRequest?.pickupTime && (
            <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
              {Strings.pickupTime} {tripRequest.pickupTime}
            </FText>
          )
        )}
      </View>

      <View style={[Styles.flexDirectionRow, Styles.marginTop_12]}>
        <View style={{width: '48%'}}>
          <FText style={Styles.portName} numberOfLines={1}>
            {tripRequest.source}
          </FText>
          <FText style={Styles.time} numberOfLines={1}>
            {tripRequest.sourceStop}
          </FText>
        </View>
        <View style={[Styles.alignItem_flexEnd, {width: '48%'}]}>
          <FText style={Styles.portName} numberOfLines={1}>
            {tripRequest.destination}
          </FText>
          <FText style={Styles.time} numberOfLines={1}>
            {tripRequest.destinationStop}
          </FText>
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

      <View style={[Styles.marginTop_12]}>
        <View style={[Styles.flexDirectionRow]}>
          <FText
            style={[Styles.portName, Styles.width_40, Styles.textAlign_left]}
            numberOfLines={1}>
            {bookingDetails.source}
          </FText>
          <FText
            style={[Styles.duration, Styles.width_20, Styles.textAlign_center]}>
            {bookingDetails.duration}
          </FText>
          <FText
            style={[Styles.portName, Styles.width_40, Styles.textAlign_right]}
            numberOfLines={1}>
            {bookingDetails.destination}
          </FText>
        </View>
        <View style={[Styles.flexDirectionRow]}>
          <View style={[Styles.width_40, Styles.textAlign_left]}>
            {(bookingDetails?.sourceStop ||
              bookingDetails?.destinationStop) && (
              <FText style={Styles.time} numberOfLines={1}>
                {bookingDetails.sourceStop}
              </FText>
            )}
            {(bookingDetails?.arrivalTime || bookingDetails?.departureTime) && (
              <FText style={Styles.time}>{bookingDetails.departureTime}</FText>
            )}
          </View>
          <View
            style={[
              Styles.alignItem_flexEnd,
              Styles.width_40,
              Styles.textAlign_right,
            ]}>
            {(bookingDetails?.sourceStop ||
              bookingDetails?.destinationStop) && (
              <FText style={Styles.time} numberOfLines={1}>
                {bookingDetails.destinationStop}
              </FText>
            )}
            {(bookingDetails?.arrivalTime || bookingDetails?.departureTime) && (
              <FText style={Styles.time}>{bookingDetails.arrivalTime}</FText>
            )}
          </View>
        </View>
      </View>

      <View style={Styles.marginTop_12}>
        <FText style={Styles.portName} numberOfLines={1}>
          {bookingDetails?.carName ?? Strings.carNa}
        </FText>
        {bookingDetails?.carNumber && (
          <FText style={Styles.time} numberOfLines={1}>
            {bookingDetails.carNumber}
          </FText>
        )}
        {bookingDetails.carInfo && (
          <FText style={Styles.time} numberOfLines={1}>
            {bookingDetails.carInfo}
          </FText>
        )}
        {bookingDetails?.bookingId && (
          <FText style={Styles.time} numberOfLines={1}>
            {Strings.bookingId}: {bookingDetails.bookingId}
          </FText>
        )}
      </View>

      {(bookingDetails?.driverContact || bookingDetails?.driverName) && (
        <>
          <Separator
            style={{
              marginTop: DP._12,
              backgroundColor: Color.LIGHT_PERIWINKLE,
            }}
          />
          <View style={Styles.marginTop_12}>
            {bookingDetails?.driverName && (
              <View style={Styles.flexDirectionRow}>
                <View style={Styles.flowRow}>
                  <Icon.Person width={DP._16} height={DP._16} />
                  <FText style={Styles.detailLableStyle}>
                    {Strings.driverName}
                  </FText>
                </View>
                <FText
                  style={[
                    Styles.fontSize_12,
                    Styles.width_50,
                    Styles.textAlign_right,
                  ]}
                  numberOfLines={1}>
                  {bookingDetails.driverName}
                </FText>
              </View>
            )}
            {bookingDetails?.driverContact && (
              <View style={[Styles.flexDirectionRow, Styles.alignItem_flexEnd]}>
                <View
                  style={[
                    Styles.flowRow,
                    bookingDetails?.driverName && Styles.marginTop_12,
                  ]}>
                  <Icon.PhoneIcon width={DP._16} height={DP._16} />
                  <FText style={Styles.detailLableStyle}>
                    {Strings.phoneNo}
                  </FText>
                </View>
                <FText
                  style={[
                    Styles.driverContact,
                    Styles.width_50,
                    Styles.textAlign_right,
                  ]}
                  numberOfLines={1}>
                  {bookingDetails.driverContact}
                </FText>
              </View>
            )}
          </View>
        </>
      )}
    </FTouchableOpacity>
  );
};

const cabItineraryCard = ({
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

  const rescheduleAction = isActionEnabled(CabSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(CabSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(CabSubtripActions.VIEW_REMARKS);
  const shortlistingAction = isActionEnabled(
    CabSubtripActions.SHORTLIST_FLIGHT_TRIPS,
  );
  const viewShortlistedFlightAction = isActionEnabled(
    CabSubtripActions.VIEW_SHORTLISTED_FLIGHT_TRIPS,
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
            <Icon.CabItineraryGreyed
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ) : (
            <Icon.CabItinerary
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

export default cabItineraryCard;
