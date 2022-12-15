import {View, FlatList, LayoutAnimation} from 'react-native';
import React, {
  useState,
  useImperativeHandle,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import DialogBox from '../../../common/components/dialogBox';
import {DP} from '../../../utils/Dimen';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Button from '../../../common/components/button';
import Styles, {CARD_WIDTH} from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {Color} from '../../../utils/color/index.travelPlus';
import moment from 'moment';

export const Timer = React.forwardRef(({paymentRequests}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const deadline = paymentRequests[currentIndex].deadline;

  useEffect(() => {
    let intervalRef = setInterval(() => {
      const seconds = moment(deadline).diff(moment(), 'seconds');
      if (seconds >= 0) {
        setTimeLeft(seconds);
      }
    }, 100);
    return () => {
      clearInterval(intervalRef);
    };
  }, [deadline]);

  useImperativeHandle(ref, () => ({
    setIndex: (index) => {
      setCurrentIndex(index);
    },
  }));

  const hours = Math.floor(timeLeft / 3600)
    .toString(10)
    .padStart(2, '0');
  const minutes = Math.floor((timeLeft % 3600) / 60)
    .toString(10)
    .padStart(2, '0');
  const seconds = Math.floor((timeLeft % 3600) % 60)
    .toString(10)
    .padStart(2, '0');

  const unitOfTime = hours > 0 ? 'hours ' : 'minutes ';

  return (
    <FText>
      <FText type={FONT_TYPE.MEDIUM}>{`${hours}:${minutes} `}</FText>
      {unitOfTime}
    </FText>
  );
});

export const CardDots = React.forwardRef(
  ({data, containerStyle, dotColor}, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useImperativeHandle(ref, () => ({
      setIndex: (index) => {
        LayoutAnimation.spring();
        setCurrentIndex(index);
      },
    }));

    return (
      <View style={[Styles.dotContainer, {containerStyle}]}>
        {data.map((_, index) => (
          <View style={[Styles.dotStyle(currentIndex === index, dotColor)]} />
        ))}
      </View>
    );
  },
);

const ItemSeparator = () => <View style={{width: DP._16}} />;

const PendingPaymentSheet = ({paymentRequests}) => {
  const [sheetVisible, setSheetVisible] = useState(true);
  const cardDotsRef = useRef();
  const timerRef = useRef();

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 90,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = (info) => {
    if (info.viewableItems.length > 0) {
      timerRef.current.setIndex(info.viewableItems[0].index);
      cardDotsRef.current.setIndex(info.viewableItems[0].index);
    }
  };

  const renderItem = useCallback(
    ({item}) => (
      <FTouchableOpacity style={Styles.cardStyle}>
        <View style={Styles.flexRow}>
          <View>
            <FText>
              {Strings.tripId}
              <FText type={FONT_TYPE.MEDIUM}>{item.tripId}</FText>
            </FText>
            <FText style={Styles.tripTitleStyle}>{item.tripTitle}</FText>
            <FText>
              {item.tripStartDate} - {item.tripEndDate}
            </FText>
          </View>
          <View style={Styles.priceContainer}>
            <FText type={FONT_TYPE.MEDIUM} style={Styles.priceStyle}>
              {item.amount}
            </FText>
            <FText style={Styles.inclGSTStyle}>{Strings.inclGST}</FText>
          </View>
        </View>
        <Button textFont={FONT_TYPE.MEDIUM} style={Styles.buttonStyle}>
          {Strings.pay}
        </Button>
      </FTouchableOpacity>
    ),
    [],
  );

  return (
    <DialogBox
      modalVisible={sheetVisible}
      onClose={() => setSheetVisible(false)}
      ContentModal={
        <View style={Styles.container}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
            {Strings.paymentPending}
          </FText>
          <FText style={Styles.paymentDetail}>
            Make the payment within{' '}
            <Timer ref={timerRef} paymentRequests={paymentRequests} />
            else your trip will be cancelled.
          </FText>
          <FlatList
            data={paymentRequests}
            decelerationRate={'fast'}
            horizontal={true}
            bounces={false}
            pagingEnabled={true}
            disableIntervalMomentum={true}
            snapToInterval={CARD_WIDTH + DP._16}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged}
            contentContainerStyle={Styles.flatlistContainerStyle}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
          />
          <CardDots
            ref={cardDotsRef}
            data={paymentRequests}
            dotColor={Color.TWILIGHT_BLUE}
          />
        </View>
      }
    />
  );
};

export default PendingPaymentSheet;
