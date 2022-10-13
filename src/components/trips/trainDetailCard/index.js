import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import DashedLine from '../../../common/components/dashedLine';
import Separator from '../../../common/components/separator';
import InfoBox from '../components/infoBox';
import TripStatus from '../tripStatus';
import {BusSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import TravellerSeat from '../../../common/components/travellerSeat';

const BusItineraryCard = ({
  onActionPress,
  onCardPress,
  style,
  showStatus,
  status,
  bookingDetails,
  actions,
  actionDisabled,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(BusSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(BusSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);
  const shortlistingAction = isActionEnabled(
    BusSubtripActions.SHORTLIST_FLIGHT_TRIPS,
  );
  const viewShortlistedFlightAction = isActionEnabled(
    BusSubtripActions.VIEW_SHORTLISTED_FLIGHT_TRIPS,
  );

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
            {showStatus && <TripStatus statusObj={status} />}
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
                {bookingDetails.duration}
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
                {(bookingDetails?.sourceCity ||
                  bookingDetails?.destinationCity) && (
                  <FText
                    style={[Styles.time, Styles.textAlign_left]}
                    numberOfLines={1}>
                    {bookingDetails.sourceCity}
                  </FText>
                )}
                {(bookingDetails?.departureTime ||
                  bookingDetails?.arrivalTime) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.departureTime}
                  </FText>
                )}
                {(bookingDetails?.sourcePF ||
                  bookingDetails?.destinationPF) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {Strings.platform} {bookingDetails.sourcePF}
                  </FText>
                )}
              </View>
              <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                {(bookingDetails?.destinationCity ||
                  bookingDetails?.sourceBusStop) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.destinationCity}
                  </FText>
                )}
                {(bookingDetails?.arrivalTime ||
                  bookingDetails?.departureTime) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.arrivalTime}
                  </FText>
                )}
                {(bookingDetails?.sourcePF ||
                  bookingDetails?.destinationPF) && (
                  <FText style={Styles.time} numberOfLines={1}>
                    {Strings.platform} {bookingDetails.destinationPF}
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
            {bookingDetails?.class && (
              <FText style={Styles.time} numberOfLines={1}>
                {bookingDetails.class}
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
                    rightData={detail.seat}
                    leftData={detail.name}
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

export default BusItineraryCard;
