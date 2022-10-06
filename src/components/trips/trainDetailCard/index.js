import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../common/components/separator';
import TripStatus from '../tripStatus';
import {TrainSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {getStatusObject} from '../../../utils/Utils';

const TrainItineraryCard = ({
  bookingDetails,
  onActionPress,
  onCardPress,
  showStatus,
  style,
  title,
  actions,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(TrainSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(TrainSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(TrainSubtripActions.VIEW_REMARKS);

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
              {showStatus ? (
                <TripStatus
                  statusObj={getStatusObject(bookingDetails.trainStatus)}
                />
              ) : (
                <View style={[Styles.flexDirectionRow, Styles.baseline]}>
                  <Icon.ChevronRight
                    width={DP._18}
                    height={DP._18}
                    stroke={Color.BATTLESHIP_GREY_TWO}
                  />
                </View>
              )}
            </View>

            <View style={[Styles.marginTop_12]}>
              <View style={[Styles.flexDirectionRow]}>
                <FText style={Styles.portName} numberOfLines={1}>
                  {bookingDetails.sourceStationCode}
                </FText>
                <FText style={Styles.duration}>{bookingDetails.duration}</FText>
                <FText style={Styles.portName} numberOfLines={1}>
                  {bookingDetails.destinationStationCode}
                </FText>
              </View>
              <View style={[Styles.flexDirectionRow]}>
                <View>
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.sourceCity}
                  </FText>
                  <FText style={Styles.time}>
                    {bookingDetails.departureTime}
                  </FText>
                </View>
                <View style={Styles.alignItem_flexEnd}>
                  <FText style={Styles.time} numberOfLines={1}>
                    {bookingDetails.destinationCity}
                  </FText>
                  <FText style={Styles.time}>
                    {bookingDetails.arrivalTime}
                  </FText>
                </View>
              </View>
            </View>

            <View style={Styles.marginTop_12}>
              <FText style={Styles.portName} numberOfLines={1}>
                {bookingDetails.trainName}
              </FText>
              <FText style={Styles.time}>
                {Strings.pnr}: {bookingDetails.pnr}
              </FText>
              <FText style={Styles.time}>
                {Strings.class}: {bookingDetails.class}
              </FText>
              <FText style={Styles.time}>
                {Strings.berth}: {bookingDetails.berth}
              </FText>
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

export default TrainItineraryCard;
