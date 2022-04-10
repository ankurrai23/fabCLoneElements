import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from './Styles';
import FImage from '../../../common/rn/FImage';
import Separator from '../../../common/components/separator';
import {ImageConst} from '../../../utils/imageConst';
import {TripStatus} from '../../../index';
import {FlightSubTripActions} from '../../../utils/SubTripActions';
import ModificationAlertBox from '../components/modificationAlertBox';
import {getStatusObject} from '../hotelDetailCard';

const FlightDetailCard = ({title, item, onActionPress, onCardPress, style}) => {
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(FlightSubTripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(FlightSubTripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(FlightSubTripActions.VIEW_REMARKS);

  const Actions = () => (
    <>
      <Separator style={{backgroundColor: Color.VERY_LIGHT_BLUE}} />
      <View style={Styles.actionContainer}>
        {cancelAction && (
          <FTouchableOpacity
            onPress={() => onActionPress(cancelAction)}
            style={Styles.flexRowAndAlignCenter}>
            <AntDesign name="close" size={DP._18} color={Color.PASTEL_RED} />
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
      </View>
    </>
  );
  if (!item) {
    return null;
  }
  return (
    <>
      {title && (
        <FText type="medium" style={Styles.heading}>
          {title}
        </FText>
      )}
      {item.modificationRequested && (
        <ModificationAlertBox
          msg={'Your have sent a modification request for this booking.'}
          style={{marginHorizontal: DP._16}}
        />
      )}
      <View style={[Styles.container, style]}>
        <FTouchableOpacity
          disabled={item.cancelled}
          activeOpacity={item.modificationRequested || item.cancelled ? 0.4 : 1}
          style={Styles.card(item.modificationRequested || item.cancelled)}
          onPress={onCardPress}>
          <View style={[Styles.flexDirectionRow, Styles.baseline]}>
            <FText>
              <FText type={'medium'} style={Styles.date}>
                {item.date}
              </FText>
              <FText
                style={{
                  color: Color.BLUEY_GREY,
                  fontSize: DP._12,
                }}>{` ${item.month}`}</FText>
            </FText>
            {!!item.flightBookingStatus && (
              <TripStatus
                statusObj={getStatusObject(item.flightBookingStatus)}
              />
            )}
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
            <View style={Styles.flex}>
              <FText style={Styles.portName}>{item.sourceAirportCode}</FText>
              <FText style={Styles.time}>{item.departureTime}</FText>
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
              <View style={Styles.durationContainer}>
                <FText style={Styles.duration}>{item.duration}</FText>
                <View style={Styles.dot_two} />
                <FText style={Styles.duration}>{item.journeyType}</FText>
              </View>
            </View>
            <View style={[Styles.alignItem_flexEnd, Styles.flex]}>
              <FText style={Styles.portName}>
                {item.destinationAirportCode}
              </FText>
              <FText style={Styles.time}>{item.arrivalTime}</FText>
            </View>
          </View>
          {item.pnr && (
            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
              <View>
                <FText style={Styles.portName}>{item.airline}</FText>
                <FText style={Styles.time}>{item.flightNumber}</FText>
              </View>
              <View style={Styles.alignItem_flexEnd}>
                <FText style={Styles.portName}>PNR</FText>
                <FText style={Styles.time}>{item.pnr}</FText>
              </View>
            </View>
          )}
        </FTouchableOpacity>
        {!item.actionsDisabled &&
          (rescheduleAction || cancelAction || viewRemarksAction) && (
            <Actions />
          )}
      </View>
    </>
  );
};

export default FlightDetailCard;
