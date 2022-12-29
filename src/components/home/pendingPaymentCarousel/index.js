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

const Card = React.memo(({item}) => (
  <View style={Styles.itemStyle}>
    <FText style={Styles.textStyle}>
      {Strings.tripPendingMakePayment(item.title)}
      <FText type={FONT_TYPE.MEDIUM}>{item.time}</FText> hours
    </FText>
    <FTouchableOpacity style={Styles.payNowButton}>
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
));

const PendingPaymentCarousel = ({paymentRequests}) => {
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

  const renderItem = ({item}) => <Card item={item} />;

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
