import {View} from 'react-native';
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
export default function HotelDetailCard({
  item,
  onActionPress,
  onMainImagePress,
  style,
}) {
  const [sheetVisible, setSheetVisible] = useState(false);

  const isActionEnabled = (type) => item?.actions?.find((e) => e.type === type);

  const modifyAction = isActionEnabled(HotelSubTripActions.MODIFY);
  const cancelAction = isActionEnabled(HotelSubTripActions.CANCEL);
  const payNowAction = isActionEnabled(HotelSubTripActions.PAY_NOW);
  const directionAction = isActionEnabled(HotelSubTripActions.DIRECTION);

  const CheckInInfo = ({title, date, time}) => (
    <View>
      <FText style={Styles.sectionTitle}>{title}</FText>
      <FText type="medium">{date}</FText>
      <FText style={Styles.checkInTIme}>{time}</FText>
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

  const renderItem = ({item: inclusion}) => {
    return <Inclusions text={inclusion.detail} image={inclusion.icon} />;
  };

  return (
    <>
      <View style={[Styles.container, style]}>
        <View style={Styles.subContainer(item.modified)}>
          <View style={Styles.hotelNameAndImageContainer}>
            <FTouchableOpacity onPress={onMainImagePress}>
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
            <View style={Styles.bookingDetailsContainer}>
              <FText>
                Booking ID{' '}
                <FText type="bold" style={{paddingLeft: DP._8}}>
                  {item.bookingId}
                </FText>
              </FText>
              <FText style={{marginTop: DP._12}}>{item.hotelName}</FText>
            </View>
          </View>
          <FText style={Styles.addressText}>{item.address}</FText>
          <Separator style={Styles.separator} />
          <View style={Styles.flexRowWithSpaceBetween}>
            <View style={Styles.flexRowWithAlignCenter}>
              <FImage
                style={Styles.weatherIcon}
                source={{uri: item.weather.weatherIcon}}
              />
              <FText
                style={{
                  fontSize: DP._10,
                  color: Color.GREY_PURPLE,
                  marginLeft: DP._4,
                }}>
                {item.weather.weatherName}
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
              time={`Check-in: ${item.checkIn.time}`}
            />
            <CheckInInfo
              title={'Check-out date'}
              date={item.checkOut.date}
              time={`Check-out: ${item.checkOut.time}`}
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
              <FText type="medium">{item.noOfRooms}</FText>
            </View>
          </View>
          <Separator style={Styles.separator} />
          <FText style={Styles.sectionTitle}>Inclusions</FText>
          {item.inclusions.map((item, index) => {
            if (index < 3)
              return (
                <Inclusions
                  key={`ab${index}cd`}
                  text={item.detail}
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
          <FText style={Styles.sectionTitle}>Co-travelers</FText>
          {item.coTravellers.map((item, index) => (
            <CoTraveller name={item} key={`abc${index}def`} />
          ))}
          <Separator style={Styles.separator} />
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
        <Separator style={{backgroundColor: Color.VERY_LIGHT_BLUE}} />
        <View style={Styles.buttonContainer}>
          {cancelAction && (
            <FTouchableOpacity onPress={() => onActionPress?.(cancelAction)}>
              <FText style={Styles.cancel}>{cancelAction.name}</FText>
            </FTouchableOpacity>
          )}
          {modifyAction && (
            <FTouchableOpacity onPress={() => onActionPress?.(modifyAction)}>
              <FText style={Styles.modify}>{modifyAction.name}</FText>
            </FTouchableOpacity>
          )}
        </View>
      </View>
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
    </>
  );
}
