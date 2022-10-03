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
import {FlightSubTripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const CabItineraryCard = ({
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
              <View style={[Styles.flexDirectionRow, Styles.baseline]}>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
                  {Strings.pickupTime} {item.pickupTime}
                </FText>
                <Icon.ChevronRight
                  width={DP._18}
                  height={DP._18}
                  stroke={Color.BATTLESHIP_GREY_TWO}
                />
              </View>
            ) : (
              <FText type={FONT_TYPE.MEDIUM} style={Styles.slotDetail}>
                {item.slotDetail}
              </FText>
            )}
          </View>

          {processed && (
            <View style={Styles.marginTop_12}>
              <FText style={Styles.portName} numberOfLines={1}>
                {item.carName}
              </FText>
              <View style={Styles.flexDirectionRow}>
                <FText style={Styles.time}>{item.carNumber}</FText>
                <FText style={Styles.time}>{item.carDetails}</FText>
              </View>
            </View>
          )}

          <View style={[Styles.flexDirectionRow, Styles.marginTop_12]}>
            <View style={Styles.flex}>
              <FText style={Styles.portName} numberOfLines={1}>
                {item.sourceCity}
              </FText>
              <FText style={Styles.time}>{item.sourceLocation}</FText>
            </View>
            <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
              <FText style={Styles.portName} numberOfLines={1}>
                {item.destinationCity}
              </FText>
              <FText style={Styles.time}>{item.destinationLocation}</FText>
            </View>
          </View>
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

export default CabItineraryCard;
