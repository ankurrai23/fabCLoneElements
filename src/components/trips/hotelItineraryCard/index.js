import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

import DashedLine from '../../../common/components/dashedLine';
import Separator from '../../../common/components/separator';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import TripStatus from '../tripStatus';

import Styles from './Styles';
import InfoBox from '../components/infoBox';
import {HotelSubTripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {TRIP_STATUS} from '../../../utils/Constants';
import Icon from '../../../assets/icons/Icon';

const HotelItineraryCard = ({
  item,
  onActionPress,
  onCardPress,
  style,
  hideIcon,
  showLine,
  showInfo,
  processed,
  timelineGreyed,
  showConfirmedStatus,
}) => {
  const sameMonthDates = item.checkIn.month === item.checkOut.month;

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

  const confirmedStatus = {
    key: 'CONFIRMED',
    value: 'Confirmed',
    textColor: Color.DARK_SEA_FOAM,
    bgColor: Color.DARK_SEA_FOAM + '26',
  };

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
            {modifyAction && (
              <FTouchableOpacity
                onPress={() => onActionPress(modifyAction)}
                style={Styles.primaryButtonStyle}>
                <Icon.Reschedule width={DP._16} height={DP._16} />
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
        {!hideIcon &&
          (timelineGreyed ? (
            <Icon.HotelItineraryGreyed
              width={DP._30}
              height={DP._30}
              style={Styles.icon}
            />
          ) : (
            <Icon.HotelItinerary
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
        <FTouchableOpacity onPress={onCardPress}>
          <View style={Styles.dateAndStatusContainer}>
            {sameMonthDates ? (
              <View style={Styles.datesContainer}>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {item.checkIn.date}
                </FText>
                <FText style={Styles.hyphen}>{' - '}</FText>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {item.checkOut.date}
                </FText>
                <FText style={Styles.month}> {item.checkIn.month}</FText>
              </View>
            ) : (
              <View style={Styles.datesContainer}>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {item.checkIn.date}
                </FText>
                <FText style={Styles.month}> {item.checkIn.month}</FText>
                <FText style={Styles.hyphen}>{' - '}</FText>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.date}>
                  {item.checkOut.date}
                </FText>
                <FText style={Styles.month}> {item.checkOut.month}</FText>
              </View>
            )}
            {showConfirmedStatus && <TripStatus statusObj={confirmedStatus} />}
            {item?.status?.key === TRIP_STATUS.CANCELLED ? (
              <TripStatus statusObj={item.status} />
            ) : (
              processed && (
                <Icon.ChevronRight
                  width={DP._18}
                  height={DP._18}
                  stroke={Color.BATTLESHIP_GREY_TWO}
                />
              )
            )}
          </View>
          <View style={{paddingHorizontal: DP._16}}>
            <FText style={Styles.hotelName}>{item.title}</FText>
            <FText style={Styles.hotelLocation}>{item.location}</FText>
            <View style={Styles.checkInAndDirectionContainer}>
              {item.checkInTime ? (
                <FText style={Styles.checkIn}>
                  {Strings.checkInTime(item.checkInTime)}
                </FText>
              ) : (
                <View />
              )}
              {directionAction && processed && (
                <FTouchableOpacity
                  style={[Styles.flexRowWithAlignCenter]}
                  onPress={() => onActionPress(directionAction)}>
                  <Icon.Navigation
                    width={DP._16}
                    height={DP._16}
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
          </View>
        </FTouchableOpacity>
        {!item.actionsDisabled &&
          (modifyAction || cancelAction || viewRemarksAction) && (
            <ActionsInItinerary />
          )}
        {showInfo && (
          <InfoBox
            isAlert={shortlistingAction || !!item.notificationText}
            text={
              viewShortlistedHotelAction?.name ||
              shortlistingAction?.name ||
              item.notificationText
            }
            showChevron={!!shortlistingAction}
            disablePressEvent={!!item.notificationText}
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
