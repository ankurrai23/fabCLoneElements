import {View} from 'react-native';
import React from 'react';
import FText from '../../../common/rn/FText';
import Separator from '../../../common/components/separator';
import FImage from '../../../common/rn/FImage';
import Styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const SetOrResetPreference = ({item, onTapToSetPreferences}) => (
  <>
    <Separator
      style={[
        Styles.marginBottom_16,
        {backgroundColor: Color.LIGHT_PERIWINKLE},
      ]}
    />
    <TouchableOpacity
      activeOpacity={1}
      onPress={onTapToSetPreferences}
      disabled={item.disablePref}
      style={Styles.buttonStyle(item.disablePref, item.preference)}>
      <FText
        type="medium"
        style={Styles.setAndResetPreferenceText(
          item.disablePref,
          item.preference,
        )}>
        Tap to {item.preference ? 'reset' : 'set'} preference
      </FText>
      <View style={Styles.preferenceContainer}>
        <FText type="medium" style={Styles.preferenceText(item.disablePref)}>
          {item.preference}
        </FText>
      </View>
    </TouchableOpacity>
  </>
);

const NonRichHotelView = ({
  offline,
  item,
  onTapToSetPreferences,
  onViewMapPress,
  onCardPress,
}) => (
  <TouchableOpacity
    style={Styles.container(offline)}
    onPress={onCardPress}
    activeOpacity={1}>
    <View style={Styles.starContainer}>
      <Stars item={item} />
      <FText style={Styles.hotelStar}>{item.starRating} star hotel</FText>
    </View>
    <FText type={'medium'} style={Styles.hotelName}>
      {item.hotelName}
    </FText>
    <View style={[Styles.flexRow]}>
      <FText style={Styles.hotelAddress} numberOfLines={2}>
        {item.hotelAddress}
      </FText>
      <FText type={'bold'} style={Styles.costOfHotel}>
        {item.cost}
      </FText>
    </View>
    <View style={Styles.mapAndCostInfoContainer}>
      <TouchableOpacity onPress={() => onViewMapPress(item.googleMapUrl)}>
        <FText style={Styles.viewOnMap}>View on map</FText>
      </TouchableOpacity>
      <FText style={Styles.priceDetail}>{`price/night${
        !item.gstIncluded ? ' (Ex GST)' : ''
      }`}</FText>
    </View>
    <SetOrResetPreference
      onTapToSetPreferences={onTapToSetPreferences}
      item={item}
    />
  </TouchableOpacity>
);

const Stars = ({item}) => {
  return [...Array(item.starRating)].map((_, index) => (
    <AntDesign
      name="star"
      style={Styles.icon}
      size={DP._10}
      color={Color.DARK_SLATE_BLUE}
      key={`${index}`}
    />
  ));
};

const RichHotelView = ({offline, item, onTapToSetPreferences, onCardPress}) => (
  <TouchableOpacity
    style={Styles.container(offline)}
    onPress={onCardPress}
    activeOpacity={1}>
    <View>
      <FlatList
        data={item.hotelImages}
        renderItem={({item: imageObj}) => (
          <FImage source={{uri: imageObj}} style={Styles.hotelImageStyle} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `${index}abc`}
      />
      {item.preferenceText && (
        <FText type="bold" style={Styles.companyPreferred}>
          {item.preferenceText}
        </FText>
      )}
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
          {item.starRating} star hotel
        </FText>
      </View>
      <FText type="bold" style={Styles.hotelName(offline)}>
        {item.hotelName}
      </FText>
      <FText style={Styles.hotelLocality}>{item.hotelAddress}</FText>
      <View style={Styles.ratingsContainer}>
        {ratingsArray(item.ratingScore).map((item, index) => (
          <View style={Styles.ratingBarEmpty} key={`${index}`}>
            <View style={Styles.ratingBarFill(item)} />
          </View>
        ))}
        <FText style={Styles.reviewsText}>{item.reviewsCount}</FText>
      </View>
      {!!item.colleaguesCount && (
        <FText style={Styles.ratingsText}>
          Your <FText type="medium">{item.colleaguesCount}</FText> colleagues
          rated it {item.colleaguesRatingAvg} (avg)
        </FText>
      )}
      <View style={Styles.amountContainer}>
        <View style={[Styles.flexRow, {paddingTop: DP._1}]}>
          {item.includesBreakfast && (
            <View style={Styles.flexRow}>
              <Feather name="check" size={DP._16} color={Color.DARK_SEA_FOAM} />
              <FText type="medium" style={Styles.inclusions}>
                Includes breakfast
              </FText>
            </View>
          )}
        </View>
        <FText type={'bold'} style={Styles.costOfHotel}>
          {item.cost}
        </FText>
      </View>
      <View style={Styles.cancellationInfoContainer}>
        <FText style={Styles.cancellationText}>{item.cancellationText}</FText>
        <FText style={Styles.priceDetail}>{`price/night${
          !item.gstIncluded ? ' (Ex GST)' : ''
        }`}</FText>
      </View>
      <View style={Styles.buttonContainer}>
        <SetOrResetPreference
          item={item}
          onTapToSetPreferences={onTapToSetPreferences}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const ratingsArray = (value) => {
  let filledBars = parseInt(value / 20, 10);
  let partialFilled = ((value % 20) / 20) * 100;
  let arr = [...Array(filledBars).fill('100%')];
  if (filledBars === 5) {
    return arr;
  }
  arr.push(`${partialFilled}%`);
  return [...arr, ...Array(5 - arr.length).fill('0%')];
};

export default function HotelPreferenceCard({
  item,
  onTapToSetPreferences,
  onCardPress,
  offline,
  onViewMapPress,
}) {
  return (
    <>
      {offline ? (
        <NonRichHotelView
          item={item}
          onCardPress={onCardPress}
          onTapToSetPreferences={onTapToSetPreferences}
          onViewMapPress={onViewMapPress}
          offline={offline}
        />
      ) : (
        <RichHotelView
          item={item}
          onCardPress={onCardPress}
          offline={offline}
          onTapToSetPreferences={onTapToSetPreferences}
        />
      )}
    </>
  );
}
