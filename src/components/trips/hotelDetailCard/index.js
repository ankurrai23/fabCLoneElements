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

export default function HotelDetailCard({
  data,
  onActionPress,
  onMainImagePress,
  modified = false,
}) {
  const [sheetVisible, setSheetVisible] = useState(false);
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
      <View style={Styles.container}>
        <View style={Styles.subContainer(modified)}>
          <View style={Styles.hotelNameAndImageContainer}>
            <FTouchableOpacity onPress={onMainImagePress}>
              <FImage
                style={Styles.hotelImage}
                source={{uri: data.mainImage}}
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
                  {data.bookingId}
                </FText>
              </FText>
              <FText style={{marginTop: DP._12}}>{data.hotelName}</FText>
            </View>
          </View>
          <FText style={Styles.addressText}>{data.address}</FText>
          <Separator style={Styles.separator} />
          <View style={Styles.flexRowWithSpaceBetween}>
            <View style={Styles.flexRowWithAlignCenter}>
              <FImage
                style={Styles.weatherIcon}
                source={{uri: data.weather.weatherIcon}}
              />
              <FText
                style={{
                  fontSize: DP._10,
                  color: Color.GREY_PURPLE,
                  marginLeft: DP._4,
                }}>
                {data.weather.weatherName}
              </FText>
            </View>
            {data.actions.find((i) => i.type === 'DIRECTION') && (
              <FTouchableOpacity
                style={[Styles.flexRowWithAlignCenter]}
                onPress={() =>
                  onActionPress?.(
                    data.actions.find((i) => i.type === 'DIRECTION'),
                  )
                }>
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
              date={data.checkIn.date}
              time={`Check-in: ${data.checkIn.time}`}
            />
            <CheckInInfo
              title={'Check-out date'}
              date={data.checkOut.date}
              time={`Check-out: ${data.checkOut.time}`}
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
              <FText type="medium">{data.noOfRooms}</FText>
            </View>
          </View>
          <Separator style={Styles.separator} />
          <FText style={Styles.sectionTitle}>Inclusions</FText>
          {data.inclusions.map((item, index) => {
            if (index < 3)
              return (
                <Inclusions
                  key={`ab${index}cd`}
                  text={item.detail}
                  image={item.icon}
                />
              );
          })}
          {data.inclusions.length > 3 && (
            <FTouchableOpacity onPress={() => setSheetVisible(true)}>
              <FText style={Styles.moreInclustion}>
                +{data.inclusions.length - 3} more
              </FText>
            </FTouchableOpacity>
          )}
          <Separator style={Styles.separator} />
          <FText style={Styles.sectionTitle}>Co-travelers</FText>
          {data.coTravellers.map((item, index) => (
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
                name={data.paymentStatus.icon}
                style={{marginRight: DP._4}}
                color={data.paymentStatus.color}
              />
              <FText
                style={{fontSize: DP._10, color: data.paymentStatus.color}}>
                {data.paymentStatus.statusText}
              </FText>
            </View>
          </View>
          {data.actions.find((i) => i.type === 'PAY_NOW') && (
            <Button
              onPress={() =>
                onActionPress?.(data.actions.find((i) => i.type === 'PAY_NOW'))
              }
              style={{borderRadius: DP._4, marginTop: DP._4}}
              textFont="medium">
              Pay Now
            </Button>
          )}
        </View>
        <View style={Styles.buttonContainer}>
          <FTouchableOpacity onPress={() => onActionPress?.(data.actions[1])}>
            <FText style={Styles.cancel}>{data.actions[1].name}</FText>
          </FTouchableOpacity>
          <FTouchableOpacity onPress={() => onActionPress?.(data.actions[0])}>
            <FText style={Styles.modify}>{data.actions[0].name}</FText>
          </FTouchableOpacity>
        </View>
      </View>
      <DialogBox
        modalVisible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        ContentModal={
          <View style={{paddingBottom: DP._30, paddingHorizontal: DP._24}}>
            <FText style={Styles.modalHeading}>Inclusions</FText>
            <FlatList
              data={data.inclusions}
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
