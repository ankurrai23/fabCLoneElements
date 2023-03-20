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
import RemarksBox from '../../components/remarksBox/RemarksBox';
import ActionsInItinerary, {
  BottomBarActions,
} from '../../../../common/components/ActionsInItinerary';

const PreBookingCard = ({
  onCardPress,
  tripRequest,
  showStatus,
  status,
  isGreyedOut,
}) => {
  return (
    <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
      <View style={[Styles.flexDirectionRow, Styles.baseline]}>
        <View style={Styles.flexDirectionRow}>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {tripRequest.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${tripRequest.month}'${tripRequest.year}`}</FText>
        </View>
        {showStatus ? (
          <TripStatus statusObj={status} />
        ) : (
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.slotDetail}>
            {tripRequest.slotDetail}
          </FText>
        )}
      </View>

      <View style={[Styles.flexDirectionRow, Styles.marginTop_12]}>
        <View style={Styles.width_48}>
          <FText
            greyedOut={isGreyedOut}
            style={Styles.heading}
            numberOfLines={1}>
            {tripRequest.source}
          </FText>
          {(tripRequest?.sourceLocality ||
            tripRequest?.destinationLocality) && (
            <FText
              greyedOut={isGreyedOut}
              style={Styles.details}
              numberOfLines={1}>
              {tripRequest.sourceLocality}
            </FText>
          )}
        </View>
        <View style={[Styles.alignItem_flexEnd, Styles.width_48]}>
          <FText
            greyedOut={isGreyedOut}
            style={Styles.heading}
            numberOfLines={1}>
            {tripRequest.destination}
          </FText>
          {(tripRequest?.sourceLocality ||
            tripRequest?.destinationLocality) && (
            <FText
              greyedOut={isGreyedOut}
              style={Styles.details}
              numberOfLines={1}>
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
  isGreyedOut,
  bookingDetails,
  showStatus,
  status,
  hideChevron,
}) => {
  const renderDate = (departureDate, arrivalDate) => {
    const depArrDateSame = departureDate.date === arrivalDate.date;
    const depArrMonthSame = departureDate.month === arrivalDate.month;
    if (depArrMonthSame && depArrDateSame) {
      return (
        <>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
        </>
      );
    }
    if (depArrMonthSame && !depArrDateSame) {
      return (
        <>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText greyedOut={isGreyedOut} style={Styles.hyphen}>
            {' - '}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
        </>
      );
    }
    if (!depArrMonthSame) {
      return (
        <>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
          <FText greyedOut={isGreyedOut} style={Styles.hyphen}>
            {' - '}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${arrivalDate.month}'${arrivalDate.year}`}</FText>
        </>
      );
    }
  };
  return (
    <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
      <View style={[Styles.flexDirectionRow, Styles.baseline]}>
        <View style={Styles.flexDirectionRow}>
          {renderDate(bookingDetails.departureDate, bookingDetails.arrivalDate)}
        </View>
        {showStatus && status ? (
          <TripStatus statusObj={getStatusObject(status)} />
        ) : (
          <View style={[Styles.flexDirectionRow, Styles.baseline]}>
            {!hideChevron && (
              <Icon.ChevronRight
                width={DP._18}
                height={DP._18}
                stroke={
                  isGreyedOut ? Color.BLUEY_GREY : Color.BATTLESHIP_GREY_TWO
                }
              />
            )}
          </View>
        )}
      </View>

      <View style={Styles.marginTop_12}>
        <View style={Styles.flexDirectionRow}>
          <FText
            greyedOut={isGreyedOut}
            style={[Styles.heading, Styles.width_40, Styles.textAlign_left]}
            numberOfLines={1}>
            {bookingDetails.departureTime}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            style={[Styles.duration, Styles.width_20, Styles.textAlign_center]}>
            {bookingDetails.estimateDuration}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            style={[Styles.heading, Styles.width_40, Styles.textAlign_right]}
            numberOfLines={1}>
            {bookingDetails.arrivalTime}
          </FText>
        </View>
        <View style={Styles.flexDirectionRow}>
          <View style={Styles.width_40}>
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.details}
                numberOfLines={1}>
                {bookingDetails.sourceLocality}
              </FText>
            )}
            {(bookingDetails?.source || bookingDetails?.destination) && (
              <FText
                greyedOut={isGreyedOut}
                style={[Styles.details, Styles.textAlign_left]}
                numberOfLines={1}>
                {bookingDetails.source}
              </FText>
            )}
          </View>
          <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.details}
                numberOfLines={1}>
                {bookingDetails.destinationLocality}
              </FText>
            )}
            {(bookingDetails?.destination || bookingDetails?.source) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.details}
                numberOfLines={1}>
                {bookingDetails.destination}
              </FText>
            )}
          </View>
        </View>
      </View>

      <View style={Styles.marginTop_12}>
        <FText greyedOut={isGreyedOut} style={Styles.heading} numberOfLines={1}>
          {bookingDetails?.busName ?? Strings.busNa}
        </FText>
        {(bookingDetails.busNumber || bookingDetails.pnr) && (
          <View style={Styles.flexDirectionRow}>
            <FText
              greyedOut={isGreyedOut}
              style={[Styles.details, Styles.textAlign_left, Styles.width_40]}
              numberOfLines={1}>
              {bookingDetails.busNumber}
            </FText>

            <FText
              greyedOut={isGreyedOut}
              style={[Styles.details, Styles.textAlign_right, Styles.width_40]}
              numberOfLines={1}>
              {Strings.pnr}: {bookingDetails.pnr}
            </FText>
          </View>
        )}
        {bookingDetails?.busType && (
          <FText
            greyedOut={isGreyedOut}
            style={Styles.details}
            numberOfLines={1}>
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
  remarks,
  actions,
  notificationText,
  actionDisabled,
  hideChevron,
  reduceOpacity,
}) => {
  const uiData = showPreBookingCard ? tripRequest : bookingDetails;
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);
  const sameMonthDates =
    uiData?.arrivalDate?.month === uiData?.departureDate?.month;

  const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);

  const actionsVisible =
    !actionDisabled &&
    Object.keys(BottomBarActions).reduce((acc, v) => {
      return acc || isActionEnabled(BottomBarActions[v]);
    }, false);

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
            isGreyedOut={reduceOpacity}
            tripRequest={uiData}
            showStatus={showStatus}
            status={status}
          />
        ) : (
          <PostBookingCard
            isGreyedOut={reduceOpacity}
            onCardPress={onCardPress}
            bookingDetails={uiData}
            showStatus={showStatus}
            status={uiData.busBookingStatus}
            hideChevron={hideChevron}
            sameMonthDates={sameMonthDates}
          />
        )}
        {viewRemarksAction && !!remarks && (
          <RemarksBox
            title={remarks.title}
            remarks={remarks.text}
            roundBottomCorners={!actionsVisible}
            onPress={() => onActionPress(viewRemarksAction)}
          />
        )}
        {showInfo && (
          <InfoBox
            isAlert={!!notificationText}
            text={notificationText}
            showChevron={false}
            disablePressEvent={!!notificationText}
          />
        )}
        <ActionsInItinerary
          hideSeperator={Boolean(showInfo)}
          actions={actions}
          actionDisabled={actionDisabled}
          onActionPress={onActionPress}
        />
      </View>
    </View>
  );
};

export default BusItineraryCard;
