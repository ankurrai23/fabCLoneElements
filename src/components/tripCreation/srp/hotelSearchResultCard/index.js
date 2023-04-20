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
import {ColorMatrix} from 'react-native-color-matrix-image-filters';
import {grayImageMatrix} from '../../../../utils/color/ColorMatrix';

export const renderHotelImage = ({item}, greyedOut, length) => {
  return (
    <ColorMatrix matrix={grayImageMatrix(greyedOut)}>
      <FImage
        source={{uri: item}}
        style={Styles.hotelImageStyle(length < 2)}
        defaultSource={require('../../../../assets/images/trips/hotel-image-placeholder.png')}
      />
    </ColorMatrix>
  );
};

export default function HotelSearchResultCard({onCardPress, item}) {
  const greyedOut = item.isSoldOut;

  return (
    <View style={Styles.container}>
      <View>
        <FlatList
          data={item.hotelImages?.length ? item.hotelImages : ['']}
          renderItem={(obj) =>
            renderHotelImage(obj, greyedOut, item.hotelImages?.length ?? 1)
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(e) => `${e}`}
        />
        {!!item.rateLabel && (
          <FText
            type={FONT_TYPE.MEDIUM}
            greyedOut={greyedOut}
            style={Styles.rateType(greyedOut)}>
            {item.rateLabel}
          </FText>
        )}
      </View>
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
                  fill={
                    greyedOut ? Color.BLUEY_GREY : Color.DARK_SLATE_BLUE_TWO
                  }
                />
              );
            })}
          {Boolean(item.starRating) && (
            <FText greyedOut={greyedOut} style={Styles.hotelStar}>
              {Strings.starHotel(item.starRating)}
            </FText>
          )}
          {!!item.preferenceText && (
            <FText
              type={FONT_TYPE.MEDIUM}
              greyedOut={greyedOut}
              style={Styles.preferenceText(greyedOut)}>
              {item.preferenceText}
            </FText>
          )}
        </View>
        <FText
          type={FONT_TYPE.MEDIUM}
          greyedOut={greyedOut}
          style={Styles.hotelName}>
          {item.hotelName}
        </FText>
        <FText
          greyedOut={greyedOut}
          style={Styles.landmarkDistance}
          numberOfLines={3}
          ellipsizeMode={'tail'}>
          {item.landmarkDistance}
        </FText>
        {item.isSoldOut ? null : (
          <>
            {item.ratingScore <= 5 ? (
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
            ) : null}
            <FText style={Styles.ratingsText}>
              {!!item.colleaguesCount && (
                <>
                  {Strings.your}
                  <FText type={FONT_TYPE.MEDIUM}>{item.colleaguesCount}</FText>
                  {Strings.colleagueAvgRating(item.colleaguesRatingAvg)}
                </>
              )}
            </FText>
            <View style={Styles.amountContainer}>
              <FText style={Styles.cancellationText}>
                {item.cancellationText}
              </FText>
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
            <Button
              textFont={FONT_TYPE.MEDIUM}
              onPress={() => onCardPress(item)}>
              {Strings.selectRoom}
            </Button>
          </>
        )}
      </View>
      {item.isSoldOut ? (
        <View style={Styles.soldOutContainer}>
          <Icon.Clock />
          <FText style={Styles.soldOutText}>{Strings.soldOut2}</FText>
        </View>
      ) : null}
    </View>
  );
}
