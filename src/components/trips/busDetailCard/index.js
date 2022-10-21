import React from 'react';
import {View, Linking} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../common/components/separator';
import TripStatus from '../tripStatus';
import {BusSubtripActions} from '../../../utils/SubTripActions';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

import {getStatusObject} from '../../../utils/Utils';

const DetialRow = ({
  dataIcon,
  leftData,
  rightData,
  leftDefaultData,
  rightDefaultData,
  style,
  rightDataStyle,
  leftDataStyle,
  onClickRightData,
  onClickLeftData,
}) => {
  return (
    <View style={[Styles.flexDirectionRow, style]}>
      <FTouchableOpacity
        style={[Styles.flexRow, Styles.width_48]}
        onPress={onClickLeftData}>
        {dataIcon}
        <FText
          style={[Styles.detailLableStyle, leftDataStyle]}
          numberOfLines={1}>
          {leftData ?? leftDefaultData}
        </FText>
      </FTouchableOpacity>
      <FTouchableOpacity onPress={onClickRightData} style={Styles.width_48}>
        <FText
          style={[Styles.fontSize_12, Styles.textAlign_right, rightDataStyle]}
          numberOfLines={1}>
          {rightData ?? rightDefaultData}
        </FText>
      </FTouchableOpacity>
    </View>
  );
};

const BusDetailCard = ({
  onActionPress,
  onCardPress,
  style,
  bookingDetails,
  actions,
  actionDisabled,
  onPhoneNumberClicked,
}) => {
  const isActionEnabled = (type) => actions?.find((e) => e.type === type);

  const rescheduleAction = isActionEnabled(BusSubtripActions.RESCHEDULE);
  const cancelAction = isActionEnabled(BusSubtripActions.CANCEL);
  const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);

  const ActionsInItinerary = () => (
    <>
      <Separator style={Styles.actionsSeperator} />
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
            {!!bookingDetails.busBookingStatus && (
              <TripStatus
                statusObj={getStatusObject(bookingDetails.busBookingStatus)}
              />
            )}
          </View>

          <View style={[Styles.marginTop_12]}>
            <View style={[Styles.flexDirectionRow]}>
              <FText
                style={[Styles.heading, Styles.width_40, Styles.textAlign_left]}
                numberOfLines={1}>
                {bookingDetails.departureTime}
              </FText>
              <FText
                style={[
                  Styles.duration,
                  Styles.width_20,
                  Styles.textAlign_center,
                ]}>
                {bookingDetails.estimateDuration}
              </FText>
              <FText
                style={[
                  Styles.heading,
                  Styles.width_40,
                  Styles.textAlign_right,
                ]}
                numberOfLines={1}>
                {bookingDetails.arrivalTime}
              </FText>
            </View>
            <View style={[Styles.flexDirectionRow]}>
              <View style={Styles.width_40}>
                {(bookingDetails?.sourceLocality ||
                  bookingDetails?.destinationLocality) && (
                  <FText
                    style={[Styles.detail, Styles.textAlign_left]}
                    numberOfLines={1}>
                    {bookingDetails.sourceLocality}
                  </FText>
                )}
                {(bookingDetails?.source || bookingDetails?.destination) && (
                  <FText style={Styles.detail} numberOfLines={1}>
                    {bookingDetails.source}
                  </FText>
                )}
              </View>
              <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                {(bookingDetails?.destinationLocality ||
                  bookingDetails?.sourceLocality) && (
                  <FText style={Styles.detail} numberOfLines={1}>
                    {bookingDetails.destinationLocality}
                  </FText>
                )}
                {(bookingDetails?.source || bookingDetails?.destination) && (
                  <FText style={Styles.detail} numberOfLines={1}>
                    {bookingDetails.destination}
                  </FText>
                )}
              </View>
            </View>
          </View>

          <View style={Styles.marginTop_12}>
            <FText style={Styles.heading} numberOfLines={1}>
              {bookingDetails?.busName ?? Strings.busNa}
            </FText>
            {(bookingDetails.busNumber || bookingDetails.pnr) && (
              <View style={[Styles.flexDirectionRow]}>
                <FText
                  style={[
                    Styles.detail,
                    Styles.textAlign_left,
                    Styles.width_40,
                  ]}
                  numberOfLines={1}>
                  {bookingDetails.busNumber}
                </FText>

                <FText
                  style={[
                    Styles.detail,
                    Styles.textAlign_right,
                    Styles.width_40,
                  ]}
                  numberOfLines={1}>
                  {Strings.pnr}: {bookingDetails.pnr}
                </FText>
              </View>
            )}
            {bookingDetails?.busType && (
              <FText style={Styles.detail} numberOfLines={1}>
                {bookingDetails.busType}
              </FText>
            )}
          </View>
          {bookingDetails.travellersDetails &&
            bookingDetails.travellersDetails.length > 0 && (
              <>
                <Separator style={Styles.sepratorStyle} />

                <FText
                  numberOfLines={1}
                  style={[
                    Styles.marginTop_12,
                    Styles.fontSize_12,
                    Styles.color_grey,
                  ]}>
                  {Strings.travelersDetails}
                </FText>
                {bookingDetails.travellersDetails.map((detail, index) => (
                  <DetialRow
                    dataIcon={<Icon.Person width={DP._16} height={DP._16} />}
                    rightData={detail.seatNo}
                    leftData={detail.travellerName}
                    style={
                      index === 0 ? Styles.marginTop_12 : Styles.marginTop_8
                    }
                  />
                ))}
              </>
            )}
          {(bookingDetails?.CoordinatorNo ||
            bookingDetails?.CoordinatorName) && (
            <>
              <Separator style={Styles.sepratorStyle} />
              <View style={Styles.marginTop_12}>
                <FText
                  numberOfLines={1}
                  style={[
                    Styles.marginBottom_12,
                    Styles.fontSize_12,
                    Styles.color_grey,
                  ]}>
                  {Strings.coordinatorDetails}
                </FText>
                {bookingDetails?.CoordinatorName && (
                  <DetialRow
                    dataIcon={<Icon.Person width={DP._16} height={DP._16} />}
                    rightData={bookingDetails.CoordinatorName}
                    leftDefaultData={Strings.name}
                    // leftData={'lskdflskfjslkfjsldjflsdkfjsdlkfj'}
                  />
                )}
                {bookingDetails?.CoordinatorNo && (
                  <DetialRow
                    dataIcon={<Icon.PhoneIcon width={DP._16} height={DP._16} />}
                    rightData={bookingDetails.CoordinatorNo}
                    leftDefaultData={Strings.phoneNo}
                    // leftData={'lskdflskfjslkfjsldjflsdkfjsdlkfj'}
                    rightDataStyle={Styles.color_blue}
                    onClickRightData={onPhoneNumberClicked}
                    style={
                      bookingDetails.CoordinatorName && Styles.marginTop_12
                    }
                  />
                )}
              </View>
            </>
          )}
        </FTouchableOpacity>
        {!actionDisabled &&
          (rescheduleAction || cancelAction || viewRemarksAction) && (
            <ActionsInItinerary />
          )}
      </View>
    </View>
  );
};

export default BusDetailCard;
