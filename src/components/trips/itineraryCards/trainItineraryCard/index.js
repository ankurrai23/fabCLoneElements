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
import ActionsInItinerary, {BottomBarActions} from '../ActionsInItinerary';
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
            {tripRequest?.sourceStationCode}
          </FText>

          {(tripRequest?.destination || tripRequest?.source) && (
            <FText
              greyedOut={isGreyedOut}
              style={Styles.details}
              numberOfLines={1}>
              {tripRequest.source}
            </FText>
          )}
        </View>
        <View style={[Styles.alignItem_flexEnd, Styles.width_48]}>
          <FText
            greyedOut={isGreyedOut}
            style={Styles.heading}
            numberOfLines={1}>
            {tripRequest?.destinationStationCode}
          </FText>
          {(tripRequest?.destination || tripRequest?.source) && (
            <FText
              greyedOut={isGreyedOut}
              style={Styles.details}
              numberOfLines={1}>
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
  isGreyedOut,
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
            }>{`${arrivalDate.month}'${departureDate.year}`}</FText>
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

      <View style={[Styles.marginTop_12]}>
        <View style={[Styles.flexDirectionRow]}>
          <FText
            greyedOut={isGreyedOut}
            style={[Styles.heading, Styles.width_40, Styles.textAlign_left]}
            numberOfLines={1}>
            {bookingDetails.departureTime}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            style={[
              Styles.duration,
              Styles.width_20,
              Styles.textAlign_center,
              Styles.selfAlign_center,
            ]}>
            {bookingDetails.estimateDuration}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            style={[Styles.heading, Styles.width_40, Styles.textAlign_right]}
            numberOfLines={1}>
            {bookingDetails.arrivalTime}
          </FText>
        </View>
        <View style={[Styles.flexDirectionRow]}>
          <View style={Styles.width_40}>
            {(bookingDetails?.departureTime || bookingDetails?.arrivalTime) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.details}
                numberOfLines={1}>
                {bookingDetails.sourceStationCode}
              </FText>
            )}
            <FText
              greyedOut={isGreyedOut}
              style={Styles.details}
              numberOfLines={1}>
              {bookingDetails.source}
            </FText>
            {bookingDetails?.sourcePlatform && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.details}
                numberOfLines={1}>
                {Strings.platform}: {bookingDetails.sourcePlatform}
              </FText>
            )}
          </View>
          <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
            {(bookingDetails?.departureTime || bookingDetails?.arrivalTime) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.details}
                numberOfLines={1}>
                {bookingDetails.destinationStationCode}
              </FText>
            )}
            <FText
              greyedOut={isGreyedOut}
              style={Styles.details}
              numberOfLines={1}>
              {bookingDetails.destination}
            </FText>
            {bookingDetails?.destinationPlatform && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.details}
                numberOfLines={1}>
                {Strings.platform} {bookingDetails.destinationPlatform}
              </FText>
            )}
          </View>
        </View>
      </View>

      <View style={Styles.marginTop_12}>
        <FText greyedOut={isGreyedOut} style={Styles.heading} numberOfLines={1}>
          {formatTrainNameNo(
            bookingDetails.trainName,
            bookingDetails.trainNumber,
          )}
        </FText>
        {!!bookingDetails?.pnr && (
          <FText
            greyedOut={isGreyedOut}
            style={Styles.details}
            numberOfLines={1}>
            {Strings.pnr}: {bookingDetails.pnr}
          </FText>
        )}
        {!!bookingDetails?.trainClass && (
          <FText
            greyedOut={isGreyedOut}
            style={Styles.details}
            numberOfLines={1}>
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
  const uiData = showPreBookingCard ? tripRequest : bookingDetails;
  const isGreyedOut = uiData.reduceOpacity;
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);
  // const rescheduleAction = isActionEnabled(TrainSubtripActions.RESCHEDULE);
  // const cancelAction = isActionEnabled(TrainSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(TrainSubtripActions.VIEW_REMARKS);
  // const editAction = isActionEnabled(TrainSubtripActions.EDIT);
  // const removeAction = isActionEnabled(TrainSubtripActions.REMOVE);
  const actionsVisible =
    !actionDisabled &&
    Object.keys(BottomBarActions).reduce((acc, v) => {
      return acc || isActionEnabled(BottomBarActions[v]);
    }, false);

  // const ActionsInItinerary = ({hideSeperator}) => (
  //   <>
  //     {!hideSeperator && <Separator style={Styles.actionsSeparator} />}
  //     <View style={Styles.actionContainer}>
  //       {cancelAction && (
  //         <FTouchableOpacity
  //           onPress={() => onActionPress(cancelAction)}
  //           style={Styles.flexRowAndAlignCenter}>
  //           <Icon.Cross
  //             width={DP._16}
  //             height={DP._16}
  //             stroke={Color.PASTEL_RED}
  //           />
  //           <FText style={Styles.cancel}>{cancelAction.name}</FText>
  //         </FTouchableOpacity>
  //       )}
  //       {rescheduleAction && (
  //         <FTouchableOpacity
  //           onPress={() => onActionPress(rescheduleAction)}
  //           style={Styles.primaryButtonStyle}>
  //           <Icon.Reschedule width={DP._16} height={DP._16} />
  //           <FText style={Styles.reschedule}>{rescheduleAction.name}</FText>
  //         </FTouchableOpacity>
  //       )}
  //       {removeAction && (
  //         <FTouchableOpacity
  //           onPress={() => onActionPress(removeAction)}
  //           style={Styles.flexRowAndAlignCenter}>
  //           <Icon.Trash width={DP._16} height={DP._16} strokeWidth={1.5} />
  //           <FText style={Styles.cancel}>{removeAction.name}</FText>
  //         </FTouchableOpacity>
  //       )}
  //       {editAction && (
  //         <FTouchableOpacity
  //           onPress={() => onActionPress(editAction)}
  //           style={Styles.primaryButtonStyle}>
  //           <Icon.Edit />
  //           <FText style={Styles.reschedule}>{editAction.name}</FText>
  //         </FTouchableOpacity>
  //       )}
  //     </View>
  //   </>
  // );

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
            tripRequest={uiData}
            showStatus={showStatus}
            isGreyedOut={isGreyedOut}
            status={status}
          />
        ) : (
          <PostBookingCard
            onCardPress={onCardPress}
            bookingDetails={uiData}
            showStatus={showStatus}
            status={uiData.trainBookingStatus}
            isGreyedOut={isGreyedOut}
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
        {/* {actionsVisible && (
          <ActionsInItinerary hideSeperator={Boolean(showInfo)} />
        )} */}
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

export default TrainItineraryCard;
