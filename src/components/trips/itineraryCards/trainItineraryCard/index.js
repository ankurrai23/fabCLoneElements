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
import {TrainSubtripActions} from '../../../../utils/SubTripActions';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import {getStatusObject} from '../../../../utils/Utils';
import RemarksBox from '../../components/remarksBox/RemarksBox';

const PreBookingCard = ({onCardPress, tripRequest, showStatus, status}) => {
  return (
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
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${tripRequest.month}'${tripRequest.year}`}</FText>
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
        <View style={Styles.width_48}>
          <FText style={Styles.heading} numberOfLines={1}>
            {tripRequest?.sourceStationCode}
          </FText>

          {(tripRequest?.destination || tripRequest?.source) && (
            <FText style={Styles.details} numberOfLines={1}>
              {tripRequest.source}
            </FText>
          )}
        </View>
        <View style={[Styles.alignItem_flexEnd, Styles.width_48]}>
          <FText style={Styles.heading} numberOfLines={1}>
            {tripRequest?.destinationStationCode}
          </FText>
          {(tripRequest?.destination || tripRequest?.source) && (
            <FText style={Styles.details} numberOfLines={1}>
              {tripRequest.destination}
            </FText>
          )}
        </View>
      </View>
    </FTouchableOpacity>
  );
};

export const formatTrainNameNo = (name, no) => {
  return !name && !no
    ? Strings.trainNa
    : [no, name].filter((e) => e).join(', ');
};

const PostBookingCard = ({
  onCardPress,
  bookingDetails,
  showStatus,
  status,
  reduceOpacity,
  hideChevron,
}) => {
  const renderDate = (departureDate, arrivalDate) => {
    const depArrDateSame = departureDate.date === arrivalDate.date;
    const depArrMonthSame = departureDate.month === arrivalDate.month;
    if (depArrMonthSame && depArrDateSame) {
      return (
        <>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
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
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText style={Styles.hyphen}>{' - '}</FText>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
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
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
          <FText style={Styles.hyphen}>{' - '}</FText>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${arrivalDate.month}'${departureDate.year}`}</FText>
        </>
      );
    }
  };
  return (
    <FTouchableOpacity
      activeOpacity={reduceOpacity ? 0.6 : 1}
      style={Styles.card(reduceOpacity)}
      onPress={onCardPress}>
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
                stroke={Color.BATTLESHIP_GREY_TWO}
              />
            )}
          </View>
        )}
      </View>

      <View style={[Styles.marginTop_12]}>
        <View style={[Styles.flexDirectionRow]}>
          <FText
            style={[Styles.heading, Styles.width_40, Styles.textAlign_left]}
            numberOfLines={1}>
            {bookingDetails.departureTime}
          </FText>
          <FText
            style={[
              Styles.duration,
              Styles.width_20,
              Styles.textAlign_center,
              Styles.selfAlign_center,
            ]}>
            {bookingDetails.estimateDuration}
          </FText>
          <FText
            style={[Styles.heading, Styles.width_40, Styles.textAlign_right]}
            numberOfLines={1}>
            {bookingDetails.arrivalTime}
          </FText>
        </View>
        <View style={[Styles.flexDirectionRow]}>
          <View style={Styles.width_40}>
            {(bookingDetails?.departureTime || bookingDetails?.arrivalTime) && (
              <FText style={Styles.details} numberOfLines={1}>
                {bookingDetails.sourceStationCode}
              </FText>
            )}
            <FText style={Styles.details} numberOfLines={1}>
              {bookingDetails.source}
            </FText>
            {bookingDetails?.sourcePlatform && (
              <FText style={Styles.details} numberOfLines={1}>
                {Strings.platform}: {bookingDetails.sourcePlatform}
              </FText>
            )}
          </View>
          <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
            {(bookingDetails?.departureTime || bookingDetails?.arrivalTime) && (
              <FText style={Styles.details} numberOfLines={1}>
                {bookingDetails.destinationStationCode}
              </FText>
            )}
            <FText style={Styles.details} numberOfLines={1}>
              {bookingDetails.destination}
            </FText>
            {bookingDetails?.destinationPlatform && (
              <FText style={Styles.details} numberOfLines={1}>
                {Strings.platform} {bookingDetails.destinationPlatform}
              </FText>
            )}
          </View>
        </View>
      </View>

      <View style={Styles.marginTop_12}>
        <FText style={Styles.heading} numberOfLines={1}>
          {formatTrainNameNo(
            bookingDetails.trainName,
            bookingDetails.trainNumber,
          )}
        </FText>
        {!!bookingDetails?.pnr && (
          <FText style={Styles.details} numberOfLines={1}>
            {Strings.pnr}: {bookingDetails.pnr}
          </FText>
        )}
        {!!bookingDetails?.trainClass && (
          <FText style={Styles.details} numberOfLines={1}>
            {bookingDetails.trainClass}
          </FText>
        )}
      </View>
    </FTouchableOpacity>
  );
};

const TrainItineraryCard = ({
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
  actionDisabled,
  remarks,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(TrainSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(TrainSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(TrainSubtripActions.VIEW_REMARKS);
  const editAction = isActionEnabled(TrainSubtripActions.EDIT);
  const removeAction = isActionEnabled(TrainSubtripActions.REMOVE);
  const actionsVisible =
    !actionDisabled &&
    (rescheduleAction || cancelAction || editAction || removeAction);

  const ActionsInItinerary = ({hideSeperator}) => (
    <>
      {!hideSeperator && <Separator style={Styles.actionsSeparator} />}
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
            status={bookingDetails.trainBookingStatus}
            reduceOpacity={tripRequest.reduceOpacity}
            hideChevron={hideChevron}
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
        {actionsVisible && <ActionsInItinerary />}
      </View>
    </View>
  );
};

export default TrainItineraryCard;
