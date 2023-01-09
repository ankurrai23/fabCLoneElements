import {View, FlatList, LayoutAnimation} from 'react-native';
import React, {useState, useImperativeHandle, useRef, useEffect} from 'react';
import DialogBox from '../../../common/components/dialogBox';
import {DP} from '../../../utils/Dimen';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Button from '../../../common/components/button';
import Styles, {CARD_WIDTH} from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {Color} from '../../../utils/color/index.travelPlus';
import moment from 'moment';

export const useTimer = (deadLine) => {
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    let intervalRef = setInterval(() => {
      let seconds = moment(deadLine).diff(moment(), 'seconds');
      if (seconds < 0) {
        seconds = 0;
      }
      setTimeLeft(seconds);
    }, 100);
    return () => {
      clearInterval(intervalRef);
    };
  }, [deadLine]);
  return timeLeft;
};

export const Timer = React.forwardRef(({paymentRequests}, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeLeft = useTimer(paymentRequests[currentIndex].deadline);

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
  const unitOfTime = hours > 0 ? 'hours ' : 'minutes ';

  return !timeLeft ? (
    <FText style={Styles.paymentDetail}>
      {Strings.makePaymentAfterTimeOut}
    </FText>
  ) : (
    <FText style={Styles.paymentDetail}>
      {Strings.makePaymentWithin}
      <FText type={FONT_TYPE.MEDIUM}>{`${hours}:${minutes} `}</FText>
      {unitOfTime}
      {Strings.elsePaymentCancel}
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

const PendingPaymentSheet = ({
  paymentRequests,
  onPressPayment,
  showBottomSheet,
  onClose,
}) => {
  const [sheetVisible, setSheetVisible] = useState(true);
  const cardDotsRef = useRef();
  const timerRef = useRef();

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = (info) => {
    if (info.viewableItems.length > 0) {
      timerRef.current.setIndex(info.viewableItems[0].index);
      cardDotsRef.current.setIndex(info.viewableItems[0].index);
    }
  };

  const renderItem = ({item}) => (
    <FTouchableOpacity style={Styles.cardStyle}>
      <View style={Styles.flexRow}>
        <View>
          <FText>
            {Strings.tripId}
            <FText type={FONT_TYPE.MEDIUM}>{item.masterTripId}</FText>
          </FText>
          <FText style={Styles.tripTitleStyle}>{item.tripTitle}</FText>
          <FText>
            {item.start} - {item.end}
          </FText>
        </View>
        <View style={Styles.priceContainer}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.priceStyle}>
            {Strings.rupee}
            {Math.ceil(item.amount)}
          </FText>
          <FText style={Styles.inclGSTStyle}>{Strings.inclGST}</FText>
        </View>
      </View>
      <Button
        textFont={FONT_TYPE.MEDIUM}
        style={Styles.buttonStyle}
        onPress={() => {
          onPressPayment(item.masterTripId);
        }}>
        {Strings.pay}
      </Button>
    </FTouchableOpacity>
  );

  return (
    <DialogBox
      modalVisible={showBottomSheet}
      onClose={onClose}
      ContentModal={
        <View style={Styles.container}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
            {Strings.paymentPending}
          </FText>
          <Timer ref={timerRef} paymentRequests={paymentRequests} />
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
