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
                {bookingDetails.sourceStop}
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
                {bookingDetails.destinationStop}
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
              </View>
              <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                {(bookingDetails?.destination || bookingDetails?.source) && (
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
              </View>
            </View>
          </View>
          {bookingDetails.cabsData &&
            bookingDetails.cabsData.length > 0 &&
            bookingDetails.cabsData.map((cabDetails, index) => (
              <>
                <Separator style={Styles.sepratorStyle} />
                <View style={Styles.marginTop_12}>
                  <View style={Styles.marginBottom_16}>
                    <FText
                      numberOfLines={1}
                      style={[
                        Styles.marginBottom_8,
                        Styles.fontSize_12,
                        Styles.color_grey,
                      ]}>
                      {Strings.cab}{' '}
                      {bookingDetails.cabsData.length > 1 && index + 1}{' '}
                      {Strings.details}
                    </FText>

                    <FText style={Styles.portName} numberOfLines={1}>
                      {cabDetails?.carName ?? Strings.carNa}
                    </FText>
                    {cabDetails?.carNumber && (
                      <FText style={Styles.time} numberOfLines={1}>
                        {cabDetails.carNumber}
                      </FText>
                    )}
                    {cabDetails?.bookingId && (
                      <FText style={Styles.time} numberOfLines={1}>
                        {Strings.bookingId}: {cabDetails.bookingId}
                      </FText>
                    )}
                  </View>

                  <FText
                    numberOfLines={1}
                    style={[
                      Styles.marginBottom_12,
                      Styles.fontSize_12,
                      Styles.color_grey,
                    ]}>
                    {Strings.driverDetails}
                  </FText>
                  {cabDetails?.driverName && (
                    <TravellerSeat
                      dataIcon={<Icon.Person width={DP._16} height={DP._16} />}
                      rightData={cabDetails.driverName}
                      leftDefaultData={Strings.name}
                      // leftData={'lskdflskfjslkfjsldjflsdkfjsdlkfj'}
                    />
                  )}
                  {cabDetails?.driverContact && (
                    <TravellerSeat
                      dataIcon={
                        <Icon.PhoneIcon width={DP._16} height={DP._16} />
                      }
                      rightData={cabDetails.driverContact}
                      leftDefaultData={Strings.phoneNo}
                      // leftData={'lskdflskfjslkfjsldjflsdkfjsdlkfj'}
                      rightDataStyle={Styles.color_blue}
                      style={cabDetails.driverName && Styles.marginTop_12}
                    />
                  )}
                </View>
              </>
            ))}
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
