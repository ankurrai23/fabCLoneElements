import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../../common/components/separator';
import TripStatus from '../../tripStatus';
// import {BusSubtripActions} from '../../../../utils/SubTripActions';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import ModificationAlertBox from '../../components/modificationAlertBox';
import {getStatusObject} from '../../../../utils/Utils';
import ActionsInItinerary from '../../../../common/components/ActionsInItinerary';
const DetailRow = ({
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
  greyedOut,
}) => {
  return (
    <View style={[Styles.flexDirectionRow, style]}>
      <FTouchableOpacity
        style={[Styles.flexRow, Styles.width_48]}
        onPress={onClickLeftData}>
        {dataIcon}
        <FText
          greyedOut={greyedOut}
          style={[Styles.detailLabelStyle, Styles.lineHeight_16, leftDataStyle]}
          numberOfLines={1}>
          {leftData ?? leftDefaultData}
        </FText>
      </FTouchableOpacity>
      <FTouchableOpacity onPress={onClickRightData} style={Styles.width_48}>
        <FText
          greyedOut={greyedOut}
          style={[
            Styles.fontSize_12,
            Styles.textAlign_right,
            Styles.lineHeight_16,
            rightDataStyle,
          ]}
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
  notificationText,
  reduceOpacity: isGreyedOut,
}) => {
  // const isActionEnabled = (type) => actions?.find((e) => e.type === type);
  // const rescheduleAction = isActionEnabled(BusSubtripActions.RESCHEDULE);
  // const cancelAction = isActionEnabled(BusSubtripActions.CANCEL);
  // const viewRemarksAction = isActionEnabled(BusSubtripActions.VIEW_REMARKS);
  const completePhoneNo = `${bookingDetails.countryCode} ${bookingDetails.coordinatorNo}`;
  // const ActionsInItinerary = () => (
  //   <>
  //     <Separator style={Styles.actionsSeparator} />
  //     <View style={Styles.actionContainer}>
  //       {
  //         <>
  //           {cancelAction && (
  //             <FTouchableOpacity
  //               onPress={() => onActionPress(cancelAction)}
  //               style={Styles.flexRowAndAlignCenter}>
  //               <Icon.Cross
  //                 width={DP._16}
  //                 height={DP._16}
  //                 stroke={Color.PASTEL_RED}
  //               />
  //               <FText style={Styles.cancel}>{cancelAction.name}</FText>
  //             </FTouchableOpacity>
  //           )}
  //           {rescheduleAction && (
  //             <FTouchableOpacity
  //               onPress={() => onActionPress(rescheduleAction)}
  //               style={Styles.primaryButtonStyle}>
  //               <Icon.Reschedule width={DP._16} height={DP._16} />
  //               <FText style={Styles.reschedule}>{rescheduleAction.name}</FText>
  //             </FTouchableOpacity>
  //           )}
  //         </>
  //       }
  //     </View>
  //   </>
  // );
  const renderDate = (departureDate, arrivalDate) => {
    const depArrDateSame = departureDate.date === arrivalDate.date;
    const depArrMonthSame = departureDate.month === arrivalDate.month;
    if (depArrMonthSame && depArrDateSame) {
      return (
        <>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
        </>
      );
    }
    if (depArrMonthSame && !depArrDateSame) {
      return (
        <>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText greyedOut={isGreyedOut} style={Styles.hyphen}>
            {' - '}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
        </>
      );
    }
    if (!depArrMonthSame) {
      return (
        <>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {departureDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${departureDate.month}'${departureDate.year}`}</FText>
          <FText greyedOut={isGreyedOut} style={Styles.hyphen}>
            {' - '}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={Styles.date}>
            {arrivalDate.date}
          </FText>
          <FText
            greyedOut={isGreyedOut}
            type={FONT_TYPE.MEDIUM}
            style={
              Styles.headerMonth
            }>{`${arrivalDate.month}'${arrivalDate.year}`}</FText>
        </>
      );
    }
  };
  return (
    <View style={style}>
      {!!notificationText && <ModificationAlertBox msg={notificationText} />}
      <View style={Styles.flexRow}>
        <View style={Styles.container}>
          <FTouchableOpacity style={Styles.card} onPress={onCardPress}>
            <View style={[Styles.flexDirectionRow, Styles.baseline]}>
              <View style={Styles.flexDirectionRow}>
                {renderDate(
                  bookingDetails.departureDate,
                  bookingDetails.arrivalDate,
                )}
              </View>
              {!!bookingDetails.busBookingStatus && (
                <TripStatus
                  statusObj={getStatusObject(bookingDetails.busBookingStatus)}
                />
              )}
            </View>

            <View style={[Styles.marginTop_12]}>
              <View style={[Styles.flexDirectionRow]}>
                <FText
                  greyedOut={isGreyedOut}
                  style={[
                    Styles.heading,
                    Styles.width_40,
                    Styles.textAlign_left,
                  ]}
                  numberOfLines={1}>
                  {bookingDetails.departureTime}
                </FText>
                <FText
                  greyedOut={isGreyedOut}
                  style={[
                    Styles.duration,
                    Styles.width_20,
                    Styles.textAlign_center,
                  ]}>
                  {bookingDetails.estimateDuration}
                </FText>
                <FText
                  greyedOut={isGreyedOut}
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
                      greyedOut={isGreyedOut}
                      style={[Styles.detail, Styles.textAlign_left]}
                      numberOfLines={1}>
                      {bookingDetails.sourceLocality}
                    </FText>
                  )}
                  {(bookingDetails?.source || bookingDetails?.destination) && (
                    <FText
                      greyedOut={isGreyedOut}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {bookingDetails.source}
                    </FText>
                  )}
                </View>
                <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                  {(bookingDetails?.destinationLocality ||
                    bookingDetails?.sourceLocality) && (
                    <FText
                      greyedOut={isGreyedOut}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {bookingDetails.destinationLocality}
                    </FText>
                  )}
                  {(bookingDetails?.source || bookingDetails?.destination) && (
                    <FText
                      greyedOut={isGreyedOut}
                      style={Styles.detail}
                      numberOfLines={1}>
                      {bookingDetails.destination}
                    </FText>
                  )}
                </View>
              </View>
            </View>

            <View style={Styles.marginTop_12}>
              <FText
                greyedOut={isGreyedOut}
                style={Styles.heading}
                numberOfLines={1}>
                {bookingDetails?.busName ?? Strings.busNa}
              </FText>
              {(bookingDetails.busNumber || bookingDetails.pnr) && (
                <View style={[Styles.flexDirectionRow]}>
                  <FText
                    greyedOut={isGreyedOut}
                    style={[
                      Styles.detail,
                      Styles.textAlign_left,
                      Styles.width_40,
                    ]}
                    numberOfLines={1}>
                    {bookingDetails.busNumber}
                  </FText>

                  <FText
                    greyedOut={isGreyedOut}
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
                <FText
                  greyedOut={isGreyedOut}
                  style={Styles.detail}
                  numberOfLines={1}>
                  {bookingDetails.busType}
                </FText>
              )}
            </View>
            {bookingDetails.travellerDetails &&
              bookingDetails.travellerDetails.length > 0 && (
                <>
                  <Separator style={Styles.separatorStyle} />

                  <FText
                    greyedOut={isGreyedOut}
                    numberOfLines={1}
                    style={[
                      Styles.marginTop_12,
                      Styles.fontSize_12,
                      Styles.color_grey,
                      Styles.lineHeight_16,
                    ]}>
                    {Strings.travelersDetails}
                  </FText>
                  {bookingDetails.travellerDetails.map((detail, index) => (
                    <DetailRow
                      dataIcon={
                        <Icon.Person
                          width={DP._16}
                          height={DP._16}
                          stroke={isGreyedOut ? Color.BLUEY_GREY : null}
                        />
                      }
                      rightData={detail.seatNo}
                      leftData={detail.travellerName}
                      style={
                        index === 0 ? Styles.marginTop_12 : Styles.marginTop_8
                      }
                      greyedOut={isGreyedOut}
                    />
                  ))}
                </>
              )}
            {!!(
              bookingDetails?.coordinatorNo || bookingDetails?.coordinatorName
            ) && (
              <>
                <Separator style={Styles.separatorStyle} />
                <View style={Styles.marginTop_12}>
                  <FText
                    greyedOut={isGreyedOut}
                    numberOfLines={1}
                    style={[
                      Styles.marginBottom_12,
                      Styles.fontSize_12,
                      Styles.color_grey,
                      Styles.lineHeight_16,
                    ]}>
                    {Strings.coordinatorDetails}
                  </FText>
                  {bookingDetails?.coordinatorName && (
                    <DetailRow
                      dataIcon={
                        <Icon.Person
                          width={DP._16}
                          height={DP._16}
                          stroke={isGreyedOut ? Color.BLUEY_GREY : null}
                        />
                      }
                      rightData={bookingDetails.coordinatorName}
                      leftDefaultData={Strings.name}
                      greyedOut={isGreyedOut}
                    />
                  )}
                  {completePhoneNo && (
                    <DetailRow
                      dataIcon={
                        <Icon.PhoneIcon
                          width={DP._16}
                          height={DP._16}
                          stroke={isGreyedOut ? Color.BLUEY_GREY : null}
                        />
                      }
                      greyedOut={isGreyedOut}
                      rightData={completePhoneNo}
                      leftDefaultData={Strings.phoneNo}
                      rightDataStyle={Styles.color_blue}
                      onClickRightData={() =>
                        onPhoneNumberClicked(completePhoneNo)
                      }
                      style={
                        bookingDetails.coordinatorName && Styles.marginTop_12
                      }
                    />
                  )}
                </View>
              </>
            )}
          </FTouchableOpacity>
          {/* {!actionDisabled &&
            (rescheduleAction || cancelAction || viewRemarksAction) && (
              <ActionsInItinerary />
            )} */}
          <ActionsInItinerary
            // hideSeperator={Boolean(showInfo)}
            actions={actions}
            actionDisabled={actionDisabled}
            onActionPress={onActionPress}
          />
        </View>
      </View>
    </View>
  );
};

export default BusDetailCard;
