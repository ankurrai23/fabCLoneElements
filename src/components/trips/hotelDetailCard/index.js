import {View} from 'react-native';
import React from 'react';
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

export default function HotelDetailCard({
  data,
  onModifyPress,
  onCancelPress,
  onMorePress,
  onDirectionPress,
}) {
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
        style={{
          height: DP._16,
          width: DP._16,
          backgroundColor: Color.GREY_PURPLE,
          marginRight: DP._8,
        }}
      />
      <FText>{text}</FText>
    </View>
  );

  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer()}>
        <View style={Styles.hotelNameAndImageContainer}>
          <View>
            <FImage style={Styles.hotelImage} />
            <FontAwesome5
              name="search-plus"
              style={Styles.searchIcon}
              size={DP._18}
              color={Color.WHITE}
            />
          </View>
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
        <FText style={Styles.addressText}>{data.directions}</FText>
        <Separator style={Styles.separator} />
        <View style={Styles.flexRowWithSpaceBetween}>
          <View style={Styles.flexRowWithAlignCenter}>
            <FImage style={Styles.weatherIcon} />
            <FText
              style={{
                fontSize: DP._10,
                color: Color.GREY_PURPLE,
                marginLeft: DP._4,
              }}>
              {data.weather.weatherName}
            </FText>
          </View>
          <FTouchableOpacity
            style={[Styles.flexRowWithAlignCenter]}
            onPress={onDirectionPress}>
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
            return <Inclusions key={`ab${index}cd`} text={item.detail} />;
        })}
        {data.inclusions.length > 3 && (
          <FTouchableOpacity onPress={onMorePress}>
            <FText style={Styles.moreInclustion}>
              +{data.inclusions.length - 3} more
            </FText>
          </FTouchableOpacity>
        )}
        <Separator style={Styles.separator} />
        <FText style={Styles.sectionTitle}>Co-travellers</FText>
        {data.coTravellers.map((item, index) => (
          <CoTraveller name={item} key={`abc${index}def`} />
        ))}
        <Separator style={Styles.separator} />
        <FText style={[Styles.sectionTitle, {marginTop: DP._8}]}>
          Payment mode
        </FText>
        <View style={Styles.paymentModeContainer}>
          <View style={Styles.flexRow}>
            <Feather
              name="credit-card"
              size={DP._15}
              color={Color.GREY_PURPLE}
            />
            <FText style={{marginLeft: DP._8, fontSize: DP._12}}>
              Bill to company
            </FText>
          </View>
          <View style={Styles.paymentStatusContainer}>
            <FText style={{fontSize: DP._10}}>payment pending</FText>
          </View>
        </View>
      </View>
      <View style={Styles.buttonContainer}>
        <FTouchableOpacity onPress={onCancelPress}>
          <FText style={Styles.cancel}>Cancel</FText>
        </FTouchableOpacity>
        <FTouchableOpacity onPress={onModifyPress}>
          <FText style={Styles.modify}>Modify</FText>
        </FTouchableOpacity>
      </View>
    </View>
  );
}
