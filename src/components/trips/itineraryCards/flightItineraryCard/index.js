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
import OOPTag from '../../components/OOPTag/OOPTag';
import FImage from '../../../../common/rn/FImage';
import LinearGradient from 'react-native-linear-gradient';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';

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

  const animatedComponent = (cardColor, secondaryColor) => {
    return (
      <LinearGradient
        style={Styles.animatedComponent}
        colors={[cardColor, secondaryColor, cardColor]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />
    );
  };

  const PriceLoader = () => {
    return (
      <PlaceholderContainer
        animatedComponent={animatedComponent(
          Color.VERY_LIGHT_PINK,
          Color.WHITE,
        )}
        duration={1500}
        delay={500}>
        <Placeholder style={Styles.priceLoading} />
      </PlaceholderContainer>
    );
  };

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
          <View style={Styles.flexDirectionRow}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
              {tripRequest.date}
            </FText>
            <FText
              style={Styles.headerMonth}>{`${tripRequest.monthAndYear}`}</FText>
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
          <View style={Styles.flex}>
            <FText style={Styles.time} numberOfLines={1}>
              {tripRequest.source}
            </FText>
            <FText style={Styles.portName}>
              {tripRequest.sourceAirportCode}
            </FText>
          </View>
          <View style={[Styles.justifyContent_around, Styles.flex]}>
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
        <View
          style={[
            Styles.flexDirectionRow,
            Styles.baseline,
            Styles.marginBottom_12,
          ]}>
          <View style={Styles.flexDirectionRow}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
              {bookingDetails.date}
            </FText>
            <FText
              style={
                Styles.headerMonth
              }>{`${bookingDetails.monthAndYear}`}</FText>
          </View>
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
        <View style={Styles.flightParticulars}>
          <FImage
            style={Styles.imageStyle}
            source={{uri: bookingDetails.airlineIcon}}
          />
          <View style={Styles.nameAndNumberContainer}>
            <FText
              style={Styles.flightName}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {bookingDetails.airline}
            </FText>
            <FText
              style={Styles.flightNumber}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {bookingDetails.airlineCode}-{bookingDetails.flightNumber}
            </FText>
          </View>
          {bookingDetails.isPriceFetched ? (
            <View>
              <FText style={Styles.flightPrice} type={FONT_TYPE.REGULAR}>
                {bookingDetails.price}
              </FText>
              {bookingDetails.isOutOfPolicy && (
                <OOPTag style={Styles.oopMargin} />
              )}
            </View>
          ) : (
            <PriceLoader />
          )}
        </View>
        <View style={Styles.flexDirectionRow}>
          <View style={Styles.flex}>
            <FText style={Styles.time}>{bookingDetails.departureTime}</FText>
            <FText style={Styles.portName} numberOfLines={1}>
              {bookingDetails.sourceAirportCode +
                (bookingDetails.sourceAirportTerminal
                  ? ` - ${bookingDetails.sourceAirportTerminal}`
                  : '')}
            </FText>
          </View>
          <View style={[Styles.justifyContent_around, Styles.flex]}>
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
      </FTouchableOpacity>
      {!!bookingDetails.pnr && (
        <>
          <Separator style={Styles.seperatorStyle} />
          <FText style={Styles.pnr}>
            {Strings.pnr}:
            <FText type={FONT_TYPE.MEDIUM}>{` ${bookingDetails.pnr}`}</FText>
          </FText>
        </>
      )}
      {!!bookingDetails.modificationCharge && (
        <>
          <FText style={Styles.modificationChargeText}>
            {Strings.includeModificationCharge}
            <FText
              type={
                FONT_TYPE.MEDIUM
              }>{` ${bookingDetails.modificationCharge}.`}</FText>
          </FText>
          <Separator style={Styles.seperatorStyle} />
        </>
      )}
      {!!bookingDetails.reasonDetails && (
        <View style={Styles.reasonBox}>
          <FText style={Styles.reasonTitle} type={FONT_TYPE.MEDIUM}>
            {bookingDetails.reasonDetails.title}
          </FText>
          <FText style={Styles.reasonText}>
            {bookingDetails.reasonDetails.text}
          </FText>
        </View>
      )}
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
