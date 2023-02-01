import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../../common/components/separator';
import TripStatus from '../../tripStatus';
import {TrainSubtripActions} from '../../../../utils/SubTripActions';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import {getStatusObject} from '../../../../utils/Utils';
import ModificationAlertBox from '../../components/modificationAlertBox';
import {formatTrainNameNo} from '../../itineraryCards/trainItineraryCard';

const DetailRow = ({
  dataIcon,
  leftData,
  rightData,
  leftDefaultData,
  rightDefaultData,
  style,
  rightDataStyle,
  leftDataStyle,
  onClickRightData,
  onClickLeftData,
  greyedOut,
}) => {
  return (
    <View style={[Styles.flexDirectionRow, style]}>
      <FTouchableOpacity
        style={[Styles.flexRow, Styles.width_48]}
        onPress={onClickLeftData}>
        {dataIcon}
        <FText
          greyedOut={greyedOut}
          style={[Styles.detailLableStyle, Styles.lineHeight_16, leftDataStyle]}
          numberOfLines={1}>
          {leftData ?? leftDefaultData}
        </FText>
      </FTouchableOpacity>
      <FTouchableOpacity onPress={onClickRightData} style={Styles.width_48}>
        <FText
          greyedOut={greyedOut}
          style={[
            Styles.fontSize_12,
            Styles.textAlign_right,
            Styles.lineHeight_16,
            rightDataStyle,
          ]}
          numberOfLines={1}>
          {rightData ?? rightDefaultData}
        </FText>
      </FTouchableOpacity>
    </View>
  );
};

const TrainDetailCard = ({
  onActionPress,
  onCardPress,
  style,
  bookingDetails,
  actions,
  actionDisabled,
  notificationText,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(TrainSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(TrainSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(TrainSubtripActions.VIEW_REMARKS);

  const ActionsInItinerary = () => (
    <>
      <Separator style={Styles.actionsSeparator} />
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
  const renderDate = (departureDate, arrivalDate) => {
    const depArrDateSame = departureDate.date === arrivalDate.date;
    const depArrMonthSame = departureDate.month === arrivalDate.month;
    if (depArrMonthSame && depArrDateSame) {
      return (
        <>
          <FText
            greyedOut={bookingDetails.reduceOpacity}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
            greyedOut={bookingDetails.reduceOpacity}
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
            greyedOut={bookingDetails.reduceOpacity}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText greyedOut={bookingDetails.reduceOpacity} style={Styles.hyphen}>
            {' - '}
          </FText>
          <FText
            greyedOut={bookingDetails.reduceOpacity}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
            greyedOut={bookingDetails.reduceOpacity}
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
            greyedOut={bookingDetails.reduceOpacity}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
            greyedOut={bookingDetails.reduceOpacity}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
          <FText greyedOut={bookingDetails.reduceOpacity} style={Styles.hyphen}>
            {' - '}
          </FText>
          <FText
            greyedOut={bookingDetails.reduceOpacity}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
            greyedOut={bookingDetails.reduceOpacity}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${arrivalDate.month}'${arrivalDate.year}`}</FText>
        </>
      );
    }
  };
  return (
    <View style={[style]}>
      {!!notificationText && <ModificationAlertBox msg={notificationText} />}
      <View style={Styles.flexRow}>
        <View style={Styles.container}>
          <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
            <View style={[Styles.flexDirectionRow, Styles.baseline]}>
              <View style={Styles.flexDirectionRow}>
                {renderDate(
                  bookingDetails.departureDate,
                  bookingDetails.arrivalDate,
                )}
              </View>
              {!!bookingDetails.trainBookingStatus && (
                <TripStatus
                  statusObj={getStatusObject(bookingDetails.trainBookingStatus)}
                />
              )}
            </View>

            <View style={[Styles.marginTop_12]}>
              <View style={[Styles.flexDirectionRow]}>
                <FText
                  greyedOut={bookingDetails.reduceOpacity}
                  style={[
                    Styles.heading,
                    Styles.width_40,
                    Styles.textAlign_left,
                  ]}
                  numberOfLines={1}>
                  {bookingDetails.departureTime}
                </FText>
                <FText
                  greyedOut={bookingDetails.reduceOpacity}
                  style={[
                    Styles.duration,
                    Styles.width_20,
                    Styles.textAlign_center,
                  ]}>
                  {bookingDetails.estimateDuration}
                </FText>
                <FText
                  greyedOut={bookingDetails.reduceOpacity}
                  style={[
                    Styles.heading,
                    Styles.width_40,
                    Styles.textAlign_right,
                  ]}
                  numberOfLines={1}>
                  {bookingDetails.arrivalTime}
                </FText>
              </View>
              <View style={[Styles.flexDirectionRow]}>
                <View style={Styles.width_40}>
                  {(bookingDetails?.departureTime ||
                    bookingDetails?.arrivalTime) && (
                    <FText
                      greyedOut={bookingDetails.reduceOpacity}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {bookingDetails.sourceStationCode}
                    </FText>
                  )}
                  {(bookingDetails?.source || bookingDetails?.destination) && (
                    <FText
                      greyedOut={bookingDetails.reduceOpacity}
                      style={[Styles.detail, Styles.textAlign_left]}
                      numberOfLines={1}>
                      {bookingDetails.source}
                    </FText>
                  )}
                  {(bookingDetails?.sourcePlatform ||
                    bookingDetails?.destinationPlatform) && (
                    <FText
                      greyedOut={bookingDetails.reduceOpacity}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {Strings.platform} {bookingDetails.sourcePlatform}
                    </FText>
                  )}
                </View>
                <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                  {(bookingDetails?.arrivalTime ||
                    bookingDetails?.departureTime) && (
                    <FText
                      greyedOut={bookingDetails.reduceOpacity}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {bookingDetails.destinationStationCode}
                    </FText>
                  )}
                  {bookingDetails?.destination && (
                    <FText
                      greyedOut={bookingDetails.reduceOpacity}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {bookingDetails.destination}
                    </FText>
                  )}
                  {(bookingDetails?.sourcePlatform ||
                    bookingDetails?.destinationPlatform) && (
                    <FText
                      greyedOut={bookingDetails.reduceOpacity}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {Strings.platform} {bookingDetails.destinationPlatform}
                    </FText>
                  )}
                </View>
              </View>
            </View>

            <View style={Styles.marginTop_12}>
              <FText
                greyedOut={bookingDetails.reduceOpacity}
                style={Styles.heading}
                numberOfLines={1}>
                {formatTrainNameNo(
                  bookingDetails.trainName,
                  bookingDetails.trainNumber,
                )}
              </FText>
              {!!bookingDetails?.pnr && (
                <FText
                  greyedOut={bookingDetails.reduceOpacity}
                  style={Styles.detail}
                  numberOfLines={1}>
                  {Strings.pnr}: {bookingDetails.pnr}
                </FText>
              )}
              {!!bookingDetails?.trainClass && (
                <FText
                  greyedOut={bookingDetails.reduceOpacity}
                  style={Styles.detail}
                  numberOfLines={1}>
                  {bookingDetails.trainClass}
                </FText>
              )}
            </View>
            {bookingDetails.travellerDetails &&
              bookingDetails.travellerDetails.length > 0 && (
                <>
                  <Separator style={Styles.sepratorStyle} />

                  <FText
                    greyedOut={bookingDetails.reduceOpacity}
                    numberOfLines={1}
                    style={[
                      Styles.marginTop_12,
                      Styles.fontSize_12,
                      Styles.color_grey,
                      Styles.lineHeight_16,
                    ]}>
                    {Strings.travelersDetails}
                  </FText>
                  {bookingDetails.travellerDetails.map((detail, index) => (
                    <DetailRow
                      dataIcon={
                        <Icon.Person
                          width={DP._16}
                          height={DP._16}
                          stroke={
                            bookingDetails.reduceOpacity
                              ? Color.BLUEY_GREY
                              : null
                          }
                        />
                      }
                      greyedOut={bookingDetails.reduceOpacity}
                      rightData={detail.seatNo}
                      leftData={detail.travellerName}
                      style={
                        index === 0 ? Styles.marginTop_12 : Styles.marginTop_8
                      }
                    />
                  ))}
                </>
              )}
          </FTouchableOpacity>
          {!actionDisabled &&
            (rescheduleAction || cancelAction || viewRemarksAction) && (
              <ActionsInItinerary />
            )}
        </View>
      </View>
    </View>
  );
};

export default TrainDetailCard;
