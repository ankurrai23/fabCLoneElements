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
import Icon from '../../../assets/icons/Icon';
import {getStatusObject} from '../../../utils/Utils';
import {Strings} from '../../../utils/strings/index.travelPlus';

const BusItineraryCard = ({
  bookingDetails,
  onActionPress,
  onCardPress,
  style,
  title,
  actions,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(BusSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(BusSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);

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
    <>
      {title && (
        <FText type={FONT_TYPE.MEDIUM} style={Styles.heading}>
          {title}
        </FText>
      )}
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
              {bookingDetails?.bookingStatus && (
                <TripStatus
                  statusObj={getStatusObject(bookingDetails?.bookingStatus)}
                />
              )}
            </View>

            <View style={[Styles.marginTop_12]}>
              <View style={[Styles.flexDirectionRow]}>
                <FText style={Styles.portName} numberOfLines={1}>
                  {bookingDetails.source}
                </FText>
                <FText style={Styles.duration}>{bookingDetails.duration}</FText>
                <FText style={Styles.portName} numberOfLines={1}>
                  {bookingDetails.destination}
                </FText>
              </View>
              <View style={[Styles.flexDirectionRow]}>
                <View>
                  <FText style={Styles.time}>
                    {bookingDetails.sourceBusStop}
                  </FText>
                  <FText style={Styles.time}>
                    {bookingDetails.departureTime}
                  </FText>
                </View>
                <View style={Styles.alignItem_flexEnd}>
                  <FText style={Styles.time}>
                    {bookingDetails.destinationBusStop}
                  </FText>
                  <FText style={Styles.time}>
                    {bookingDetails.arrivalTime}
                  </FText>
                </View>
              </View>
            </View>

            <View style={Styles.marginTop_12}>
              <FText style={Styles.portName} numberOfLines={1}>
                {bookingDetails.travelCompany}
              </FText>
              <FText style={Styles.time}>{bookingDetails.busNumber}</FText>
              <FText style={Styles.time}>{bookingDetails.busInfo}</FText>
              <FText style={Styles.time}>
                {Strings.seatNumber}: {bookingDetails.seatNumber}
              </FText>
            </View>
            <Separator
              style={{
                marginTop: DP._12,
                backgroundColor: Color.LIGHT_PERIWINKLE,
              }}
            />
            <View style={Styles.marginTop_12}>
              <View style={[Styles.flexDirectionRow, Styles.alignItem_flexEnd]}>
                <View style={Styles.flowRow}>
                  <Icon.Person width={DP._16} height={DP._16} />
                  <FText
                    style={{
                      marginLeft: DP._10,
                      fontSize: DP._12,
                      color: Color.GREY_PURPLE,
                    }}>
                    {Strings.coordinatorName}
                  </FText>
                </View>
                <FText style={{fontSize: DP._12, color: Color.DARK}}>
                  {bookingDetails.coordinatorName}
                </FText>
              </View>
              <View style={[Styles.flexDirectionRow, Styles.alignItem_flexEnd]}>
                <View style={[Styles.flowRow, Styles.marginTop_12]}>
                  <Icon.PhoneIcon width={DP._16} height={DP._16} />
                  <FText
                    style={{
                      marginLeft: DP._10,
                      fontSize: DP._12,
                      color: Color.GREY_PURPLE,
                    }}>
                    {Strings.phoneNo}
                  </FText>
                </View>
                <FText style={Styles.driverContact}>
                  {bookingDetails.driverContact}
                </FText>
              </View>
            </View>
          </FTouchableOpacity>
          {(rescheduleAction || cancelAction || viewRemarksAction) && (
            <ActionsInItinerary />
          )}
        </View>
      </View>
    </>
  );
};

export default BusItineraryCard;
