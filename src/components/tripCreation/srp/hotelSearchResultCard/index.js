import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import FImage from '../../../../common/rn/FImage';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import Icon from '../../../../assets/icons/Icon';
import {FlatList} from 'react-native-gesture-handler';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {ratingsArray} from '../../../trips/hotelPreferenceCard';
import Button from '../../../../common/components/button';
import OOPTag from '../../../trips/components/OOPTag/OOPTag';

export const renderHotelImage = ({item}) => {
  return <FImage source={{uri: item}} style={Styles.hotelImageStyle} />;
};

export default function HotelSearchResultCard({onCardPress, item}) {
  return (
    <View style={Styles.container}>
      {!!item.hotelImages?.length && (
        <View>
          <FlatList
            data={item.hotelImages}
            renderItem={renderHotelImage}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(e) => `${e}`}
          />
          {!!item.rateLabel && (
            <FText type={FONT_TYPE.MEDIUM} style={Styles.rateType}>
              {item.rateLabel}
            </FText>
          )}
        </View>
      )}
      <View style={Styles.subContainer}>
        <View style={Styles.starContainer}>
          {Array(item.starRating)
            .fill(0)
            .map((e) => {
              return (
                <Icon.RatingStar
                  style={Styles.icon}
                  width={DP._16}
                  height={DP._16}
                  fill={Color.DARK_SLATE_BLUE_TWO}
                />
              );
            })}
          <FText style={Styles.hotelStar}>
            {Strings.starHotel(item.starRating)}
          </FText>
          {!!item.preferenceText && (
            <FText type={FONT_TYPE.MEDIUM} style={Styles.preferenceText}>
              {item.preferenceText}
            </FText>
          )}
        </View>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.hotelName}>
          {item.hotelName}
        </FText>
        <FText
          style={Styles.landmarkDistance}
          numberOfLines={3}
          ellipsizeMode={'tail'}>
          {item.landmarkDistance}
        </FText>
        <View style={Styles.ratingsContainer}>
          {ratingsArray(item.ratingScore).map((rating, index) => {
            return (
              <View style={Styles.ratingBarEmpty} key={`${index}`}>
                <View style={Styles.ratingBarFill(rating)} />
              </View>
            );
          })}
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
          <FText style={Styles.cancellationText}>{item.cancellationText}</FText>
          {!!item.cost && (
            <View style={Styles.alignFlexEnd}>
              <View style={Styles.priceAndGstContainer}>
                <FText type={FONT_TYPE.MEDIUM} style={Styles.costOfHotel}>
                  {item.cost}
                </FText>
                <FText style={Styles.priceDetail}>
                  {item.gstIncluded ? Strings.inclGst : Strings.exGst}
                </FText>
              </View>
              {item.isOutOfPolicy && <OOPTag style={Styles.oopMargin} />}
            </View>
          )}
        </View>
        <Button textFont={FONT_TYPE.MEDIUM} onPress={onCardPress}>
          {Strings.selectRoom}
        </Button>
      </View>
    </View>
  );
}
