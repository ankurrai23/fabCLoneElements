import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../common/components/separator';
import TripStatus from '../tripStatus';
import {BusSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import TravellerSeat from '../../../common/components/travellerSeat';
import {getStatusObject} from '../../../utils/Utils';

const TrainDetailCard = ({
  onActionPress,
  onCardPress,
  style,
  bookingDetails,
  actions,
  actionDisabled,
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
                  Styles.portName,
                  Styles.width_40,
                  Styles.textAlign_left,
                ]}
                numberOfLines={1}>
                {bookingDetails.sourceStationCode}
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
                  Styles.portName,
                  Styles.width_40,
                  Styles.textAlign_right,
                ]}
                numberOfLines={1}>
                {bookingDetails.destinationStationCode}
              </FText>
            </View>
            <View style={[Styles.flexDirectionRow]}>
              <View style={Styles.width_40}>
                {(bookingDetails?.source || bookingDetails?.destination) && (
                  <FText
                    style={[Styles.time, Styles.textAlign_left]}
                    numberOfLines={1}>
                    {bookingDetails.source}
                  </FText>
                )}
                {(bookingDetails?.departureTime ||
                  bookingDetails?.arrivalTime) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.departureTime}
                  </FText>
                )}
                {(bookingDetails?.departurePlatform ||
                  bookingDetails?.arrivalPlatform) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {Strings.platform} {bookingDetails.departurePlatform}
                  </FText>
                )}
              </View>
              <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                {(bookingDetails?.destination) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.destination}
                  </FText>
                )}
                {(bookingDetails?.arrivalTime ||
                  bookingDetails?.departureTime) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.arrivalTime}
                  </FText>
                )}
                {(bookingDetails?.departurePlatform ||
                  bookingDetails?.arrivalPlatform) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {Strings.platform} {bookingDetails.arrivalPlatform}
                  </FText>
                )}
              </View>
            </View>
          </View>

          <View style={Styles.marginTop_12}>
            <FText style={Styles.portName} numberOfLines={1}>
              {bookingDetails?.trainName ?? Strings.trainNa}
            </FText>
            {bookingDetails?.pnr && (
              <FText style={Styles.time} numberOfLines={1}>
                {Strings.pnr}: {bookingDetails.pnr}
              </FText>
            )}
            {bookingDetails?.trainClass && (
              <FText style={Styles.time} numberOfLines={1}>
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
                  <TravellerSeat
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
  );
};

export default TrainDetailCard;
