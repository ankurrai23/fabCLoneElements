import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText from '../../../common/rn/FText';
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
/*
TODO:
1. Cancelled state prop
2. Actions in non itinerary view
*/
const FlightItineraryCard = ({
  item,
  onActionPress,
  onCardPress,
  onInfoPress,
  style,
  showLine,
  showInfo,
  preferenceSelected,
  timelineGreyed,
  processed,
}) => {
  const ActionsInItinerary = () => (
    <>
      <Separator style={{marginHorizontal: DP._16}} />
      <View style={Styles.actionContainer}>
        <FTouchableOpacity
          onPress={() => onActionPress(item.actions[1])}
          style={Styles.flexRowAndAlignCenter}>
          <AntDesign name="close" size={DP._18} color={Color.PASTEL_RED} />
          <FText style={Styles.cancel}>{item.actions?.[1]?.name}</FText>
        </FTouchableOpacity>
        <FTouchableOpacity
          onPress={() => onActionPress(item.actions[0])}
          style={Styles.primaryButtonStyle}>
          <FImage
            style={Styles.rescheduleIcon}
            source={ImageConst.rescheduleIcon}
          />
          <FText style={Styles.reschedule}>{item.actions?.[0]?.name}</FText>
        </FTouchableOpacity>
      </View>
    </>
  );
  return (
    <View style={[Styles.flexRow, style]}>
      <View>
        <FImage
          style={Styles.icon}
          source={
            timelineGreyed
              ? ImageConst.grayFlightIconWithBorder
              : ImageConst.flightIconWithBorder
          }
        />
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
        <FTouchableOpacity
          style={Styles.card}
          onPress={() => onCardPress(item)}>
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
            {item.status.key === 'CANCELLED' ? (
              <TripStatus statusObj={item.status} />
            ) : processed ? (
              <Feather
                name="chevron-right"
                size={DP._18}
                color={Color.BATTLESHIP_GREY_TWO}
              />
            ) : (
              <FText type={'medium'} style={Styles.slotDetail}>
                {item.slotDetail}
              </FText>
            )}
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
            <View>
              <FText style={Styles.portName}>
                {item.pnr ? item.sourceAirportCode : item.source}
              </FText>
              <FText style={Styles.time}>
                {item.pnr ? item.departureTime : item.sourceAirportCode}
              </FText>
            </View>
            <View style={Styles.justifyContent_around(item.duration)}>
              <MaterialCommunityIcon
                name="airplane"
                size={DP._18}
                color={Color.LIGHT_BLUEY_GREY}
                style={Styles.airplane}
              />
              {item.duration && (
                <FText style={Styles.duration}>{item.duration}</FText>
              )}
            </View>
            <View style={Styles.alignItem_flexEnd}>
              <FText style={Styles.portName}>
                {item.pnr ? item.destinationAirportCode : item.destination}
              </FText>
              <FText style={Styles.time}>
                {item.pnr ? item.arrivalTime : item.destinationAirportCode}
              </FText>
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
        {!item.actionsDisabled && <ActionsInItinerary />}
        {showInfo && (
          <InfoBox
            preferenceSelected={preferenceSelected}
            onPress={onInfoPress}
          />
        )}
      </View>
    </View>
  );
};

export default FlightItineraryCard;
