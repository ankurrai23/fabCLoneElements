import {LayoutAnimation, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
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
    xPos = totalWidth - (TOOLTIP_WIDTH + DP._4);
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
  if (!info) {
    return null;
  }
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

const FlightSeat = ({
  seatString,
  seatColor,
  isAvailable,
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
      ) : !isAvailable ? (
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

const SeatSelection = ({
  data,
  onSeatPress,
  seatPassengerMap,
  listColumns,
  activePassenger,
}) => {
  const rowPositionRef = useRef({});
  const scrollViewLayoutRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [toolTipInfo, setToolTipInfo] = useState(null);

  useEffect(() => {
    let toolTip = activePassenger.seatDetails[0].seatInfo?.toolTip;
    if (toolTip && scrollViewLayoutRef.current?.height) {
      scrollViewRef.current.scrollTo({
        y: toolTip.y - scrollViewLayoutRef.current?.height * 0.45,
        animated: true,
      });
      setToolTipInfo(toolTip);
    }
  }, [activePassenger]);

  useEffect(() => {
    let timeout = null;
    if (toolTipInfo) {
      timeout = setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        setToolTipInfo(null);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [toolTipInfo]);

  const renderSeatRow = (item, index) => {
    const onFlightSeatPress = (seatData, position) => {
      if (!seatData.isSeatAvailable) {
        return;
      }
      let selectedPassenger = seatPassengerMap[seatData.code];
      const toolTip = {
        x: position.x,
        seatWidth: position.width,
        y: rowPositionRef.current[index],
        totalWidth: scrollViewLayoutRef.current.width,
        passengerName: (selectedPassenger ?? activePassenger).fullName,
        seatPrice: formattedPrice(seatData.price),
        seatCode: seatData.code,
      };
      console.log('Selected passenger - ', selectedPassenger);
      if (!selectedPassenger) {
        selectedPassenger = onSeatPress({...seatData, toolTip});
      }
      scrollViewRef.current.scrollTo({
        y:
          rowPositionRef.current[index] -
          scrollViewLayoutRef.current.height * 0.45,
        animated: true,
      });
      if (selectedPassenger) {
        setToolTipInfo(toolTip);
      }
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
          const {price, isSeatAvailable, type} = seatData;
          const selected = !!seatPassengerMap[seatData.code];
          seatData.rowIndex = index;
          seatData.columnIndex = seatIndex;
          const seatString = price === 0 ? 'Free' : getRepString(price);
          const seatColor = selected ? Color.DARK_SEA_FOAM : seatData.colorCode;
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
              isAvailable={isSeatAvailable}
              selected={selected}
              rowLength={item.length}
              onSeatPress={(position) => onFlightSeatPress(seatData, position)}
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
      <View style={Styles.columnHeaderContainer}>
        {listColumns.map((item, index) => (
          <>
            {item ? (
              <View style={Styles.columnHeadingContainer}>
                <FText
                  style={Styles.columnHeading(getFontSize(listColumns.length))}>
                  {item}
                </FText>
              </View>
            ) : (
              <View key={`${index}`} style={Styles.emptySpace} />
            )}
          </>
        ))}
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
