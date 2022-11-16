import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';

import DashedLine from '../../../../common/components/dashedLine';
import Separator from '../../../../common/components/separator';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import TripStatus from '../../tripStatus';

import Styles from './Styles';
import InfoBox from '../../components/infoBox';
import {HotelSubTripActions} from '../../../../utils/SubTripActions';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {TRIP_STATUS} from '../../../../utils/Constants';
import Icon from '../../../../assets/icons/Icon';

const HotelItineraryCard = ({
  status,
  tripRequest,
  bookingDetails,
  actions,
  actionsDisabled,
  onActionPress,
  onCardPress,
  style,
  hideIcon,
  showLine,
  showInfo,
  notificationText,
  timelineGreyed,
  showPreBookingCard,
  showConfirmedStatus,
  hideChevron,
}) => {
  const sameMonthDates =
    tripRequest?.checkIn?.month === tripRequest?.checkOut?.month;

  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const modifyAction = isActionEnabled(HotelSubTripActions.MODIFY);
  const cancelAction = isActionEnabled(HotelSubTripActions.CANCEL);

  const viewRemarksAction = isActionEnabled(HotelSubTripActions.VIEW_REMARKS);
  const directionAction = isActionEnabled(HotelSubTripActions.DIRECTION);
  const shortlistingAction = isActionEnabled(
    HotelSubTripActions.SHORTLIST_HOTEL_TRIPS,
  );
  const viewShortlistedHotelAction = isActionEnabled(
    HotelSubTripActions.VIEW_SHORTLISTED_HOTEL_TRIPS,
  );

  const confirmedStatus = {
    key: 'CONFIRMED',
    value: 'Confirmed',
    textColor: Color.DARK_SEA_FOAM,
    bgColor: Color.DARK_SEA_FOAM + '26',
  };

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
            {modifyAction && (
              <FTouchableOpacity
                onPress={() => onActionPress(modifyAction)}
                style={Styles.primaryButtonStyle}>
                <Icon.Reschedule width={DP._16} height={DP._16} />
                <FText style={Styles.reschedule}>{modifyAction.name}</FText>
              </FTouchableOpacity>
            )}
          </>
        )}
      </View>
    </>
  );

  const HotelPreBookingCard = () => (
    <View style={Styles.container}>
      <FTouchableOpacity onPress={onCardPress}>
        <View style={Styles.dateAndStatusContainer}>
          {sameMonthDates ? (
            <View style={Styles.datesContainer}>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {tripRequest.checkIn.date}
              </FText>
              <FText style={Styles.hyphen}>{' - '}</FText>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {tripRequest.checkOut.date}
              </FText>
              <FText style={Styles.month}> {tripRequest.checkIn.month}</FText>
            </View>
          ) : (
            <View style={Styles.datesContainer}>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {tripRequest.checkIn.date}
              </FText>
              <FText style={Styles.month}> {tripRequest.checkIn.month}</FText>
              <FText style={Styles.hyphen}>{' - '}</FText>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {tripRequest.checkOut.date}
              </FText>
              <FText style={Styles.month}> {tripRequest.checkOut.month}</FText>
            </View>
          )}
          {showConfirmedStatus ? (
            <TripStatus statusObj={confirmedStatus} />
          ) : (
            status?.key === TRIP_STATUS.CANCELLED && (
              <TripStatus statusObj={status} />
            )
          )}
        </View>
        <View style={{paddingHorizontal: DP._16}}>
          <FText style={Styles.hotelName} numberOfLines={1}>
            {tripRequest.title}
          </FText>
          <FText style={Styles.hotelLocation} numberOfLines={1}>
            {tripRequest.location}
          </FText>
        </View>
      </FTouchableOpacity>
      {!actionsDisabled &&
        (modifyAction || cancelAction || viewRemarksAction) && (
          <ActionsInItinerary />
        )}
      {showInfo && (
        <InfoBox
          isAlert={shortlistingAction || !!notificationText}
          text={
            viewShortlistedHotelAction?.name ||
            shortlistingAction?.name ||
            notificationText
          }
          showChevron={!!shortlistingAction}
          disablePressEvent={!!notificationText}
          onPress={() =>
            onActionPress(viewShortlistedHotelAction || shortlistingAction)
          }
        />
      )}
    </View>
  );

  const HotelPostBookingCard = () => (
    <View style={Styles.container}>
      <FTouchableOpacity onPress={onCardPress}>
        <View style={Styles.dateAndStatusContainer}>
          {sameMonthDates ? (
            <View style={Styles.datesContainer}>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {bookingDetails.checkIn.date}
              </FText>
              <FText style={Styles.hyphen}>{' - '}</FText>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {bookingDetails.checkOut.date}
              </FText>
              <FText
                style={
                  Styles.month
                }>{` ${bookingDetails.checkIn.month}`}</FText>
            </View>
          ) : (
            <View style={Styles.datesContainer}>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {bookingDetails.checkIn.date}
              </FText>
              <FText style={Styles.month}>
                {` ${bookingDetails.checkIn.month}`}
              </FText>
              <FText style={Styles.hyphen}>{' - '}</FText>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {bookingDetails.checkOut.date}
              </FText>
              <FText style={Styles.month}>
                {` ${bookingDetails.checkOut.month}`}
              </FText>
            </View>
          )}
          {status?.key === TRIP_STATUS.CANCELLED ? (
            <TripStatus statusObj={status} />
          ) : showConfirmedStatus ? (
            <TripStatus statusObj={confirmedStatus} />
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
        <View style={{paddingHorizontal: DP._16}}>
          <FText style={Styles.hotelName}>{bookingDetails.title}</FText>
          <FText style={Styles.hotelLocation}>{bookingDetails.location}</FText>
          <View style={Styles.checkInAndDirectionContainer}>
            {bookingDetails.checkInTime ? (
              <FText style={Styles.checkIn}>
                {Strings.checkInTime(bookingDetails.checkInTime)}
              </FText>
            ) : (
              <View />
            )}
            {directionAction && (
              <FTouchableOpacity
                style={[Styles.flexRowWithAlignCenter]}
                onPress={() => onActionPress(directionAction)}>
                <Icon.Navigation
                  width={DP._16}
                  height={DP._16}
                  style={Styles.directionIcon}
                />
                <FText
                  style={{
                    fontSize: DP._12,
                    color: Color.DODGER_BLUE,
                  }}>
                  {directionAction.name}
                </FText>
              </FTouchableOpacity>
            )}
          </View>
        </View>
      </FTouchableOpacity>
      {!actionsDisabled &&
        (modifyAction || cancelAction || viewRemarksAction) && (
          <ActionsInItinerary />
        )}
      {showInfo && (
        <InfoBox
          isAlert={shortlistingAction || !!notificationText}
          text={
            viewShortlistedHotelAction?.name ||
            shortlistingAction?.name ||
            notificationText
          }
          showChevron={!!shortlistingAction}
          disablePressEvent={!!notificationText}
          onPress={() =>
            onActionPress(viewShortlistedHotelAction || shortlistingAction)
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
            <Icon.HotelItineraryGreyed
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ) : (
            <Icon.HotelItinerary
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
      {showPreBookingCard ? <HotelPreBookingCard /> : <HotelPostBookingCard />}
    </View>
  );
};

export default HotelItineraryCard;
