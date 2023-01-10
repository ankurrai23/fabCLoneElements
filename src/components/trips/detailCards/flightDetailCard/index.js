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
import ContactSupport from '../../../../common/components/contactSupport';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import {getStatusObject} from '../../../../utils/Utils';
import FImage from '../../../../common/rn/FImage';

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
  cardStyle,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(FlightSubTripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(FlightSubTripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(FlightSubTripActions.VIEW_REMARKS);
  const supportAction = isActionEnabled(FlightSubTripActions.SUPPORT);

  const Actions = () => (
    <>
      <Separator style={Styles.actionsSeperator} />
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
    <View style={style}>
      {title && (
        <FText type={FONT_TYPE.MEDIUM} style={Styles.heading}>
          {title}
        </FText>
      )}
      {!!notificationText && <ModificationAlertBox msg={notificationText} />}
      <View style={[Styles.container, cardStyle]}>
        <FTouchableOpacity
          activeOpacity={tripDetails.reduceOpacity ? 0.6 : 1}
          style={Styles.card(tripDetails.reduceOpacity)}
          onPress={onCardPress}>
          <View style={[Styles.flexDirectionRow, Styles.flexRowAndAlignCenter]}>
            <View style={Styles.flexDirectionRow}>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {tripDetails.date}
              </FText>
              <FText
                style={
                  Styles.headerMonth
                }>{`${tripDetails.month} '${tripDetails.year}`}</FText>
            </View>
            {!!tripDetails.flightBookingStatus && (
              <TripStatus
                statusObj={getStatusObject(tripDetails.flightBookingStatus)}
              />
            )}
          </View>
          <View style={[Styles.flexDirectionRow, {marginTop: DP._8}]}>
            <View style={Styles.flexRowAndAlignCenter}>
              <FImage
                style={Styles.airlineIcon}
                source={{uri: tripDetails.airlineIcon}}
              />
              <View style={{marginLeft: DP._8}}>
                <FText>{tripDetails.airline}</FText>
                <FText
                  style={{
                    fontSize: DP._12,
                    color: Color.BLUEY_GREY,
                    marginTop: DP._2,
                  }}>
                  {tripDetails.airlineCode}-{tripDetails.flightNumber}
                </FText>
              </View>
            </View>
            <FText
              type={FONT_TYPE.MEDIUM}
              style={{fontSize: DP._16, lineHeight: DP._21}}>
              {tripDetails.price}
            </FText>
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_12]}>
            <View style={Styles.flex}>
              <FText style={Styles.time}>{tripDetails.departureTime}</FText>
              <FText style={Styles.portName}>
                {tripDetails.sourceAirportCode}
              </FText>
              <FText style={Styles.terminal}>
                {tripDetails.sourceAirportTerminal}
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
                <FText style={Styles.duration}>
                  {tripDetails.totalDuration}
                </FText>
                <View style={Styles.dot_two} />
                <FText style={Styles.duration}>{tripDetails.stop}</FText>
              </View>
            </View>
            <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
              <FText style={Styles.time}>{tripDetails.arrivalTime}</FText>
              <FText style={Styles.portName}>
                {tripDetails.destinationAirportCode}
              </FText>
              <FText style={Styles.terminal}>
                {tripDetails.destinationAirportTerminal}
              </FText>
            </View>
          </View>
        </FTouchableOpacity>
        <Separator style={Styles.actionsSeperator} />
        <FText style={Styles.bookingIdTitle}>
          {Strings.pnr}
          {': '}
          <FText type={FONT_TYPE.MEDIUM}>{tripDetails.pnr}</FText>
        </FText>
        {!!tripDetails.travelerNames.length && (
          <>
            <Separator style={Styles.actionsSeperator} />
            <View style={Styles.travelerDetailContainer}>
              <FText style={Styles.travelerDetailStyle}>
                {Strings.travelerDetails}
              </FText>
              {tripDetails.travelerNames.map((item, index) => (
                <View style={Styles.flexRow}>
                  <Icon.Person />
                  <FText key={index} style={Styles.travelerNameStyle}>
                    {item}
                  </FText>
                </View>
              ))}
            </View>
          </>
        )}
        {supportAction && (
          <>
            <Separator style={Styles.actionsSeperator} />
            <ContactSupport
              supportDetails={supportDetails}
              onContactSupportPress={onContactSupportPress}
              onClose={onClose}
              style={Styles.contactSupport}
            />
          </>
        )}
        {!actionsDisabled &&
          (rescheduleAction || cancelAction || viewRemarksAction) && (
            <Actions />
          )}
      </View>
    </View>
  );
};

export default FlightDetailCard;
