import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
// import {Color} from '../../../utils/color';
import {Color} from '../../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../../common/components/separator';
import TripStatus from '../../tripStatus';
import {FlightSubTripActions} from '../../../../utils/SubTripActions';
import ModificationAlertBox from '../../components/modificationAlertBox';
import {getStatusObject} from '../../hotelDetailCard';
import ContactSupport from '../../../../common/components/contactSupport';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';

const FlightDetailCard = ({
  title,
  tripDetails,
  onActionPress,
  onCardPress,
  style,
  supportDetails,
  onContactSupportPress,
  onClose,
  actions,
  notificationText,
  actionsDisabled,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(FlightSubTripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(FlightSubTripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(FlightSubTripActions.VIEW_REMARKS);
  const supportAction = isActionEnabled(FlightSubTripActions.SUPPORT);

  const Actions = () => (
    <>
      <Separator style={{backgroundColor: Color.VERY_LIGHT_BLUE}} />
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
      </View>
    </>
  );
  if (!tripDetails) {
    return null;
  }
  return (
    <>
      {title && (
        <FText type={FONT_TYPE.MEDIUM} style={Styles.heading}>
          {title}
        </FText>
      )}
      {!!notificationText && (
        <ModificationAlertBox
          msg={notificationText}
          style={{marginHorizontal: DP._16}}
        />
      )}
      <View style={[Styles.container, style]}>
        <FTouchableOpacity
          activeOpacity={tripDetails.reduceOpacity ? 0.6 : 1}
          style={Styles.card(tripDetails.reduceOpacity)}
          onPress={onCardPress}>
          <View style={[Styles.flexDirectionRow, Styles.baseline]}>
            <FText>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {tripDetails.date}
              </FText>
              <FText
                style={{
                  color: Color.BLUEY_GREY,
                  fontSize: DP._12,
                }}>{` ${tripDetails.month}`}</FText>
            </FText>
            {!!tripDetails.flightBookingStatus && (
              <TripStatus
                statusObj={getStatusObject(tripDetails.flightBookingStatus)}
              />
            )}
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
            <View style={Styles.flex}>
              <FText style={Styles.time}>{tripDetails.departureTime}</FText>
              <FText style={Styles.portName}>
                {`${tripDetails.sourceAirportCode}` +
                  (tripDetails.sourceAirportTerminal
                    ? ` - ${tripDetails.sourceAirportTerminal}`
                    : '')}
              </FText>
            </View>
            <View
              style={[
                Styles.justifyContent_around(tripDetails.duration),
                Styles.flex,
              ]}>
              <Icon.Aeroplane
                width={DP._18}
                height={DP._18}
                fill={Color.LIGHT_BLUEY_GREY}
                style={Styles.airplane}
              />
              <View style={Styles.durationContainer}>
                <FText style={Styles.duration}>{tripDetails.duration}</FText>
                <View style={Styles.dot_two} />
                <FText style={Styles.duration}>{tripDetails.stop}</FText>
              </View>
            </View>
            <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
              <FText style={Styles.time}>{tripDetails.arrivalTime}</FText>
              <FText style={Styles.portName}>
                {`${tripDetails.destinationAirportCode}` +
                  (tripDetails.destinationAirportTerminal
                    ? ` - ${tripDetails.destinationAirportTerminal}`
                    : '')}
              </FText>
            </View>
          </View>
          {tripDetails.pnr && (
            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
              <View>
                <FText style={Styles.time}>{tripDetails.airline}</FText>
                <FText style={Styles.portName}>
                  {tripDetails.flightNumber}
                </FText>
              </View>
              <View style={Styles.alignItem_flexEnd}>
                <FText style={Styles.time}>{Strings.pnr}</FText>
                <FText style={Styles.portName}>{tripDetails.pnr}</FText>
              </View>
            </View>
          )}
          {supportAction && (
            <>
              <Separator style={Styles.separator} />
              <ContactSupport
                supportDetails={supportDetails}
                onContactSupportPress={onContactSupportPress}
                onClose={onClose}
              />
            </>
          )}
        </FTouchableOpacity>
        {!actionsDisabled &&
          (rescheduleAction || cancelAction || viewRemarksAction) && (
            <Actions />
          )}
      </View>
    </>
  );
};

export default FlightDetailCard;
