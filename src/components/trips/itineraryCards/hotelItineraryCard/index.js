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
import LinearGradient from 'react-native-linear-gradient';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';
import SoldOutTag from '../../components/soldOutTag/SoldOutTag';
import RemarksBox from '../../components/remarksBox/RemarksBox';

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
  isProcessing,
  remarks,
}) => {
  const sameMonthDates =
    tripRequest?.checkIn?.month === tripRequest?.checkOut?.month;

  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const modifyAction = isActionEnabled(HotelSubTripActions.MODIFY);
  const cancelAction = isActionEnabled(HotelSubTripActions.CANCEL);

  const viewRemarksAction = isActionEnabled(HotelSubTripActions.VIEW_REMARKS);
  const shortlistingAction = isActionEnabled(
    HotelSubTripActions.SHORTLIST_HOTEL_TRIPS,
  );
  const viewShortlistedHotelAction = isActionEnabled(
    HotelSubTripActions.VIEW_SHORTLISTED_HOTEL_TRIPS,
  );
  const editAction = isActionEnabled(HotelSubTripActions.EDIT);
  const removeAction = isActionEnabled(HotelSubTripActions.REMOVE);

  const confirmedStatus = {
    key: 'CONFIRMED',
    value: 'Confirmed',
    textColor: Color.DARK_SEA_FOAM,
    bgColor: Color.DARK_SEA_FOAM + '26',
  };

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
      <Separator style={Styles.separatorStyle} />
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
        {modifyAction && (
          <FTouchableOpacity
            onPress={() => onActionPress(modifyAction)}
            style={Styles.primaryButtonStyle}>
            <Icon.Reschedule width={DP._16} height={DP._16} />
            <FText style={Styles.reschedule}>{modifyAction.name}</FText>
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
      </View>
    </>
  );

  const renderMonthYear = (month, year) => (
    <FText
      type={FONT_TYPE.MEDIUM}
      style={Styles.month}>{` ${month}'${year}`}</FText>
  );

  const uiData = showPreBookingCard ? tripRequest : bookingDetails;
  const actionsVisible =
    !actionsDisabled &&
    (modifyAction || cancelAction || editAction || removeAction);

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
          activeOpacity={uiData.reduceOpacity ? 0.6 : 1}
          style={Styles.card(uiData.reduceOpacity)}
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
            {status?.key === TRIP_STATUS.CANCELLED ? (
              <TripStatus statusObj={status} />
            ) : showConfirmedStatus ? (
              <TripStatus statusObj={confirmedStatus} />
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
                    {uiData.roomTypeName}
                  </FText>
                  <FText
                    style={Styles.mealType}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {uiData.ratePlanName}
                  </FText>
                </View>
                {uiData.isPriceFetched ? (
                  <View style={Styles.priceContainer}>
                    <View style={Styles.priceAndGstContainer}>
                      <FText type={FONT_TYPE.MEDIUM} style={Styles.price}>
                        {uiData.price}
                      </FText>
                      <FText style={Styles.priceDetail}>
                        {uiData.gstIncluded ? Strings.inclGst : Strings.exGst}
                      </FText>
                    </View>
                    {uiData.isOutOfPolicy && <OOPTag />}
                  </View>
                ) : (
                  <PriceLoader />
                )}
              </View>
            )}
            <View style={{height: DP._12}} />
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

        {!!uiData.modificationCharges && (
          <>
            <FText style={Styles.modificationChargeText}>
              {Strings.includeModificationCharge}
              <FText
                type={
                  FONT_TYPE.MEDIUM
                }>{` ${uiData.modificationCharges}.`}</FText>
            </FText>
            <Separator style={Styles.seperatorStyle} />
          </>
        )}
        {!!uiData.cancellationCharges && (
          <>
            <FText style={Styles.modificationChargeText}>
              {Strings.includeCancellationCharge}
              <FText
                type={
                  FONT_TYPE.MEDIUM
                }>{` ${uiData.cancellationCharges}.`}</FText>
            </FText>
            <Separator style={Styles.seperatorStyle} />
          </>
        )}
        {viewRemarksAction && !!remarks && (
          <RemarksBox
            title={remarks.title}
            remarks={remarks.text}
            roundBottomCorners={!actionsVisible}
          />
        )}

        {actionsVisible && <ActionsInItinerary />}
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
