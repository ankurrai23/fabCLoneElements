import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../../common/components/separator';
import TripStatus from '../../tripStatus';
import {BusSubtripActions} from '../../../../utils/SubTripActions';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import {getStatusObject} from '../../../../utils/Utils';
import ModificationAlertBox from '../../components/modificationAlertBox';

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
}) => {
  return (
    <View style={[Styles.flexDirectionRow, style]}>
      <FTouchableOpacity
        style={[Styles.flexRow, Styles.width_48]}
        onPress={onClickLeftData}>
        {dataIcon}
        <FText
          style={[Styles.detailLableStyle, leftDataStyle]}
          numberOfLines={1}>
          {leftData ?? leftDefaultData}
        </FText>
      </FTouchableOpacity>
      <FTouchableOpacity onPress={onClickRightData} style={Styles.width_48}>
        <FText
          style={[Styles.fontSize_12, Styles.textAlign_right, rightDataStyle]}
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

  const rescheduleAction = isActionEnabled(BusSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(BusSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);

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
  return (
    <>
      {!!notificationText && <ModificationAlertBox msg={notificationText} />}
      <View style={[Styles.flexRow, style]}>
        <View style={Styles.container}>
          <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
            <View style={[Styles.flexDirectionRow, Styles.baseline]}>
              <FText>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {bookingDetails.date}
                </FText>
                <FText
                  style={{
                    color: Color.BLUEY_GREY,
                    fontSize: DP._12,
                  }}>{` ${bookingDetails.month}`}</FText>
              </FText>
              {!!bookingDetails.trainBookingStatus && (
                <TripStatus
                  statusObj={getStatusObject(bookingDetails.trainBookingStatus)}
                />
              )}
            </View>

            <View style={[Styles.marginTop_12]}>
              <View style={[Styles.flexDirectionRow]}>
                <FText
                  style={[
                    Styles.heading,
                    Styles.width_40,
                    Styles.textAlign_left,
                  ]}
                  numberOfLines={1}>
                  {bookingDetails.departureTime}
                </FText>
                <FText
                  style={[
                    Styles.duration,
                    Styles.width_20,
                    Styles.textAlign_center,
                  ]}>
                  {bookingDetails.estimateDuration}
                </FText>
                <FText
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
                    <FText style={Styles.detail} numberOfLines={1}>
                      {bookingDetails.sourceStationCode}
                    </FText>
                  )}
                  {(bookingDetails?.source || bookingDetails?.destination) && (
                    <FText
                      style={[Styles.detail, Styles.textAlign_left]}
                      numberOfLines={1}>
                      {bookingDetails.source}
                    </FText>
                  )}
                  {(bookingDetails?.departurePlatform ||
                    bookingDetails?.arrivalPlatform) && (
                    <FText style={Styles.detail} numberOfLines={1}>
                      {Strings.platform} {bookingDetails.departurePlatform}
                    </FText>
                  )}
                </View>
                <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                  {(bookingDetails?.arrivalTime ||
                    bookingDetails?.departureTime) && (
                    <FText style={Styles.detail} numberOfLines={1}>
                      {bookingDetails.destinationStationCode}
                    </FText>
                  )}
                  {bookingDetails?.destination && (
                    <FText style={Styles.detail} numberOfLines={1}>
                      {bookingDetails.destination}
                    </FText>
                  )}
                  {(bookingDetails?.departurePlatform ||
                    bookingDetails?.arrivalPlatform) && (
                    <FText style={Styles.detail} numberOfLines={1}>
                      {Strings.platform} {bookingDetails.arrivalPlatform}
                    </FText>
                  )}
                </View>
              </View>
            </View>

            <View style={Styles.marginTop_12}>
              <FText style={Styles.heading} numberOfLines={1}>
                {bookingDetails?.trainName ?? Strings.trainNa}
              </FText>
              {bookingDetails?.pnr && (
                <FText style={Styles.detail} numberOfLines={1}>
                  {Strings.pnr}: {bookingDetails.pnr}
                </FText>
              )}
              {bookingDetails?.trainClass && (
                <FText style={Styles.detail} numberOfLines={1}>
                  {bookingDetails.trainClass}
                </FText>
              )}
            </View>
            {bookingDetails.travellersDetails &&
              bookingDetails.travellersDetails.length > 0 && (
                <>
                  <Separator style={Styles.sepratorStyle} />

                  <FText
                    numberOfLines={1}
                    style={[
                      Styles.marginTop_12,
                      Styles.fontSize_12,
                      Styles.color_grey,
                    ]}>
                    {Strings.travelersDetails}
                  </FText>
                  {bookingDetails.travellersDetails.map((detail, index) => (
                    <DetailRow
                      dataIcon={<Icon.Person width={DP._16} height={DP._16} />}
                      rightData={`${detail.coach}, ${detail.birth}`}
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
    </>
  );
};

export default TrainDetailCard;
