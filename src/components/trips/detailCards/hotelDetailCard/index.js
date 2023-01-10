import {View, Animated} from 'react-native';
import React, {useState} from 'react';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import FImage from '../../../../common/rn/FImage';
import Styles from './Styles';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';
import Separator from '../../../../common/components/separator';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import DialogBox from '../../../../common/components/dialogBox';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../../../../common/components/button';
import {HotelSubTripActions} from '../../../../utils/SubTripActions';
import ModificationAlertBox from '../../components/modificationAlertBox';
import TripStatus from '../../tripStatus';
import ContactSupport from '../../../../common/components/contactSupport';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';

export default function HotelDetailCard({
  item,
  onActionPress,
  onMainImagePress,
  style,
  supportDetails,
  onClose,
  onContactSupportPress,
  onViewMorePress,
}) {
  const [expanded, setExpanded] = useState(!item.enableViewMoreButton);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [fadeIn] = useState(
    new Animated.Value(item.enableViewMoreButton ? 0 : 1),
  );
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const modifyAction = isActionEnabled(HotelSubTripActions.MODIFY);
  const cancelAction = isActionEnabled(HotelSubTripActions.CANCEL);
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
      <FText style={Styles.sectionTitle}>{title}</FText>
      <FText type={FONT_TYPE.MEDIUM}>{date}</FText>
      {time && <FText style={Styles.checkInTIme}>{time}</FText>}
    </View>
  );

  const CoTraveller = ({name}) => (
    <View style={Styles.coTravellerContainer}>
      <Icon.User width={DP._14} height={DP._14} stroke={Color.GREY_PURPLE} />
      <FText style={{marginLeft: DP._8}}>{name}</FText>
    </View>
  );

  const Inclusions = ({image, text}) => (
    <View style={Styles.inclusionContainer}>
      <FImage source={{uri: image}} style={Styles.inclusionIcon} />
      <FText>{text}</FText>
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
                  <FText style={{color: Color.DODGER_BLUE}}>{item.name}</FText>
                  <Icon.ChevronRight width={DP._14} height={DP._14} />
                </View>
                {item.type === HotelSubTripActions.SUBMIT_REVIEW && (
                  <FText
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

  const renderItem = ({item: inclusion}) => {
    return <Inclusions text={inclusion.text} image={inclusion.icon} />;
  };
  return (
    <>
      {(posAction || invoiceAction || reviewAction) && <PostTripHotelActions />}
      {!!item.notificationText && (
        <ModificationAlertBox msg={item.notificationText} />
      )}
      <View style={[Styles.container, style]}>
        <View style={Styles.subContainer(item.reduceOpacity)}>
          <View style={Styles.hotelNameAndImageContainer}>
            {item.mainImage && (
              <FTouchableOpacity
                style={{marginRight: DP._8}}
                disabled={item.reduceOpacity}
                onPress={onMainImagePress}>
                <FImage
                  style={Styles.hotelImage}
                  source={{uri: item.imageBaseUrl + item.mainImage}}
                />
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
              <FText style={{marginTop: DP._12}}>{item.hotelName}</FText>
            </View>
          </View>
          <FText style={Styles.addressText}>{item.address}</FText>
          <Separator style={Styles.separator} />
          <View style={Styles.flexRowWithSpaceBetween}>
            <View style={Styles.flexRow}>
              <FText>{Strings.bookingId}</FText>
              <FText type={FONT_TYPE.BOLD} style={{paddingLeft: DP._8}}>
                {item.bookingId}
              </FText>
            </View>
            {directionAction && (
              <FTouchableOpacity
                style={[Styles.flexRowWithAlignCenter]}
                onPress={() => onActionPress?.(directionAction)}
                disabled={item.reduceOpacity}>
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
                  {Strings.directions}
                </FText>
              </FTouchableOpacity>
            )}
          </View>
          <Separator style={Styles.separator} />
          {expanded && (
            <Animated.View style={{opacity: fadeIn}}>
              <View style={Styles.flexRowWithSpaceBetween}>
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
                    style={{
                      fontSize: DP._12,
                      color: Color.GREY_PURPLE,
                      marginBottom: DP._8,
                    }}>
                    {Strings.rooms}
                  </FText>
                  <FText type={FONT_TYPE.MEDIUM}>{item.noOfRooms || '-'}</FText>
                </View>
              </View>
              <Separator style={Styles.separator} />
              {!item.inclusions?.length ? null : (
                <>
                  <FText style={Styles.sectionTitle}>
                    {Strings.inclusions}
                  </FText>
                  {item.inclusions?.map((item, index) => {
                    if (index < 3)
                      return (
                        <Inclusions
                          key={`ab${index}cd`}
                          text={item.text}
                          image={item.icon}
                        />
                      );
                  })}
                  {item.inclusions.length > 3 && (
                    <FTouchableOpacity
                      onPress={() => setSheetVisible(true)}
                      disabled={item.reduceOpacity}>
                      <FText style={Styles.moreInclustion}>
                        {Strings.moreInclusions(item.inclusions.length - 3)}
                      </FText>
                    </FTouchableOpacity>
                  )}
                  <Separator style={Styles.separator} />
                </>
              )}
              {item?.coTravellers?.length > 0 && (
                <>
                  <FText style={Styles.sectionTitle}>
                    {Strings.coTravelers}
                  </FText>
                  {item.coTravellers.map((item, index) => (
                    <CoTraveller name={item} key={`abc${index}def`} />
                  ))}
                  <Separator style={Styles.separator} />
                </>
              )}
              <FText style={[Styles.sectionTitle, {marginTop: DP._8}]}>
                {Strings.paymentMode}
              </FText>
              <View style={Styles.paymentModeContainer}>
                <View
                  style={[
                    Styles.flexRow,
                    Styles.halfFlex,
                    {alignItems: 'center'},
                  ]}>
                  <Icon.CreditCard width={DP._16} height={DP._16} />
                  <FText style={{marginLeft: DP._8, fontSize: DP._12}}>
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
                  style={{borderRadius: DP._4, marginTop: DP._4}}
                  disabled={item.reduceOpacity}
                  textFont={FONT_TYPE.MEDIUM}>
                  {payNowAction.name}
                </Button>
              )}
              {supportAction && (
                <>
                  <Separator style={Styles.separator} />
                  <ContactSupport
                    supportDetails={supportDetails}
                    onContactSupportPress={onContactSupportPress}
                    onClose={onClose}
                  />
                </>
              )}
              {item.enableViewMoreButton && (
                <Separator style={Styles.separator} />
              )}
            </Animated.View>
          )}
          {item.enableViewMoreButton && (
            <FTouchableOpacity
              hitSlop={Styles.viewDetailHitSlop}
              onPress={onItemPress}
              style={Styles.viewDetailView}>
              <FText style={Styles.showMoreTxt}>
                {Strings.viewDetails(expanded)}
              </FText>
              <Animated.View style={{transform: [{rotate: spin}]}}>
                <Icon.ChevronDown
                  width={DP._12}
                  height={DP._12}
                  stroke={Color.DODGER_BLUE}
                />
              </Animated.View>
            </FTouchableOpacity>
          )}
        </View>
        {(cancelAction || modifyAction) && (
          <>
            <Separator style={{backgroundColor: Color.PALE_GREY_THREE}} />
            <View style={Styles.buttonContainer}>
              {cancelAction && (
                <FTouchableOpacity
                  onPress={() => onActionPress?.(cancelAction)}
                  style={Styles.cancelButtonStyle}>
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
                  onPress={() => onActionPress?.(modifyAction)}
                  style={Styles.modifyButtonStyle}>
                  <Icon.Reschedule width={DP._16} height={DP._16} />
                  <FText style={Styles.modify}>{modifyAction.name}</FText>
                </FTouchableOpacity>
              )}
            </View>
          </>
        )}
      </View>
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._30, paddingHorizontal: DP._24}}>
            <FText style={Styles.modalHeading}>{Strings.inclusions}</FText>
            <FlatList
              data={item.inclusions}
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
        }
      />
    </>
  );
}
