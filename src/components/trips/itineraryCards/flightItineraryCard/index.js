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
import ActionsInItinerary, {
  BottomBarActions,
} from '../../../../common/components/ActionsInItinerary';
import OOPTag from '../../components/OOPTag/OOPTag';
import FImage from '../../../../common/rn/FImage';
import LinearGradient from 'react-native-linear-gradient';
import {ColorMatrix} from 'react-native-color-matrix-image-filters';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';
import SoldOutTag from '../../components/soldOutTag/SoldOutTag';
import RemarksBox from '../../components/remarksBox/RemarksBox';
import {grayImageMatrix} from '../../../../utils/color/ColorMatrix';

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
  cancellationCharges,
  modificationCharges,
  reduceOpacity: isGreyedOut,
}) => {
  const uiData = showPreBookingCard ? tripRequest : bookingDetails;
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);
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

  const actionVisible =
    !actionDisabled &&
    Object.keys(BottomBarActions).reduce((acc, v) => {
      return acc || isActionEnabled(BottomBarActions[v]);
    }, false);

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

  const FlightPreBookingCard = () => (
    <View style={Styles.container}>
      <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
        <View style={[Styles.flexRowAndJustifySpaceBetween, Styles.baseline]}>
          <View style={Styles.flexRowAndJustifySpaceBetween}>
            <FText
              greyedOut={isGreyedOut}
              type={FONT_TYPE.MEDIUM}
              style={Styles.date}>
              {uiData.date}
            </FText>
            <FText
              greyedOut={isGreyedOut}
              type={FONT_TYPE.MEDIUM}
              style={
                Styles.headerMonth
              }>{`${uiData.month}'${uiData.year}`}</FText>
          </View>
          {showStatus ? (
            <TripStatus statusObj={status} />
          ) : (
            <FText
              greyedOut={isGreyedOut}
              type={FONT_TYPE.MEDIUM}
              style={Styles.slotDetail}>
              {uiData.slotDetail}
            </FText>
          )}
        </View>
        <View
          style={[Styles.flexRowAndJustifySpaceBetween, Styles.marginTop_12]}>
          <View style={Styles.flex}>
            <FText
              greyedOut={isGreyedOut}
              style={Styles.preBookingSource}
              numberOfLines={1}>
              {uiData.source}
            </FText>
            <FText greyedOut={isGreyedOut} style={Styles.preBookingPort}>
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
            <FText
              greyedOut={isGreyedOut}
              style={Styles.preBookingSource}
              numberOfLines={1}>
              {uiData.destination}
            </FText>
            <FText greyedOut={isGreyedOut} style={Styles.preBookingPort}>
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
          onPress={() => onActionPress(viewRemarksAction)}
        />
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
      {/* {actionVisible && <ActionsInItinerary hideSeperator={showInfo} />} */}
      <ActionsInItinerary
        hideSeperator={showInfo}
        actions={actions}
        actionDisabled={actionDisabled}
        onActionPress={onActionPress}
      />
    </View>
  );

  const FlightPostBookingCard = () => (
    <View style={Styles.container}>
      <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
        <View
          style={[
            Styles.flexRowAndJustifySpaceBetween,
            Styles.baseline,
            Styles.marginBottom_12,
          ]}>
          <View style={Styles.flexRowAndJustifySpaceBetween}>
            <FText
              greyedOut={isGreyedOut}
              type={FONT_TYPE.MEDIUM}
              style={Styles.date}>
              {uiData.date}
            </FText>
            <FText
              greyedOut={isGreyedOut}
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
              <FText greyedOut={isGreyedOut} style={Styles.processing}>
                {Strings.processing}
              </FText>
            </View>
          )}
          {showStatus ? (
            <TripStatus statusObj={status} />
          ) : uiData.isSoldOut ? (
            <SoldOutTag />
          ) : (
            !hideChevron && (
              <Icon.ChevronRight
                width={DP._18}
                height={DP._18}
                stroke={
                  isGreyedOut ? Color.BLUEY_GREY : Color.BATTLESHIP_GREY_TWO
                }
              />
            )
          )}
        </View>
        <View style={Styles.flightParticulars}>
          <ColorMatrix matrix={grayImageMatrix(isGreyedOut)}>
            <FImage
              style={Styles.imageStyle}
              source={{uri: uiData.airlineIcon}}
            />
          </ColorMatrix>
          <View style={Styles.nameAndNumberContainer}>
            <FText
              greyedOut={isGreyedOut}
              style={Styles.flightName}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {uiData.airline}
            </FText>
            <FText
              greyedOut={isGreyedOut}
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
              <FText
                greyedOut={isGreyedOut}
                style={Styles.flightPrice}
                type={FONT_TYPE.MEDIUM}>
                {uiData.price}
              </FText>
              {uiData.isOutOfPolicy && <OOPTag greyedOut={isGreyedOut} />}
            </View>
          ) : (
            <PriceLoader />
          )}
        </View>
        <View style={Styles.flexRowAndJustifySpaceBetween}>
          <FText greyedOut={isGreyedOut} style={Styles.time}>
            {uiData.departureTime}
          </FText>
          <Icon.Aeroplane
            width={DP._18}
            height={DP._18}
            fill={Color.LIGHT_BLUEY_GREY}
            style={Styles.airplane}
          />
          <FText greyedOut={isGreyedOut} style={Styles.time}>
            {uiData.arrivalTime}
          </FText>
        </View>
        <View
          style={[Styles.flexRowAndJustifySpaceBetween, Styles.marginTop_8]}>
          <FText greyedOut={isGreyedOut} style={Styles.portName}>
            {uiData.sourceAirportCode}
          </FText>
          <View style={Styles.durationAndStopsContainer}>
            <FText
              greyedOut={isGreyedOut}
              style={Styles.duration}
              numberOfLines={1}>
              {uiData.totalDuration}
            </FText>
            <View style={Styles.dot_two} />
            <FText
              greyedOut={isGreyedOut}
              style={Styles.stoppage}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {uiData.stop}
            </FText>
          </View>
          <FText greyedOut={isGreyedOut} style={Styles.portName}>
            {uiData.destinationAirportCode}
          </FText>
        </View>
        <View style={Styles.flexRowAndJustifySpaceBetween}>
          {!!uiData.sourceAirportTerminal && (
            <FText greyedOut={isGreyedOut} style={Styles.terminal}>
              {uiData.sourceAirportTerminal}
            </FText>
          )}
          {!!uiData.destinationAirportTerminal && (
            <FText greyedOut={isGreyedOut} style={Styles.terminal}>
              {uiData.destinationAirportTerminal}
            </FText>
          )}
        </View>
      </FTouchableOpacity>
      {(!!uiData.pnr || !!uiData.mealCount) && (
        <>
          <Separator style={Styles.separatorStyle} />
          <View style={Styles.pnrAndMealContainer}>
            {uiData.pnr && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.pnr(uiData.reduceOpacity)}>
                {Strings.pnr}:
                <FText
                  greyedOut={isGreyedOut}
                  type={FONT_TYPE.MEDIUM}>{` ${uiData.pnr}`}</FText>
              </FText>
            )}
            {!!uiData.mealCount && (
              <View style={Styles.flexRowAndAlignCenter}>
                <Icon.Meal />
                <FText style={Styles.mealsAdded}>
                  {Strings.mealsAdded(uiData.mealCount)}
                </FText>
              </View>
            )}
          </View>
        </>
      )}
      {!!modificationCharges && (
        <FText greyedOut={isGreyedOut} style={Styles.modificationChargeText}>
          {Strings.includeModificationCharge}
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}>{` ${modificationCharges}.`}</FText>
        </FText>
      )}
      {!!cancellationCharges && (
        <FText greyedOut={isGreyedOut} style={Styles.modificationChargeText}>
          {Strings.includeCancellationCharge}
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}>{` ${cancellationCharges}.`}</FText>
        </FText>
      )}
      {viewRemarksAction && !!remarks && (
        <>
          {(cancellationCharges || modificationCharges) && (
            <Separator style={Styles.separatorContainerStyle} />
          )}
          <RemarksBox
            title={remarks.title}
            remarks={remarks.text}
            roundBottomCorners={!actionVisible}
            onPress={() => onActionPress(viewRemarksAction)}
          />
        </>
      )}
      {showInfo && (
        <>
          {(cancellationCharges || modificationCharges) && (
            <Separator style={Styles.separatorContainerStyle} />
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
      {/* {actionVisible && (
        <ActionsInItinerary
          hideSeperator={showInfo || modificationCharges || cancellationCharges}
        />
      )} */}
      <ActionsInItinerary
        hideSeperator={showInfo || modificationCharges || cancellationCharges}
        actions={actions}
        actionDisabled={actionDisabled}
        onActionPress={onActionPress}
      />
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
