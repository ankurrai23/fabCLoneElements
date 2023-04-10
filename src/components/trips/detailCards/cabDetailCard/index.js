import React from 'react';
import {View} from 'react-native';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color/index.travelPlus';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Styles from './Styles';
import Separator from '../../../../common/components/separator';
import TripStatus from '../../tripStatus';
// import {CabSubtripActions} from '../../../../utils/SubTripActions';
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
          style={[Styles.detailLableStyle, Styles.lineHeight_16, leftDataStyle]}
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

const CabDetailCard = ({
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
  return (
    <View style={style}>
      {!!notificationText && <ModificationAlertBox msg={notificationText} />}
      <View style={Styles.flexRow}>
        <View style={Styles.container}>
          <FTouchableOpacity
            style={Styles.marginBottom_12}
            onPress={onCardPress}>
            <View style={{paddingHorizontal: DP._16, paddingTop: DP._12}}>
              <View style={[Styles.flexDirectionRow, Styles.baseline]}>
                <View style={Styles.flexDirectionRow}>
                  <FText
                    greyedOut={isGreyedOut}
                    type={FONT_TYPE.MEDIUM}
                    style={Styles.date}>
                    {bookingDetails.date}
                  </FText>
                  <FText
                    greyedOut={isGreyedOut}
                    type={FONT_TYPE.MEDIUM}
                    style={
                      Styles.headerMonth
                    }>{`${bookingDetails.month}'${bookingDetails.year}`}</FText>
                </View>
                {!!bookingDetails.cabBookingStatus && (
                  <TripStatus
                    statusObj={getStatusObject(bookingDetails.cabBookingStatus)}
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
                        style={Styles.detail}
                        numberOfLines={1}>
                        {bookingDetails.sourceLocality}
                      </FText>
                    )}
                    {(bookingDetails?.source ||
                      bookingDetails?.destination) && (
                      <FText
                        greyedOut={isGreyedOut}
                        style={[Styles.detail, Styles.textAlign_left]}
                        numberOfLines={1}>
                        {bookingDetails.source}
                      </FText>
                    )}
                  </View>
                  <View style={[Styles.alignItem_flexEnd, Styles.width_40]}>
                    {(bookingDetails?.sourceLocality ||
                      bookingDetails?.destinationLocality) && (
                      <FText
                        greyedOut={isGreyedOut}
                        style={Styles.detail}
                        numberOfLines={1}>
                        {bookingDetails.destinationLocality}
                      </FText>
                    )}
                    {(bookingDetails?.destination ||
                      bookingDetails?.source) && (
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
            </View>
            {bookingDetails.vehicleDetails &&
              bookingDetails.vehicleDetails.length > 0 &&
              bookingDetails.vehicleDetails.map((cabDetails, index) => {
                const completeDriverPhone = `${cabDetails?.countryCode} ${cabDetails?.driverPhone}`;
                return (
                  <>
                    <View style={{paddingHorizontal: DP._16}}>
                      <Separator style={Styles.sepratorStyle} />
                    </View>
                    <View style={[Styles.marginTop_16]}>
                      <View style={Styles.marginBottom_16}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: DP._12,
                          }}>
                          <View style={Styles.headingNotch} />
                          <FText
                            greyedOut={isGreyedOut}
                            numberOfLines={1}
                            weight={500}
                            style={[Styles.fontSize_12, Styles.lineHeight_16]}>
                            {Strings.vehicle}{' '}
                            {bookingDetails.vehicleDetails.length > 1 &&
                              index + 1}{' '}
                            {Strings.details}
                          </FText>
                        </View>
                        <View style={Styles.paddingHorizontal_16}>
                          <FText
                            greyedOut={isGreyedOut}
                            style={Styles.heading}
                            numberOfLines={1}>
                            {cabDetails?.vehicleName ?? Strings.carNa}
                          </FText>
                          {cabDetails?.vehicleNumber && (
                            <FText
                              greyedOut={isGreyedOut}
                              style={Styles.detail}
                              numberOfLines={1}>
                              {cabDetails.vehicleNumber}
                            </FText>
                          )}
                          {cabDetails?.bookingId && (
                            <FText
                              greyedOut={isGreyedOut}
                              style={Styles.detail}
                              numberOfLines={1}>
                              {Strings.bookingId}: {cabDetails.bookingId}
                            </FText>
                          )}
                        </View>
                      </View>
                      <View style={Styles.paddingHorizontal_16}>
                        <FText
                          greyedOut={isGreyedOut}
                          numberOfLines={1}
                          style={[
                            Styles.marginBottom_12,
                            Styles.fontSize_12,
                            Styles.color_grey,
                            Styles.lineHeight_16,
                          ]}>
                          {Strings.driverDetails}
                        </FText>
                        {cabDetails?.driverName && (
                          <DetailRow
                            dataIcon={
                              <Icon.Person
                                width={DP._16}
                                height={DP._16}
                                stroke={isGreyedOut ? Color.BLUEY_GREY : null}
                              />
                            }
                            greyedOut={isGreyedOut}
                            rightData={cabDetails.driverName}
                            leftDefaultData={Strings.name}
                          />
                        )}
                        {completeDriverPhone && (
                          <DetailRow
                            dataIcon={
                              <Icon.PhoneIcon
                                width={DP._16}
                                height={DP._16}
                                stroke={isGreyedOut ? Color.BLUEY_GREY : null}
                              />
                            }
                            greyedOut={isGreyedOut}
                            rightData={completeDriverPhone}
                            leftDefaultData={Strings.phoneNo}
                            rightDataStyle={Styles.color_blue}
                            onClickRightData={() =>
                              onPhoneNumberClicked(completeDriverPhone)
                            }
                            style={cabDetails.driverName && Styles.marginTop_12}
                          />
                        )}
                      </View>
                    </View>
                  </>
                );
              })}
          </FTouchableOpacity>
          <ActionsInItinerary
            actions={actions}
            actionDisabled={actionDisabled}
            onActionPress={onActionPress}
          />
        </View>
      </View>
    </View>
  );
};

export default CabDetailCard;
