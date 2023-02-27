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
import {CabSubtripActions} from '../../../../utils/SubTripActions';
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
          !!tripRequest?.pickupTime && (
            <FText
              greyedOut={isGreyedOut}
              type={FONT_TYPE.MEDIUM}
              style={Styles.slotDetail}>
              {Strings.pickupTime} {tripRequest.pickupTime}
            </FText>
          )
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
          <FText
            greyedOut={isGreyedOut}
            style={Styles.detail}
            numberOfLines={1}>
            {tripRequest.sourceLocality}
          </FText>
        </View>
        <View style={[Styles.alignItem_flexEnd, Styles.width_48]}>
          <FText
            greyedOut={isGreyedOut}
            style={Styles.heading}
            numberOfLines={1}>
            {tripRequest.destination}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            style={Styles.detail}
            numberOfLines={1}>
            {tripRequest.destinationLocality}
          </FText>
        </View>
      </View>
    </FTouchableOpacity>
  );
};

const PostBookingCard = ({
  onCardPress,
  bookingDetails,
  showStatus,
  status,
  isGreyedOut,
  hideChevron,
}) => {
  return (
    <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
      <View style={[Styles.flexDirectionRow, Styles.baseline]}>
        <View style={Styles.flexDirectionRow}>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {bookingDetails.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${bookingDetails.month}'${bookingDetails.year}`}</FText>
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
        <View style={[Styles.flexDirectionRow]}>
          <View style={[Styles.width_40, Styles.textAlign_left]}>
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.detail}
                numberOfLines={1}>
                {bookingDetails.sourceLocality}
              </FText>
            )}
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.detail}
                numberOfLines={1}>
                {bookingDetails.source}
              </FText>
            )}
          </View>
          <View
            style={[
              Styles.alignItem_flexEnd,
              Styles.width_40,
              Styles.textAlign_right,
            ]}>
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.detail}
                numberOfLines={1}>
                {bookingDetails.destinationLocality}
              </FText>
            )}
            {(bookingDetails?.sourceLocality ||
              bookingDetails?.destinationLocality) && (
              <FText
                greyedOut={isGreyedOut}
                style={Styles.detail}
                numberOfLines={1}>
                {bookingDetails.destination}
              </FText>
            )}
          </View>
        </View>
      </View>
      {bookingDetails.vehicleDetails &&
        bookingDetails.vehicleDetails.length > 0 &&
        bookingDetails.vehicleDetails.map((details, index) => (
          <>
            <Separator
              style={{
                backgroundColor: Color.LIGHT_PERIWINKLE,
                marginTop: DP._12,
              }}
            />
            <FText
              greyedOut={isGreyedOut}
              numberOfLines={1}
              style={[
                Styles.marginTop_12,
                Styles.fontSize_12,
                Styles.color_grey,
                Styles.lineHeight_16,
              ]}>
              {Strings.vehicle}{' '}
              {bookingDetails.vehicleDetails.length > 1 && index + 1}{' '}
              {Strings.details}
            </FText>
            <View style={Styles.marginTop_8}>
              <FText
                greyedOut={isGreyedOut}
                style={Styles.heading}
                numberOfLines={1}>
                {details?.vehicleName ?? Strings.carNa}
              </FText>
              {details?.vehicleNumber && (
                <FText
                  greyedOut={isGreyedOut}
                  style={Styles.detail}
                  numberOfLines={1}>
                  {details.vehicleNumber}
                </FText>
              )}
              {details?.bookingId && (
                <FText
                  greyedOut={isGreyedOut}
                  style={Styles.detail}
                  numberOfLines={1}>
                  {Strings.bookingId}: {details.bookingId}
                </FText>
              )}
            </View>
          </>
        ))}
    </FTouchableOpacity>
  );
};

const cabItineraryCard = ({
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
  hideChevron,
  actionDisabled,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);
  const uiData = showPreBookingCard ? tripRequest : bookingDetails;
  const isGreyedOut = uiData.reduceOpacity;
  // const rescheduleAction = isActionEnabled(CabSubtripActions.RESCHEDULE);
  // const cancelAction = isActionEnabled(CabSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(CabSubtripActions.VIEW_REMARKS);
  // const editAction = isActionEnabled(CabSubtripActions.EDIT);
  // const removeAction = isActionEnabled(CabSubtripActions.REMOVE);

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
            <Icon.CabItineraryGreyed
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ) : (
            <Icon.CabItinerary
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
            isGreyedOut={isGreyedOut}
            tripRequest={tripRequest}
            showStatus={showStatus}
            status={status}
          />
        ) : (
          <PostBookingCard
            onCardPress={onCardPress}
            bookingDetails={uiData}
            showStatus={showStatus}
            status={uiData.cabBookingStatus}
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

export default cabItineraryCard;
