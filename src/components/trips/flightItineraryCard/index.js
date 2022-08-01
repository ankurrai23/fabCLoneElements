import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './Styles';
import FImage from '../../../common/rn/FImage';
import DashedLine from '../../../common/components/dashedLine';
import Separator from '../../../common/components/separator';
import InfoBox from '../components/infoBox';
import {ImageConst} from '../../../utils/imageConst';
import {TripStatus} from '../../../index';
import {FlightSubTripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
/*
TODO:
1. Cancelled state prop
2. Actions in non itinerary view
*/
const FlightItineraryCard = ({
  item,
  onActionPress,
  onCardPress,
  style,
  hideIcon,
  showLine,
  showInfo,
  timelineGreyed,
  processed,
}) => {
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(FlightSubTripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(FlightSubTripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(FlightSubTripActions.VIEW_REMARKS);
  const shortlistingAction = isActionEnabled(
    FlightSubTripActions.SHORTLIST_FLIGHT_TRIPS,
  );
  const viewShortlistedFlightAction = isActionEnabled(
    FlightSubTripActions.VIEW_SHORTLISTED_FLIGHT_TRIPS,
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
                <AntDesign
                  name="close"
                  size={DP._18}
                  color={Color.PASTEL_RED}
                />
                <FText style={Styles.cancel}>{cancelAction.name}</FText>
              </FTouchableOpacity>
            )}
            {rescheduleAction && (
              <FTouchableOpacity
                onPress={() => onActionPress(rescheduleAction)}
                style={Styles.primaryButtonStyle}>
                <FImage
                  style={Styles.rescheduleIcon}
                  source={ImageConst.rescheduleIcon}
                />
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
      <View>
        {!hideIcon && (
          <FImage
            style={Styles.icon}
            source={
              timelineGreyed
                ? ImageConst.grayFlightIconWithBorder
                : ImageConst.flightIconWithBorder
            }
          />
        )}
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
        <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
          <View style={[Styles.flexDirectionRow, Styles.baseline]}>
            <FText>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                {item.date}
              </FText>
              <FText
                style={{
                  color: Color.BLUEY_GREY,
                  fontSize: DP._12,
                }}>{` ${item.month}`}</FText>
            </FText>
            {item.showStatus ? (
              <TripStatus statusObj={item.status} />
            ) : processed ? (
              <Feather
                name="chevron-right"
                size={DP._18}
                color={Color.BATTLESHIP_GREY_TWO}
              />
            ) : (
              <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
                {item.slotDetail}
              </FText>
            )}
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
            <View style={Styles.flex}>
              <FText style={Styles.portName} numberOfLines={1}>
                {processed
                  ? item.sourceAirportCode +
                    (item.sourceAirportTerminal
                      ? ` - ${item.sourceAirportTerminal}`
                      : '')
                  : item.source}
              </FText>
              <FText style={Styles.time}>
                {processed ? item.departureTime : item.sourceAirportCode}
              </FText>
            </View>
            <View
              style={[
                Styles.justifyContent_around(item.duration),
                Styles.flex,
              ]}>
              <MaterialCommunityIcon
                name="airplane"
                size={DP._18}
                color={Color.LIGHT_BLUEY_GREY}
                style={Styles.airplane}
              />
              {item.duration && (
                <View style={Styles.durationContainer}>
                  <FText style={Styles.duration}>{item.duration}</FText>
                  <View style={Styles.dot_two} />
                  <FText style={Styles.duration}>{item.stop}</FText>
                </View>
              )}
            </View>
            <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
              <FText style={Styles.portName} numberOfLines={1}>
                {processed
                  ? item.destinationAirportCode +
                    (item.destinationAirportTerminal
                      ? ` - ${item.destinationAirportTerminal}`
                      : '')
                  : item.destination}
              </FText>
              <FText style={Styles.time}>
                {processed ? item.arrivalTime : item.destinationAirportCode}
              </FText>
            </View>
          </View>
          {processed && (
            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
              <View>
                <FText style={Styles.portName}>{item.airline}</FText>
                <FText style={Styles.time}>{item.flightNumber}</FText>
              </View>
              <View style={Styles.alignItem_flexEnd}>
                <FText style={Styles.portName}>{Strings.pnr}</FText>
                <FText style={Styles.time}>{item.pnr}</FText>
              </View>
            </View>
          )}
        </FTouchableOpacity>
        {(rescheduleAction || cancelAction || viewRemarksAction) && (
          <ActionsInItinerary />
        )}
        {showInfo && (
          <InfoBox
            isAlert={shortlistingAction || !!item.notificationText}
            text={
              viewShortlistedFlightAction?.name ||
              shortlistingAction?.name ||
              item.notificationText
            }
            showChevron={!!shortlistingAction}
            disablePressEvent={!!item.notificationText}
            onPress={() =>
              onActionPress(viewShortlistedFlightAction || shortlistingAction)
            }
          />
        )}
      </View>
    </View>
  );
};

export default FlightItineraryCard;
