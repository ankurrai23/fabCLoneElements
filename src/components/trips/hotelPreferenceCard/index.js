import {View} from 'react-native';
import React from 'react';
import {FText, FTouchableOpacity, Separator, FImage} from '../../..';
import Styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {FlatList} from 'react-native-gesture-handler';

const images = [
  'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
  'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
  'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
  'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
];

export default function HotelPreferenceCard({
  item,
  onTapToSetPreferences,
  offline,
}) {
  const ratingsArray = (value = 45) => {
    let filledBars = parseInt(value / 20, 10);
    let partialFilled = ((value % 20) / 20) * 100;
    let arr = [...Array(filledBars).fill('100%'), partialFilled + '%'];
    return [...arr, ...Array(5 - arr.length).fill('0%')];
  };

  const Stars = () => {
    return [...Array(item.stars)].map(() => (
      <AntDesign
        name="star"
        style={Styles.icon}
        size={DP._10}
        color={Color.DARK_SLATE_BLUE}
      />
    ));
  };

  const SetOrResetPreference = () => (
    <>
      <Separator style={Styles.marginBottom_16} />
      <FTouchableOpacity
        onPress={onTapToSetPreferences}
        style={Styles.buttonStyle(item.preference)}>
        <FText type="medium" style={Styles.setAndResetPreferenceText}>
          Tap to {item.preference ? 'reset' : 'set'} preference
        </FText>
        <View style={Styles.preferenceContainer}>
          <FText type="medium" style={Styles.preferenceText}>
            {item.preference}
          </FText>
        </View>
      </FTouchableOpacity>
    </>
  );

  const NonRichHotelView = () => (
    <View style={Styles.container()}>
      <View style={Styles.starContainer}>
        <Stars />
        <FText style={Styles.hotelStar}>{item.stars} star hotel</FText>
      </View>
      <FText type={'medium'} style={Styles.hotelName}>
        {item.hotelName()}
      </FText>
      <View style={Styles.flexRow}>
        <FText style={Styles.hotelAddress} numberOfLines={2}>
          {item.hotelAddress}
        </FText>
        <FText type={'bold'} style={Styles.costOfHotel}>
          <FText>₹</FText>
          {item.cost}
        </FText>
      </View>
      <View style={Styles.mapAndCostInfoContainer}>
        <FTouchableOpacity>
          <FText style={Styles.viewOnMap}>View on map</FText>
        </FTouchableOpacity>
        <FText style={Styles.priceDetail}>price/night (Ex GST)</FText>
      </View>
      <SetOrResetPreference />
    </View>
  );

  const RichHotelView = () => (
    <View style={Styles.container(offline)}>
      <View>
        <FlatList
          data={images}
          renderItem={({item}) => (
            <FImage
              source={{uri: item}}
              style={{width: DP._250, height: DP._150, marginRight: DP._1}}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
        />
        <FText type="bold" style={Styles.companyPreferred}>
          TravelPlus preferred
        </FText>
      </View>
      <View style={Styles.subContainer}>
        <View style={Styles.starContainer}>
          <AntDesign
            name="star"
            style={Styles.icon}
            size={DP._12}
            color={Color.MANGO}
          />
          <FText style={Styles.hotelStar(offline)}>
            {item.stars} star hotel
          </FText>
        </View>
        <FText type="bold" style={Styles.hotelName(offline)}>
          Schlumberger Guest House 1203
        </FText>
        <FText style={Styles.hotelLocality}>Andheri East, Mumbai</FText>
        <FText style={Styles.secondaryAddr}>
          220 m from Marol naka Metro Station
        </FText>
        <View style={Styles.ratingsContainer}>
          {ratingsArray().map((item, index) => (
            <View style={Styles.ratingBarEmpty} key={`${index}`}>
              <View style={Styles.ratingBarFill(item)} />
            </View>
          ))}
          <FText style={Styles.reviewsText}>4.5/5 (134 reviews)</FText>
        </View>
        <FText style={Styles.ratingsText}>
          Your <FText type="medium">23</FText> colleagues rated it 4.2 (avg)
        </FText>
        <View style={Styles.amountContainer}>
          <View style={Styles.flexRow}>
            <Feather name="check" size={DP._16} color={Color.DARK_SEA_FOAM} />
            <FText type="medium" style={Styles.inclusions}>
              Free breakfast
            </FText>
          </View>
          <FText type={'bold'} style={Styles.costOfHotel(offline)}>
            <FText>₹</FText>
            {item.cost}
          </FText>
        </View>
        <View style={Styles.cancellationInfoContainer}>
          <FText style={Styles.cancellationText}>
            Free cancellation before 12 nov
          </FText>
          <FText style={Styles.priceDetail}>price/night (Ex GST)</FText>
        </View>
        <View style={Styles.buttonContainer}>
          <SetOrResetPreference />
        </View>
      </View>
    </View>
  );

  return <>{offline ? <RichHotelView /> : <NonRichHotelView />}</>;
}
