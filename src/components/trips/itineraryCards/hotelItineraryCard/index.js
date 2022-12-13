import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color/index.travelPlus';

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
import OOPTag from '../../components/OOPTag/OOPTag';

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
      <Separator style={Styles.separatorStyle} />
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

  const renderMonthYear = (month, year) => (
    <FText
      type={FONT_TYPE.MEDIUM}
      style={Styles.month}>{` ${month}'${year}`}</FText>
  );

  const uiData = showPreBookingCard ? tripRequest : bookingDetails;

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
      <View style={Styles.container}>
        <FTouchableOpacity
          activeOpacity={tripRequest.reduceOpacity ? 0.6 : 1}
          style={Styles.card(tripRequest.reduceOpacity)}
          onPress={onCardPress}>
          <View style={Styles.dateAndStatusContainer}>
            {sameMonthDates ? (
              <View style={Styles.datesContainer}>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {uiData.checkIn.date}
                </FText>
                <FText style={Styles.hyphen}>{'-'}</FText>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {uiData.checkOut.date}
                </FText>
                {renderMonthYear(uiData.checkIn.month, uiData.checkIn.year)}
              </View>
            ) : (
              <View style={Styles.datesContainer}>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {uiData.checkIn.date}
                </FText>
                {renderMonthYear(uiData.checkIn.month, uiData.checkIn.year)}
                <FText style={Styles.hyphen}>{' - '}</FText>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {uiData.checkOut.date}
                </FText>
                {renderMonthYear(uiData.checkOut.month, uiData.checkOut.year)}
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
          <View>
            <FText style={Styles.hotelName}>{uiData.title}</FText>
            <FText style={Styles.hotelLocation}>{uiData.location}</FText>
            {!!uiData.checkInTime && (
              <View style={Styles.checkInContainer}>
                <FText style={Styles.checkIn(Color.GREY_PURPLE)}>
                  {Strings.checkInTime}
                </FText>
                <FText style={Styles.checkIn(Color.DARK)}>
                  {uiData.checkInTime}
                </FText>
              </View>
            )}
            {!!uiData.price && (
              <View style={Styles.roomTypeAndPriceContainer}>
                <View style={Styles.ratePlanContainer}>
                  <FText
                    style={Styles.roomType}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {uiData.roomType}
                  </FText>
                  <FText
                    style={Styles.mealType}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {uiData.includedMeals}
                  </FText>
                </View>
                <View style={Styles.priceContainer}>
                  <View style={Styles.priceAndGstContainer}>
                    <FText type={FONT_TYPE.MEDIUM} style={Styles.price}>
                      {uiData.price}
                    </FText>
                    <FText style={Styles.priceDetail}>
                      {uiData.gstIncluded ? Strings.inclGst : ''}
                    </FText>
                  </View>
                  {uiData.isOOP && <OOPTag />}
                </View>
              </View>
            )}
            <View style={{height: DP._12}}></View>
            {!!uiData.bookingId && (
              <>
                <Separator style={Styles.separatorStyle} />
                <View style={Styles.flexRowAndAlignCenter}>
                  <FText style={Styles.bookingIdText}>
                    {Strings.bookingId2}
                  </FText>
                  <FText style={Styles.bookingId} type={FONT_TYPE.MEDIUM}>
                    {uiData.bookingId}
                  </FText>
                </View>
              </>
            )}
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
    </View>
  );
};

export default HotelItineraryCard;
