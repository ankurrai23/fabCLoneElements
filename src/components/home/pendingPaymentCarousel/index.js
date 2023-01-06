import {FlatList, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import {DP} from '../../../utils/Dimen';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Icon from '../../../assets/icons/Icon';
import {Color} from '../../../utils/color/index.travelPlus';
import {CardDots} from '../pendingPaymentSheet';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {useTimer} from '../pendingPaymentSheet';

export const Card = ({paymentRequest, onPressPayment}) => {
  const timeLeft = useTimer(paymentRequest.deadline);

  const hours = Math.floor(timeLeft / 3600)
    .toString(10)
    .padStart(2, '0');
  const minutes = Math.floor((timeLeft % 3600) / 60)
    .toString(10)
    .padStart(2, '0');

  const unitOfTime = hours > 0 ? 'hours ' : 'minutes ';

  const renderTextComponent = !timeLeft ? (
    <FText style={Styles.textStyle}>
      {Strings.tripPendingMakePaymentAfterTimeout(paymentRequest.tripTitle)}
    </FText>
  ) : (
    <FText style={Styles.textStyle}>
      {Strings.tripPendingMakePayment(paymentRequest.tripTitle)}
      <FText type={FONT_TYPE.MEDIUM}>{`${hours}:${minutes} `}</FText>
      {unitOfTime}
    </FText>
  );

  return (
    <View style={Styles.itemStyle}>
      {renderTextComponent}
      <FTouchableOpacity
        style={Styles.payNowButton}
        onPress={() => onPressPayment(paymentRequest.tripId)}>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.payNowText}>
          {Strings.payNow}
        </FText>
        <Icon.ChevronRight
          width={DP._16}
          height={DP._16}
          stroke={Color.DODGER_BLUE}
        />
      </FTouchableOpacity>
    </View>
  );
};

const PendingPaymentCarousel = ({paymentRequests, onPressPayment}) => {
  const cardDotsRef = useRef();

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = useCallback((info) => {
    if (info.viewableItems.length > 0) {
      cardDotsRef.current.setIndex(info.viewableItems[0].index);
    }
  }, []);

  const renderItem = ({item}) => (
    <Card paymentRequest={item} onPressPayment={onPressPayment} />
  );
  return (
    <View style={Styles.container}>
      <FlatList
        data={paymentRequests}
        horizontal={true}
        bounces={false}
        snapToInterval={DP.match_width}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        pagingEnabled={true}
        renderItem={renderItem}
      />
      <CardDots data={paymentRequests} ref={cardDotsRef} dotColor={'#F18D8D'} />
    </View>
  );
};

export default PendingPaymentCarousel;
