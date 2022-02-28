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
/*
TODO: 
1. Cancelled state prop
2. Actions in non itinerary view
*/
const FlightCard = ({
  item,
  onActionPress,
  onCardPress,
  onInfoPress,
  modified,
  style,
  itineraryView,
  showLine,
  showInfo,
  preferenceSelected,
  processed = true,
  greyed = true,
}) => {
  const ActionsInItinerary = () => (
    <>
      <Separator style={{marginHorizontal: DP._16}} />
      <View style={Styles.actionContainer(processed)}>
        <View style={Styles.flexRow}>
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
        {processed && (
          <FTouchableOpacity style={Styles.chevronContainer}>
            <Feather
              name="chevron-right"
              size={DP._18}
              color={Color.BATTLESHIP_GREY_TWO}
            />
          </FTouchableOpacity>
        )}
      </View>
    </>
  );
  return (
    <View style={[Styles.flexRow, style]}>
      {itineraryView && (
        <View>
          <FImage
            style={Styles.icon}
            source={
              greyed
                ? ImageConst.grayFlightIconWithBorder
                : ImageConst.flightIconWithBorder
            }
          />
          {showLine && (
            <View style={Styles.dashedLineContainer}>
              <DashedLine
                dashSize={3}
                dashWidth={1}
                dashColor={greyed ? Color.LIGHT_BLUEY_GREY : Color.DODGER_BLUE}
              />
            </View>
          )}
        </View>
      )}
      <View style={Styles.container}>
        <FTouchableOpacity
          style={Styles.card(modified)}
          onPress={() => onCardPress(item)}>
          <View style={[Styles.flexDirectionRow, Styles.baseline]}>
            <FText>
              <FText type={'medium'} style={Styles.date}>
                22
              </FText>
              <FText> Nov</FText>
            </FText>
            <FText type={'medium'} style={Styles.flightName}>
              {item.flightName || item.slotDetail}
            </FText>
          </View>
          <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
            <View>
              <FText style={Styles.portName}>
                {item.pnr ? item.boardingPort : item.boardingCity}
              </FText>
              <FText style={Styles.time}>
                {item.pnr ? item.boardingTime : item.boardingPort}
              </FText>
            </View>
            <View style={Styles.justifyContent_around(item.flightDuration)}>
              <MaterialCommunityIcon
                name="airplane"
                size={DP._18}
                color={Color.LIGHT_BLUEY_GREY}
                style={Styles.airplane}
              />
              {item.flightDuration && (
                <FText style={Styles.duration}>{item.flightDuration}</FText>
              )}
            </View>
            <View style={Styles.alignItem_flexEnd}>
              <FText style={Styles.portName}>
                {item.pnr ? item.arrivalPort : item.arrivalCity}
              </FText>
              <FText style={Styles.time}>
                {item.pnr ? item.arrivalTime : item.arrivalPort}
              </FText>
            </View>
          </View>
          {item.pnr && (
            <View style={[Styles.flexDirectionRow, Styles.marginTop_16]}>
              <View>
                <FText style={Styles.portName}>Terminal</FText>
                <FText style={Styles.time}>{item.terminal}</FText>
              </View>
              <View style={Styles.alignItem_flexEnd}>
                <FText style={Styles.portName}>PNR</FText>
                <FText style={Styles.time}>{item.pnr}</FText>
              </View>
            </View>
          )}
        </FTouchableOpacity>
        {!item.actionsDisabled && (
          <>{itineraryView ? <ActionsInItinerary /> : null}</>
        )}
        {itineraryView && showInfo && (
          <InfoBox
            preferenceSelected={preferenceSelected}
            onPress={onInfoPress}
          />
        )}
      </View>
    </View>
  );
};

export default FlightCard;
