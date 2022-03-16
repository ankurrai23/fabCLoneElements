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
import {HotelSubTripActions} from '../../../utils/SubTripActions';

const HotelItineraryCard = ({
  item,
  onActionPress,
  onCardPress,
  style,
  hideIcon,
  showLine,
  showInfo,
  preferenceSelected,
  processed,
  timelineGreyed,
}) => {
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const modifyAction = isActionEnabled(HotelSubTripActions.MODIFY);
  const cancelAction = isActionEnabled(HotelSubTripActions.CANCEL);

  const viewRemarksAction = isActionEnabled(HotelSubTripActions.VIEW_REMARKS);
  const directionAction = isActionEnabled(HotelSubTripActions.DIRECTION);
  const shortlistingAction = isActionEnabled(
    HotelSubTripActions.SHORTLIST_HOTEL_TRIPS,
  );
  const viewShortlistedHotelAction = isActionEnabled(
    HotelSubTripActions.VIEW_SHORTLISTED_HOTEL_TRIPS,
  );
  const ActionsInItinerary = () => (
    <>
      <Separator style={{marginHorizontal: DP._16}} />
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
            {modifyAction && (
              <FTouchableOpacity
                onPress={() => onActionPress(modifyAction)}
                style={Styles.primaryButtonStyle}>
                <FImage
                  style={Styles.rescheduleIcon}
                  source={ImageConst.rescheduleIcon}
                />
                <FText style={Styles.reschedule}>{modifyAction.name}</FText>
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
                ? ImageConst.grayHotelIconWithBorder
                : ImageConst.hotelIconWithBorder
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
      <View style={[Styles.container]}>
        <FTouchableOpacity onPress={onCardPress}>
          <View style={Styles.dateAndStatusContainer}>
            <FText>
              <FText type="medium" style={Styles.date}>
                {item.date}
              </FText>
              <FText style={Styles.month}> {item.month}</FText>
            </FText>
            {item?.status?.key === 'CANCELLED' ? (
              <TripStatus statusObj={item.status} />
            ) : (
              processed && (
                <Feather
                  name="chevron-right"
                  size={DP._18}
                  color={Color.BATTLESHIP_GREY_TWO}
                />
              )
            )}
          </View>
          <View style={{paddingHorizontal: DP._16}}>
            <FText style={Styles.hotelName}>{item.title}</FText>
            <FText style={Styles.hotelLocation}>{item.location}</FText>
            {item.checkInTime && (
              <View style={Styles.checkInAndDirectionContainer}>
                <FText style={Styles.checkIn}>
                  Check-in {item.checkInTime}
                </FText>
                {directionAction && (
                  <FTouchableOpacity
                    style={[Styles.flexRowWithAlignCenter]}
                    onPress={() => onActionPress(directionAction)}>
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
                      {directionAction.name}
                    </FText>
                  </FTouchableOpacity>
                )}
              </View>
            )}
          </View>
        </FTouchableOpacity>
        {!item.actionsDisabled &&
          (modifyAction || cancelAction || viewRemarksAction) && (
            <ActionsInItinerary />
          )}
        {showInfo && (
          <InfoBox
            preferenceSelected={preferenceSelected}
            onPress={() =>
              onActionPress(viewShortlistedHotelAction || shortlistingAction)
            }
          />
        )}
      </View>
    </View>
  );
};

export default HotelItineraryCard;
