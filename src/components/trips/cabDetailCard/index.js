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
import {CabSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {getStatusObject} from '../../../utils/Utils';

const CabItineraryCard = ({item, onActionPress, onCardPress, style, title}) => {
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(CabSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(CabSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(CabSubtripActions.VIEW_REMARKS);

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
        <View style={[Styles.container, style]}>
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
              {!!item.carBookingStatus && (
                <TripStatus
                  statusObj={getStatusObject(item.carBookingStatus)}
                />
              )}
            </View>

            <View style={Styles.marginTop_16}>
              <FText style={Styles.portName} numberOfLines={1}>
                {item.carName}
              </FText>
              <View style={Styles.flexDirectionRow}>
                <FText style={Styles.time}>{item.carNumber}</FText>
                <FText style={Styles.time}>{item.carDetails}</FText>
              </View>
            </View>

            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
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
        </View>
      </View>
    </>
  );
};

export default CabItineraryCard;
