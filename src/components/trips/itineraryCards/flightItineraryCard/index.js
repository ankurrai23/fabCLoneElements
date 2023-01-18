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
import SoldOutTag from '../../components/soldOutTag/SoldOutTag';
import RemarksBox from '../../components/remarksBox/RemarksBox';

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
  isProcessing,
  remarks,
}) => {
  const uiData = showPreBookingCard ? tripRequest : bookingDetails;
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
  const editAction = isActionEnabled(FlightSubTripActions.EDIT);
  const removeAction = isActionEnabled(FlightSubTripActions.REMOVE);
  const refundStatus = isActionEnabled(FlightSubTripActions.REFUND_STATUS);
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

  const actionVisible =
    !actionDisabled &&
    (rescheduleAction ||
      cancelAction ||
      editAction ||
      removeAction ||
      refundStatus);

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

  const ActionsInItinerary = ({hideSeparator}) => (
    <>
      {!hideSeparator && <Separator style={Styles.separatorStyle} />}
      <View style={Styles.actionContainer}>
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
        {removeAction && (
          <FTouchableOpacity
            onPress={() => onActionPress(removeAction)}
            style={Styles.flexRowAndAlignCenter}>
            <Icon.Trash width={DP._16} height={DP._16} strokeWidth={1.5} />
            <FText style={Styles.cancel}>{removeAction.name}</FText>
          </FTouchableOpacity>
        )}
        {editAction && (
          <FTouchableOpacity
            onPress={() => onActionPress(editAction)}
            style={Styles.primaryButtonStyle}>
            <Icon.Edit />
            <FText style={Styles.reschedule}>{editAction.name}</FText>
          </FTouchableOpacity>
        )}
        {!!refundStatus && (
          <FTouchableOpacity
            onPress={() => onActionPress(refundStatus)}
            style={Styles.primaryButtonStyle}>
            <Icon.Refund />
            <FText style={Styles.reschedule}>{refundStatus.name}</FText>
          </FTouchableOpacity>
        )}
      </View>
    </>
  );

  const FlightPreBookingCard = () => (
    <View style={Styles.container}>
      <FTouchableOpacity
        activeOpacity={uiData.reduceOpacity ? 0.6 : 1}
        style={Styles.card(uiData.reduceOpacity)}
        onPress={onCardPress}>
        <View style={[Styles.flexRowAndJustifySpaceBetween, Styles.baseline]}>
          <View style={Styles.flexRowAndJustifySpaceBetween}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
              {uiData.date}
            </FText>
            <FText
              type={FONT_TYPE.MEDIUM}
              style={
                Styles.headerMonth
              }>{`${uiData.month}'${uiData.year}`}</FText>
          </View>
          {showStatus ? (
            <TripStatus statusObj={status} />
          ) : (
            <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
              {uiData.slotDetail}
            </FText>
          )}
        </View>
        <View
          style={[Styles.flexRowAndJustifySpaceBetween, Styles.marginTop_12]}>
          <View style={Styles.flex}>
            <FText style={Styles.preBookingSource} numberOfLines={1}>
              {uiData.source}
            </FText>
            <FText style={Styles.preBookingPort}>
              {uiData.sourceAirportCode}
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
            <FText style={Styles.preBookingSource} numberOfLines={1}>
              {uiData.destination}
            </FText>
            <FText style={Styles.preBookingPort}>
              {uiData.destinationAirportCode}
            </FText>
          </View>
        </View>
      </FTouchableOpacity>
      {viewRemarksAction && !!remarks && (
        <RemarksBox
          title={remarks.title}
          remarks={remarks.text}
          roundBottomCorners={!actionVisible}
        />
      )}
      {actionVisible && (
        <ActionsInItinerary hideSeparator={viewRemarksAction} />
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
        activeOpacity={uiData.reduceOpacity ? 0.6 : 1}
        style={Styles.card(uiData.reduceOpacity)}
        onPress={onCardPress}>
        <View
          style={[
            Styles.flexRowAndJustifySpaceBetween,
            Styles.baseline,
            Styles.marginBottom_12,
          ]}>
          <View style={Styles.flexRowAndJustifySpaceBetween}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
              {uiData.date}
            </FText>
            <FText
              type={FONT_TYPE.MEDIUM}
              style={
                Styles.headerMonth
              }>{`${uiData.month}'${uiData.year}`}</FText>
          </View>
          {isProcessing && (
            <View style={Styles.flexRowAndAlignCenter}>
              <Icon.Reschedule
                width={DP._14}
                height={DP._14}
                stroke={Color.GREY_PURPLE}
              />
              <FText style={Styles.processing}>{Strings.processing}</FText>
            </View>
          )}
          {showStatus && uiData.flightBookingStatus ? (
            <TripStatus
              statusObj={getStatusObject(uiData.flightBookingStatus)}
            />
          ) : uiData.isSoldOut ? (
            <SoldOutTag />
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
            source={{uri: uiData.airlineIcon}}
          />
          <View style={Styles.nameAndNumberContainer}>
            <FText
              style={Styles.flightName}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {uiData.airline}
            </FText>
            <FText
              style={Styles.flightNumber}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {`${uiData.airlineCode ? `${uiData.airlineCode}-` : ''}${
                uiData.flightNumber
              }`}
            </FText>
          </View>
          {uiData.isPriceFetched ? (
            <View style={Styles.priceContainer}>
              <FText style={Styles.flightPrice} type={FONT_TYPE.MEDIUM}>
                {uiData.price}
              </FText>
              {uiData.isOutOfPolicy && <OOPTag />}
            </View>
          ) : (
            <PriceLoader />
          )}
        </View>
        <View style={Styles.flexRowAndJustifySpaceBetween}>
          <FText style={Styles.time}>{uiData.departureTime}</FText>
          <Icon.Aeroplane
            width={DP._18}
            height={DP._18}
            fill={Color.LIGHT_BLUEY_GREY}
            style={Styles.airplane}
          />
          <FText style={Styles.time}>{uiData.arrivalTime}</FText>
        </View>
        <View
          style={[Styles.flexRowAndJustifySpaceBetween, Styles.marginTop_8]}>
          <FText style={Styles.portName}>{uiData.sourceAirportCode}</FText>
          <View style={Styles.durationAndStopsContainer}>
            <FText style={Styles.duration} numberOfLines={1}>
              {uiData.totalDuration}
            </FText>
            <View style={Styles.dot_two} />
            <FText
              style={Styles.stoppage}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {uiData.stop}
            </FText>
          </View>
          <FText style={Styles.portName}>{uiData.destinationAirportCode}</FText>
        </View>
        <View style={Styles.flexRowAndJustifySpaceBetween}>
          {uiData.sourceAirportTerminal && (
            <FText style={Styles.terminal}>
              {uiData.sourceAirportTerminal}
            </FText>
          )}
          {uiData.destinationAirportTerminal && (
            <FText style={Styles.terminal}>
              {uiData.destinationAirportTerminal}
            </FText>
          )}
        </View>
      </FTouchableOpacity>
      {!!uiData.pnr && (
        <>
          <Separator style={Styles.separatorStyle} />
          <FText style={Styles.pnr(uiData.reduceOpacity)}>
            {Strings.pnr}:
            <FText type={FONT_TYPE.MEDIUM}>{` ${uiData.pnr}`}</FText>
          </FText>
        </>
      )}
      {!!uiData.modificationCharges && (
        <FText style={Styles.modificationChargeText}>
          {Strings.includeModificationCharge}
          <FText
            type={FONT_TYPE.MEDIUM}>{` ${uiData.modificationCharges}.`}</FText>
        </FText>
      )}
      {!!uiData.cancellationCharges && (
        <FText style={Styles.modificationChargeText}>
          {Strings.includeCancellationCharge}
          <FText
            type={FONT_TYPE.MEDIUM}>{` ${uiData.cancellationCharges}.`}</FText>
        </FText>
      )}
      {viewRemarksAction && !!remarks && (
        <>
          {(!!uiData.cancellationCharges || !!uiData.modificationCharges) && (
            <Separator
              style={Styles.seperatorStyle}
              containerStyle={Styles.separatorContainerStyle}
            />
          )}
          <RemarksBox
            title={remarks.title}
            remarks={remarks.text}
            roundBottomCorners={!actionVisible}
          />
        </>
      )}
      {showInfo && (
        <>
          {(!!uiData.cancellationCharges ||
            !!uiData.modificationCharges ||
            !!viewRemarksAction) && (
            <Separator
              style={Styles.seperatorStyle}
              containerStyle={Styles.separatorContainerStyle}
            />
          )}
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
        </>
      )}
      {actionVisible && (
        <ActionsInItinerary
          hideSeparator={
            viewRemarksAction ||
            showInfo ||
            uiData.modificationCharges ||
            uiData.cancellationCharges
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
      {showPreBookingCard && !uiData.price ? (
        <FlightPreBookingCard />
      ) : (
        <FlightPostBookingCard />
      )}
    </View>
  );
};

export default FlightItineraryCard;
