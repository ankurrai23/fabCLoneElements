import {LayoutAnimation, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Styles from './Styles';
import Icon from '../../../../assets/icons/Icon';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import {ScrollView} from 'react-native-gesture-handler';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import {formattedPrice, getRepString} from '../../../../utils/Utils';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import {Strings} from '../../../../utils/strings/index.travelPlus';

export const TOOLTIP_WIDTH = DP._110;
export const TOOLTIP_HEIGHT = DP._50;

const ITEM_TYPE = {
  SEAT: 'SEAT',
  AISLE: 'AISLE',
};

const getTooltipPosition = (x, y, totalWidth, seatWidth) => {
  let xPos = x + seatWidth / 2 - TOOLTIP_WIDTH / 2;
  let yPos = y;
  if (x < TOOLTIP_WIDTH / 2) {
    xPos = DP._4;
  } else if (totalWidth - x < TOOLTIP_WIDTH / 2) {
    xPos = x - TOOLTIP_WIDTH / 2 - DP._8;
  }
  return {xPos, yPos};
};

const getFontSize = (rowLength) => {
  switch (rowLength) {
    case 11:
      return DP._8;
    case 7:
      return DP._11;
    case 4:
      return DP._16;
    default:
      return DP._11;
  }
};

const ToolTip = ({info}) => {
  if (!info) return null;
  const {x, y, totalWidth, seatWidth, passengerName, seatCode, seatPrice} =
    info;
  return (
    <View
      style={Styles.toolTip(getTooltipPosition(x, y, totalWidth, seatWidth))}>
      <FText
        type={FONT_TYPE.REGULAR}
        numberOfLines={1}
        style={Styles.toolTipPassengerName}>
        {passengerName}
      </FText>
      <View style={Styles.toolTipSeatInfoContainer}>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.toolTipSeatCode}>
          {seatCode}
        </FText>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.toolTipSeatPrice}>
          {formattedPrice(seatPrice)}
        </FText>
      </View>
    </View>
  );
};

export const FlightSeat = ({
  seatString,
  seatColor,
  ifBooked,
  selected,
  onSeatPress,
  rowLength,
}) => {
  const positionRef = useRef();
  const onLayout = (event) => {
    const {x, width} = event.nativeEvent.layout;
    positionRef.current = {x: x, width: width};
  };
  const onPress = () => {
    onSeatPress(positionRef.current);
  };

  return (
    <FTouchableOpacity
      style={Styles.seatStyle(seatColor)}
      onPress={onPress}
      onLayout={onLayout}>
      {selected ? (
        <Icon.Check width={DP._16} height={DP._16} stroke={Color.WHITE} />
      ) : ifBooked ? (
        <Icon.Cross width={DP._16} height={DP._16} stroke={Color.GREY_5} />
      ) : (
        <FText
          style={{
            fontSize: getFontSize(rowLength),
            lineHeight: DP._18,
          }}>
          {seatString}
        </FText>
      )}
    </FTouchableOpacity>
  );
};

const SeatSelection = ({data}) => {
  const rowPositionRef = useRef({});
  const scrollViewLayoutRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [toolTipInfo, setToolTipInfo] = useState(null);

  // useEffect(() => {
  //   if (toolTipInfo) {
  //     setTimeout(() => {
  //       LayoutAnimation.easeInEaseOut();
  //       setToolTipInfo(null);
  //     }, 2000);
  //   }
  // }, [toolTipInfo]);

  const renderSeatRow = (item, index) => {
    const onFlightSeatPress = (seat) => {
      scrollViewRef.current.scrollTo({
        y:
          rowPositionRef.current[index] -
          scrollViewLayoutRef.current.height * 0.45,
        animated: true,
      });
      setToolTipInfo({
        x: seat.x,
        seatWidth: seat.width,
        y: rowPositionRef.current[index],
        totalWidth: scrollViewLayoutRef.current.width,
        passengerName: 'Hello World',
        seatPrice: '999',
        seatCode: '1A',
      });
    };
    return (
      <View
        style={Styles.seatRow}
        key={index}
        onLayout={(event) => {
          const {y, height} = event.nativeEvent.layout;
          rowPositionRef.current = {
            ...rowPositionRef.current,
            [index]: y + height - DP._10,
          };
        }}>
        {item.map((seatData, seatIndex) => {
          const {price, ifBooked, selected, type} = seatData;
          const seatString = price === 0 ? 'Free' : getRepString(price);
          const seatColor = selected
            ? Color.DARK_SEA_FOAM
            : ifBooked
            ? Color.CULTURED
            : seatData.colorCode;
          return type === ITEM_TYPE.AISLE ? (
            <View key={`${index}${seatIndex}`} style={Styles.emptySpace}>
              <FText
                style={{
                  fontSize: getFontSize(item.length),
                  color: Color.GREY_PURPLE,
                }}>
                {index + 1}
              </FText>
            </View>
          ) : (
            <FlightSeat
              key={`${index}${seatIndex}`}
              seatColor={seatColor}
              seatString={seatString}
              ifBooked={ifBooked}
              selected={selected}
              rowLength={item.length}
              onSeatPress={onFlightSeatPress}
            />
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      onLayout={(e) => {
        scrollViewLayoutRef.current = e.nativeEvent.layout;
      }}>
      <View style={Styles.frontAisle}>
        <FText style={Styles.text_Center}>{Strings.front}</FText>
      </View>
      {data.map(renderSeatRow)}
      <ToolTip info={toolTipInfo} />
      <View style={Styles.backAisle}>
        <FText style={Styles.text_Center}>{Strings.back}</FText>
      </View>
    </ScrollView>
  );
};

export default SeatSelection;
