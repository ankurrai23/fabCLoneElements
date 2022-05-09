import {View, ScrollView, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import FText from '../../../common/rn/FText';
import FImage from '../../../common/rn/FImage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Separator from '../../../common/components/separator';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import DialogBox from '../../../common/components/dialogBox';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../../../common/components/button';
import {HotelSubTripActions} from '../../../utils/SubTripActions';
import ModificationAlertBox from '../components/modificationAlertBox';
import TripStatus from '../tripStatus';
import {ImageConst} from '../../../utils/imageConst';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const getStatusObject = (status) => {
  const capitalize = () => {
    return `${status[0]}${status.slice(1).toLowerCase()}`;
  };
  switch (status) {
    case 'CANCELLED':
      return {
        key: status,
        value: capitalize(),
        bgColor: Color.PASTEL_RED + '1a',
        textColor: Color.PASTEL_RED,
      };
    case 'NO_SHOW':
      return {
        key: status,
        value: 'No show',
        bgColor: Color.PASTEL_RED + '1a',
        textColor: Color.PASTEL_RED,
      };
    case 'TENTATIVE':
      return {
        key: status,
        value: capitalize(),
        bgColor: Color.MANGO + '1a',
        textColor: Color.MANGO,
      };
    default:
      return {
        key: status,
        value: capitalize(),
        bgColor: Color.DARK_SEA_FOAM + '1a',
        textColor: Color.DARK_SEA_FOAM,
      };
  }
};

export default function HotelDetailCard({
  item,
  onActionPress,
  onMainImagePress,
  style,
  footerComponent,
  onRefresh,
}) {
  const [sheetVisible, setSheetVisible] = useState(false);
  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const modifyAction = isActionEnabled(HotelSubTripActions.MODIFY);
  const cancelAction = isActionEnabled(HotelSubTripActions.CANCEL);
  const payNowAction = isActionEnabled(HotelSubTripActions.PAY_NOW);
  const directionAction = isActionEnabled(HotelSubTripActions.DIRECTION);
  const posAction = isActionEnabled(HotelSubTripActions.SUBMIT_POS);
  const reviewAction = isActionEnabled(HotelSubTripActions.SUBMIT_REVIEW);
  const invoiceAction = isActionEnabled(HotelSubTripActions.VIEW_INVOICE);

  const CheckInInfo = ({title, date, time}) => (
    <View>
      <FText style={Styles.sectionTitle}>{title}</FText>
      <FText type="medium">{date}</FText>
      {time && <FText style={Styles.checkInTIme}>{time}</FText>}
    </View>
  );

  const CoTraveller = ({name}) => (
    <View style={Styles.coTravellerContainer}>
      <Feather name="user" size={DP._14} color={Color.GREY_PURPLE} />
      <FText style={{marginLeft: DP._8}}>{name}</FText>
    </View>
  );

  const Inclusions = ({image, text}) => (
    <View style={Styles.inclusionContainer}>
      <FImage
        source={{uri: image}}
        style={{
          height: DP._16,
          width: DP._16,
          marginRight: DP._8,
        }}
      />
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
                  <Feather name="chevron-right" size={DP._14} />
                </View>
                {item.type === 'SUBMIT_REVIEW' && (
                  <FText
                    style={{
                      fontSize: DP._11,
                      color: Color.GREY_PURPLE,
                    }}>
                    Help your colleague decide the next time
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
    <ScrollView
      contentContainerStyle={{padding: DP._16}}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      {(posAction || invoiceAction || reviewAction) && <PostTripHotelActions />}
      {item.modificationRequested && (
        <ModificationAlertBox
          msg={'Your have sent a modification request for this booking.'}
        />
      )}
      <View style={[Styles.container, style]}>
        <View
          style={Styles.subContainer(
            item.modificationRequested || item.cancelled,
          )}>
          <View style={Styles.hotelNameAndImageContainer}>
            {item.mainImage && (
              <FTouchableOpacity
                style={{marginRight: DP._8}}
                onPress={onMainImagePress}>
                <FImage
                  style={Styles.hotelImage}
                  source={{uri: item.mainImage}}
                />
                <FontAwesome5
                  name="search-plus"
                  style={Styles.searchIcon}
                  size={DP._18}
                  color={Color.WHITE}
                />
              </FTouchableOpacity>
            )}
            <View style={Styles.bookingDetailsContainer}>
              {!!item.bookingStatus && (
                <TripStatus statusObj={getStatusObject(item.bookingStatus)} />
              )}
              <FText style={{marginTop: DP._12}}>{item.hotelName}</FText>
            </View>
          </View>
          <FText style={Styles.addressText}>{item.address}</FText>
          <Separator style={Styles.separator} />
          <View style={Styles.flexRowWithSpaceBetween}>
            <View style={Styles.flexRow}>
              <FText>Booking ID</FText>
              <FText type="bold" style={{paddingLeft: DP._8}}>
                {item.bookingId}
              </FText>
            </View>
            {directionAction && (
              <FTouchableOpacity
                style={[Styles.flexRowWithAlignCenter]}
                onPress={() => onActionPress?.(directionAction)}>
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
            )}
          </View>
          <Separator style={Styles.separator} />
          <View style={Styles.flexRowWithSpaceBetween}>
            <CheckInInfo
              title={'Check-in date'}
              date={item.checkIn.date}
              time={item.checkIn.time ? `Check-in: ${item.checkIn.time}` : null}
            />
            <CheckInInfo
              title={'Check-out date'}
              date={item.checkOut.date}
              time={
                item.checkOut.time ? `Check-out: ${item.checkOut.time}` : null
              }
            />
            <View>
              <FText
                style={{
                  fontSize: DP._12,
                  color: Color.GREY_PURPLE,
                  marginBottom: DP._8,
                }}>
                Rooms
              </FText>
              <FText type="medium">{item.noOfRooms || '-'}</FText>
            </View>
          </View>
          <Separator style={Styles.separator} />
          {item.inclusions && (
            <>
              <FText style={Styles.sectionTitle}>Inclusions</FText>
              {item.inclusions.map((item, index) => {
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
                <FTouchableOpacity onPress={() => setSheetVisible(true)}>
                  <FText style={Styles.moreInclustion}>
                    +{item.inclusions.length - 3} more
                  </FText>
                </FTouchableOpacity>
              )}
              <Separator style={Styles.separator} />
            </>
          )}
          {item?.coTravellers?.length > 0 && (
            <>
              <FText style={Styles.sectionTitle}>Co-travelers</FText>
              {item.coTravellers.map((item, index) => (
                <CoTraveller name={item} key={`abc${index}def`} />
              ))}
              <Separator style={Styles.separator} />
            </>
          )}
          <FText style={[Styles.sectionTitle, {marginTop: DP._8}]}>
            Payment mode
          </FText>
          <View style={Styles.paymentModeContainer}>
            <View style={[Styles.flexRow, Styles.halfFlex]}>
              <Feather
                name="credit-card"
                size={DP._15}
                color={Color.GREY_PURPLE}
              />
              <FText style={{marginLeft: DP._8, fontSize: DP._12}}>
                Bill to company
              </FText>
            </View>
            {item.paymentStatus && (
              <View style={[Styles.paymentStatusContainer, Styles.halfFlex]}>
                <Feather
                  name={item.paymentStatus.icon}
                  style={{marginRight: DP._4}}
                  color={item.paymentStatus.color}
                />
                <FText
                  style={{fontSize: DP._10, color: item.paymentStatus.color}}>
                  {item.paymentStatus.statusText}
                </FText>
              </View>
            )}
          </View>
          {payNowAction && (
            <Button
              onPress={() => onActionPress?.(payNowAction)}
              style={{borderRadius: DP._4, marginTop: DP._4}}
              textFont="medium">
              {payNowAction.name}
            </Button>
          )}
        </View>
        {!item.actionsDisabled && (
          <>
            <Separator style={{backgroundColor: Color.VERY_LIGHT_BLUE}} />
            <View style={Styles.buttonContainer}>
              {cancelAction && (
                <FTouchableOpacity
                  onPress={() => onActionPress?.(cancelAction)}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  onPress={() => onActionPress?.(modifyAction)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: DP._26,
                  }}>
                  <FImage
                    style={Styles.rescheduleIcon}
                    source={ImageConst.rescheduleIcon}
                  />
                  <FText style={Styles.modify}>{modifyAction.name}</FText>
                </FTouchableOpacity>
              )}
            </View>
          </>
        )}
      </View>
      {footerComponent}
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._30, paddingHorizontal: DP._24}}>
            <FText style={Styles.modalHeading}>Inclusions</FText>
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
    </ScrollView>
  );
}
