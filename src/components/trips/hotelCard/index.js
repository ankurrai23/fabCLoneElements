import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {ImageConst} from '../../../utils/imageConst';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {
  DashedLine,
  Separator,
  FImage,
  FText,
  FTouchableOpacity,
  TripStatus,
} from '../../..';
import Styles from './Styles';
import InfoBox from '../components/infoBox';

const HotelCard = ({
  item,
  onActionPress,
  onCardPress,
  onInfoPress,
  style,
  itineraryView,
  showLine,
  showInfo,
  preferenceSelected,
  onDirectionPress,
  processed = false,
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
                ? ImageConst.grayHotelIconWithBorder
                : ImageConst.hotelIconWithBorder
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
      <View style={[Styles.container]}>
        <FTouchableOpacity onPress={onCardPress}>
          <View style={Styles.dateAndStatusContainer}>
            <FText>
              <FText type="medium" style={Styles.date}>
                {item.date}
              </FText>
              <FText style={Styles.month}> {item.month}</FText>
            </FText>
            {item.status && <TripStatus statusObj={item.status} />}
          </View>
          <View style={{paddingHorizontal: DP._16}}>
            <FText style={Styles.hotelName}>{item.title}</FText>
            <FText style={Styles.hotelLocation}>{item.location}</FText>
            <View style={Styles.checkInAndDirectionContainer}>
              <FText style={Styles.checkIn}>Check-in {item.checkInTime}</FText>
              <FTouchableOpacity
                style={[Styles.flexRowWithAlignCenter]}
                onPress={onDirectionPress}>
                <MaterialCommunityIcons
                  name="navigation"
                  size={DP._18}
                  color={Color.DODGER_BLUE}
                  style={Styles.directionIcon}
                />
                <FText
                  style={{
                    fontSize: DP._12,
                    color: Color.DODGER_BLUE,
                  }}>
                  Directions
                </FText>
              </FTouchableOpacity>
            </View>
          </View>
        </FTouchableOpacity>
        {item.actions && <ActionsInItinerary />}
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

export default HotelCard;
