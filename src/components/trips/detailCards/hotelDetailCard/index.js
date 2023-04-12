import {View, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FImage from '../../../../common/rn/FImage';
import Styles from './Styles';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';
import Separator from '../../../../common/components/separator';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../../../../common/components/button';
import {HotelSubTripActions} from '../../../../utils/SubTripActions';
import ModificationAlertBox from '../../components/modificationAlertBox';
import TripStatus from '../../tripStatus';
import ContactSupport from '../../../../common/components/contactSupport';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';
import ActionsInItinerary from '../../../../common/components/ActionsInItinerary';
import {ColorMatrix} from 'react-native-color-matrix-image-filters';
import {grayImageMatrix} from '../../../../utils/color/ColorMatrix';

const Inclusions = ({image, text, lastItem, isGreyedOut}) => (
  <View style={Styles.inclusionContainer(lastItem)}>
    <FImage source={{uri: image}} style={Styles.inclusionIcon} />
    <FText greyedOut={isGreyedOut}>{text}</FText>
  </View>
);
export const InclusionSheet = ({data, isGreyedOut}) => {
  const renderItem = ({item: inclusion}) => {
    return (
      <Inclusions
        text={inclusion.text}
        image={inclusion.icon}
        isGreyedOut={isGreyedOut}
      />
    );
  };

  return (
    <View style={{paddingBottom: DP._30, paddingHorizontal: DP._24}}>
      <FText style={Styles.modalHeading}>{Strings.inclusions}</FText>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <Separator
            style={{
              marginVertical: DP._16,
              backgroundColor: Color.SILVER,
            }}
          />
        )}
        keyExtractor={(_, index) => `${index}`}
      />
    </View>
  );
};

export default function HotelDetailCard({
  item,
  onActionPress,
  onMainImagePress,
  style,
  onContactSupportPress,
  onViewMorePress,
  onShowInclusionPress,
}) {
  const [expanded, setExpanded] = useState(!item.enableViewMoreButton);
  const isGreyedOut = item.reduceOpacity;
  const [fadeIn] = useState(
    new Animated.Value(item.enableViewMoreButton ? 0 : 1),
  );
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const payNowAction = isActionEnabled(HotelSubTripActions.PAY_NOW);
  const directionAction = isActionEnabled(HotelSubTripActions.DIRECTION);
  const posAction = isActionEnabled(HotelSubTripActions.SUBMIT_POS);
  const reviewAction = isActionEnabled(HotelSubTripActions.SUBMIT_REVIEW);
  const invoiceAction = isActionEnabled(HotelSubTripActions.VIEW_INVOICE);
  const supportAction = isActionEnabled(HotelSubTripActions.SUPPORT);

  const spin = fadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const onItemPress = () => {
    if (!expanded) {
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeIn, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setExpanded(!expanded);
    onViewMorePress();
  };

  const CheckInInfo = ({title, date, time}) => (
    <View>
      <FText greyedOut={isGreyedOut} style={Styles.sectionTitle}>{title}</FText>
      <FText greyedOut={isGreyedOut} type={FONT_TYPE.MEDIUM}>
        {date}
      </FText>
      {time && (
        <FText greyedOut={isGreyedOut} style={Styles.checkInTIme}>
          {time}
        </FText>
      )}
    </View>
  );

  const CoTraveller = ({name, lastItem}) => (
    <View style={Styles.coTravellerContainer(lastItem)}>
      <Icon.User width={DP._14} height={DP._14} stroke={Color.GREY_PURPLE} />
      <FText greyedOut={isGreyedOut} style={{marginLeft: DP._8}}>
        {name}
      </FText>
    </View>
  );

  const PostTripHotelActions = () => (
    <View style={Styles.postTripActionContainer}>
      {[posAction, invoiceAction, reviewAction].map((item, index) => (
        <>
          {item && (
            <>
              <FTouchableOpacity
                style={{paddingVertical: DP._16}}
                onPress={() => onActionPress(item)}>
                <View style={Styles.postTripButtonContainer}>
                  <FText
                    greyedOut={isGreyedOut}
                    style={{color: Color.DODGER_BLUE}}>
                    {item.name}
                  </FText>
                  <Icon.ChevronRight width={DP._14} height={DP._14} />
                </View>
                {item.type === HotelSubTripActions.SUBMIT_REVIEW && (
                  <FText
                    greyedOut={isGreyedOut}
                    c
                    style={{
                      fontSize: DP._11,
                      color: Color.GREY_PURPLE,
                    }}>
                    {Strings.helpColleagueDecideNextTime}
                  </FText>
                )}
              </FTouchableOpacity>
              <Separator />
            </>
          )}
        </>
      ))}
    </View>
  );

  return (
    <>
      {(posAction || invoiceAction || reviewAction) && <PostTripHotelActions />}
      {!!item.notificationText && (
        <ModificationAlertBox msg={item.notificationText} />
      )}
      <View style={[Styles.container, style]}>
        <View style={[Styles.paddingHorizontal_16, Styles.paddingTop_16]}>
          <View style={Styles.hotelNameAndImageContainer}>
            {item.mainImage && (
              <FTouchableOpacity
                style={{marginRight: DP._8}}
                disabled={item.reduceOpacity}
                onPress={onMainImagePress}>
                <ColorMatrix matrix={grayImageMatrix(isGreyedOut)}>
                  <FImage
                    style={Styles.hotelImage}
                    source={{uri: item.imageBaseUrl + item.mainImage}}
                  />
                </ColorMatrix>

                <Icon.ZooomIn
                  width={DP._18}
                  height={DP._18}
                  style={Styles.searchIcon}
                />
              </FTouchableOpacity>
            )}
            <View style={Styles.bookingDetailsContainer}>
              {!!item.bookingStatus && (
                <TripStatus statusObj={item.bookingStatus} />
              )}
              <FText greyedOut={isGreyedOut} style={{marginTop: DP._12}}>
                {item.hotelName}
              </FText>
            </View>
          </View>
          <FText style={Styles.addressText}>{item.address}</FText>
          <Separator style={Styles.separator} />
          <View
            style={[Styles.flexRowWithSpaceBetween, {marginVertical: DP._8}]}>
            <FText
              greyedOut={isGreyedOut}
              style={{
                fontSize: DP._12,
                lineHeight: DP._14,
                color: Color.BLUEY_GREY,
              }}>
              {Strings.bookingId2}
              <FText
                greyedOut={isGreyedOut}
                type={FONT_TYPE.MEDIUM}
                style={{paddingLeft: DP._8}}>
                {item.bookingId}
              </FText>
            </FText>
            {directionAction && (
              <FTouchableOpacity
                style={[Styles.flexRowWithAlignCenter]}
                onPress={() => onActionPress?.(directionAction)}
                disabled={item.reduceOpacity}>
                <Icon.Navigation
                  width={DP._16}
                  height={DP._16}
                  fill={isGreyedOut ? Color.BLUEY_GREY : Color.DODGER_BLUE}
                  style={Styles.directionIcon}
                />
                <FText
                  greyedOut={isGreyedOut}
                  style={{
                    fontSize: DP._12,
                    color: Color.DODGER_BLUE,
                    marginLeft: DP._8,
                  }}>
                  {Strings.directions}
                </FText>
              </FTouchableOpacity>
            )}
          </View>

          <Separator style={Styles.separator} />
        </View>
        {expanded && (
          <Animated.View style={{opacity: fadeIn}}>
            <View style={Styles.paddingHorizontal_16}>
              <View
                style={[
                  Styles.flexRowWithSpaceBetween,
                  {marginVertical: DP._16},
                ]}>
                <CheckInInfo
                  title={Strings.checkInDate}
                  date={item.checkIn.date}
                  time={
                    item.checkIn.time
                      ? Strings.checkIn(item.checkIn.time)
                      : null
                  }
                />
                <CheckInInfo
                  title={Strings.checkOutDate}
                  date={item.checkOut.date}
                  time={
                    item.checkOut.time
                      ? Strings.checkOut(item.checkOut.time)
                      : null
                  }
                />
                <View>
                  <FText
                    greyedOut={isGreyedOut}
                    style={{
                      fontSize: DP._12,
                      color: Color.GREY_PURPLE,
                      marginBottom: DP._8,
                    }}>
                    {Strings.rooms}
                  </FText>
                  <FText greyedOut={isGreyedOut} type={FONT_TYPE.MEDIUM}>
                    {item.noOfRooms || '-'}
                  </FText>
                </View>
              </View>
              <Separator style={Styles.separator} />
            </View>
            {!item.inclusions?.length ? null : (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: DP._16,
                    marginBottom: DP._4,
                  }}>
                  <View style={Styles.headingNotch} />
                  <FText
                    greyedOut={isGreyedOut}
                    style={Styles.sectionTitle}
                    weight={500}>
                    {Strings.inclusions}
                  </FText>
                </View>
                <View style={Styles.paddingHorizontal_16}>
                  {item.inclusions?.map((entity, index) => {
                    if (index < 3)
                      return (
                        <Inclusions
                          key={`ab${index}cd`}
                          text={entity.text}
                          image={entity.icon}
                          lastItem={item.inclusions.length - 1 === index}
                          isGreyedOut={isGreyedOut}
                        />
                      );
                  })}
                  {item.inclusions.length > 3 && (
                    <FTouchableOpacity
                      onPress={onShowInclusionPress}
                      style={{marginBottom: DP._16}}
                      disabled={item.reduceOpacity}>
                      <FText
                        greyedOut={isGreyedOut}
                        style={Styles.moreInclustion}>
                        {Strings.moreInclusions(item.inclusions.length - 3)}
                      </FText>
                    </FTouchableOpacity>
                  )}
                  <Separator style={Styles.separator} />
                </View>
              </>
            )}
            {item?.coTravellers?.length > 0 && (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: DP._16,
                    marginBottom: DP._4,
                  }}>
                  <View style={Styles.headingNotch} />
                  <FText
                    greyedOut={isGreyedOut}
                    style={Styles.sectionTitle}
                    weight={500}>
                    {Strings.travelerDetails}
                  </FText>
                </View>

                <View style={Styles.paddingHorizontal_16}>
                  {item.coTravellers.map((names, index) => (
                    <CoTraveller
                      name={names}
                      key={`abc${index}def`}
                      lastItem={index === item.coTravellers.length - 1}
                    />
                  ))}
                  <Separator style={Styles.separator} />
                </View>
              </>
            )}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: DP._16,
                marginBottom: DP._4,
              }}>
              <View style={Styles.headingNotch} />
              <FText
                greyedOut={isGreyedOut}
                style={Styles.sectionTitle}
                weight={500}>
                {Strings.paymentMode}
              </FText>
            </View>
            <View style={Styles.paddingHorizontal_16}>
              <View style={Styles.paymentModeContainer}>
                <View
                  style={[
                    Styles.flexRow,
                    Styles.halfFlex,
                    {alignItems: 'center'},
                  ]}>
                  <Icon.CreditCard width={DP._16} height={DP._16} />
                  <FText
                    greyedOut={isGreyedOut}
                    style={{marginLeft: DP._8, fontSize: DP._12}}>
                    {item?.paymentMode ? item.paymentMode : Strings.NA}
                  </FText>
                </View>
                {item.paymentStatus && (
                  <View
                    style={[Styles.paymentStatusContainer, Styles.halfFlex]}>
                    {/* TODO: Need to discuss*/}
                    {/* <Feather
                      name={item.paymentStatus.icon}
                      style={{marginRight: DP._4}}
                      color={item.paymentStatus.color}
                    /> */}
                    <FText
                      greyedOut={isGreyedOut}
                      style={{
                        fontSize: DP._10,
                        color: item.paymentStatus.color,
                      }}>
                      {item.paymentStatus.statusText}
                    </FText>
                  </View>
                )}
              </View>
              {payNowAction && (
                <Button
                  onPress={() => onActionPress?.(payNowAction)}
                  style={Styles.payNowButtonStyle}
                  disabled={item.reduceOpacity}
                  textFont={FONT_TYPE.MEDIUM}>
                  {payNowAction.name}
                </Button>
              )}
            </View>
            {supportAction && (
              <>
                <View style={Styles.paddingHorizontal_16}>
                  <Separator style={Styles.separator} />
                </View>
                <ContactSupport
                  onContactSupportPress={onContactSupportPress}
                  isGreyedOut={isGreyedOut}
                  style={{marginVertical: DP._8, paddingRight: DP._16}}
                />
              </>
            )}
            {item.enableViewMoreButton && (
              <View style={Styles.paddingHorizontal_16}>
                <Separator style={Styles.separator} />
              </View>
            )}
          </Animated.View>
        )}
        {item.enableViewMoreButton && (
          <FTouchableOpacity
            hitSlop={Styles.viewDetailHitSlop}
            onPress={onItemPress}
            style={Styles.viewDetailView}>
            <FText greyedOut={isGreyedOut} style={Styles.showMoreTxt}>
              {Strings.viewDetails(expanded)}
            </FText>
            <Animated.View style={{transform: [{rotate: spin}]}}>
              <Icon.ChevronDown
                width={DP._14}
                height={DP._14}
                stroke={Color.DODGER_BLUE}
              />
            </Animated.View>
          </FTouchableOpacity>
        )}
        <ActionsInItinerary
          // hideSeperator={Boolean(showInfo)}
          actions={item.actions}
          // actionDisabled={actionDisabled}
          onActionPress={onActionPress}
        />
      </View>
    </>
  );
}
