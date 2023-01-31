import {View} from 'react-native';
import React from 'react';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import Separator from '../../../common/components/separator';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {renderHotelImage} from '../../tripCreation/srp/hotelSearchResultCard';

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
        type={FONT_TYPE.MEDIUM}
        style={Styles.setAndResetPreferenceText(
          item.disablePref,
          item.preference,
        )}>
        {Strings.tapToSetPreference(item.preference)}
      </FText>
      <View style={Styles.preferenceContainer}>
        <FText
          type={FONT_TYPE.MEDIUM}
          style={Styles.preferenceText(item.disablePref)}>
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
      <FText style={Styles.hotelStar}>
        {Strings.starHotel(item.starRating)}
      </FText>
    </View>
    <FText type={FONT_TYPE.MEDIUM} style={Styles.hotelName}>
      {item.hotelName}
    </FText>
    <View style={[Styles.flexRow]}>
      <FText style={Styles.hotelAddress} numberOfLines={2}>
        {item.hotelAddress}
      </FText>
      {item.cost && (
        <FText type={FONT_TYPE.BOLD} style={Styles.costOfHotel}>
          {item.cost}
        </FText>
      )}
    </View>
    <View style={Styles.mapAndCostInfoContainer}>
      <TouchableOpacity onPress={() => onViewMapPress(item.googleMapUrl)}>
        <FText style={Styles.viewOnMap}>{Strings.viewOnMap}</FText>
      </TouchableOpacity>
      {/*TODO: Need to discuss */}
      {item.cost && (
        <FText style={Styles.priceDetail}>{`price/night${
          !item.gstIncluded ? ' (Ex GST)' : ''
        }`}</FText>
      )}
    </View>
    <SetOrResetPreference
      onTapToSetPreferences={onTapToSetPreferences}
      item={item}
    />
  </TouchableOpacity>
);

const Stars = ({item}) => {
  return [...Array(item.starRating)].map((_, index) => (
    <Icon.RatingStar
      width={DP._16}
      height={DP._16}
      key={`${index}`}
      style={Styles.icon}
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
        renderItem={renderHotelImage}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `${index}abc`}
      />
      {item.preferenceText && (
        <FText type={FONT_TYPE.BOLD} style={Styles.companyPreferred}>
          {item.preferenceText}
        </FText>
      )}
    </View>
    <View style={Styles.subContainer}>
      <View style={Styles.starContainer}>
        <Icon.RatingStar
          style={Styles.icon}
          width={DP._16}
          height={DP._16}
          fill={Color.MANGO}
        />
        <FText style={Styles.hotelStar(offline)}>
          {Strings.starHotel(item.starRating)}
        </FText>
      </View>
      <FText type={FONT_TYPE.BOLD} style={Styles.hotelName(offline)}>
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
          {Strings.your}
          <FText type={FONT_TYPE.MEDIUM}>{item.colleaguesCount}</FText>
          {Strings.colleagueAvgRating(item.colleaguesRatingAvg)}
        </FText>
      )}
      <View style={Styles.amountContainer}>
        <View style={[Styles.flexCol]}>
          {item.mealTypeText && (
            <View style={[Styles.flexRow]}>
              <Icon.Check
                width={DP._16}
                height={DP._16}
                stroke={Color.DARK_SEA_FOAM}
              />
              <FText type={FONT_TYPE.MEDIUM} style={Styles.inclusions}>
                {item.mealTypeText}
              </FText>
            </View>
          )}
          <FText style={Styles.cancellationText}>{item.cancellationText}</FText>
        </View>
        {item.cost && (
          <View>
            <FText type={FONT_TYPE.BOLD} style={Styles.costOfHotel}>
              {item.cost}
            </FText>
            {/*TODO: Need to discuss */}
            <FText style={Styles.priceDetail}>{`price/night${
              !item.gstIncluded ? ' (Ex GST)' : ''
            }`}</FText>
          </View>
        )}
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

export const ratingsArray = (value) => {
  value *= 100;
  let filledBars = parseInt(value / 100, 10);
  let partialFilled = value % 100;
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
