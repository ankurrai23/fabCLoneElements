import {LayoutAnimation, View} from 'react-native';
import React, {useRef, useState, useEffect, useCallback} from 'react';
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
    xPos = totalWidth - (TOOLTIP_WIDTH + DP._8);
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
  const {
    x,
    y,
    totalWidth,
    seatWidth,
    passengerName,
    seatCode,
    seatPrice,
    seatType,
  } = info;
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
          {`${seatCode} `}
        </FText>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.toolTipSeatPrice}>
          {formattedPrice(seatPrice)}
        </FText>
      </View>
    </View>
  );
};

const FlightSeat = React.memo(
  ({seatString, seatColor, isAvailable, selected, onSeatPress, rowLength}) => {
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
  },
);

const FlightSeatHeader = React.memo(({listColumns}) => {
  // console.log('FlightSeatHeader render');
  return (
    <>
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
    </>
  );
});

const FlightSeatFooter = React.memo(() => {
  // console.log("FlightSeatFooter render");
  return (
    <View style={Styles.backAisle}>
      <FText style={Styles.text_Center}>{Strings.back}</FText>
    </View>
  );
});

const FlightSeatContainer = React.memo(
  ({seatData, selected, rowIndex, seatIndex, item, onFlightSeatPress}) => {
    const {price, isSeatAvailable, type} = seatData;
    seatData.rowIndex = rowIndex;
    seatData.columnIndex = seatIndex;

    const onSeatPress = useCallback(
      (position) => onFlightSeatPress(seatData, position, rowIndex, selected),
      [onFlightSeatPress, seatData, rowIndex, selected],
    );

    const seatString = price === 0 ? 'Free' : getRepString(price);
    const seatColor = selected ? Color.DARK_SEA_FOAM : seatData.colorCode;
    return type === ITEM_TYPE.AISLE ? (
      <View key={`${rowIndex}${seatIndex}`} style={Styles.emptySpace}>
        <FText
          style={{
            fontSize: getFontSize(item.length),
            color: Color.GREY_PURPLE,
          }}>
          {rowIndex + 1}
        </FText>
      </View>
    ) : (
      <FlightSeat
        key={`${rowIndex}${seatIndex}`}
        seatColor={seatColor}
        seatString={seatString}
        isAvailable={isSeatAvailable}
        selected={selected}
        rowLength={item.length}
        onSeatPress={onSeatPress}
      />
    );
  },
);

const SeatSelection = ({
  data,
  onSeatPress,
  seatPassengerMap,
  listColumns,
  activePassenger,
  activeStoppage,
}) => {
  const rowPositionRef = useRef({});
  const scrollViewLayoutRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [toolTipInfo, setToolTipInfo] = useState(null);

  useEffect(() => {
    //toolTip info changes as passenger changes
    let toolTip = activePassenger.seatDetails[activeStoppage].seatInfo?.toolTip;
    if (toolTip && scrollViewLayoutRef.current?.height) {
      scrollViewRef.current.scrollTo({
        y: toolTip.y - scrollViewLayoutRef.current?.height * 0.45,
        animated: true,
      });
      setToolTipInfo(toolTip);
    }
  }, [activePassenger, activeStoppage]);

  useEffect(() => {
    //clear tooltip after 2 seconds and if there is no data in tooltip
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

  const onFlightSeatPress = useCallback(
    (seatData, position, rowIndex, selected) => {
      if (!seatData.isSeatAvailable) {
        return;
      }
      const toolTip = {
        x: position.x,
        seatWidth: position.width,
        y: rowPositionRef.current[rowIndex],
        totalWidth: scrollViewLayoutRef.current.width,
        seatPrice: formattedPrice(seatData.price),
        seatCode: seatData.code,
        seatType: seatData.seatTypeValue,
      };
      // console.log('Selected passenger - ', selectedPassenger);
      scrollViewRef.current.scrollTo({
        y:
          rowPositionRef.current[rowIndex] -
          scrollViewLayoutRef.current.height * 0.45,
        animated: true,
      });
      if (!selected) {
        onSeatPress({...seatData, toolTip});
      }
      setToolTipInfo(toolTip);
    },
    [onSeatPress],
  );

  const renderSeatRow = (item, index) => {
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
          return (
            <FlightSeatContainer
              seatData={seatData}
              selected={!!seatPassengerMap[seatData.code]}
              rowIndex={index}
              seatIndex={seatIndex}
              item={item}
              onFlightSeatPress={onFlightSeatPress}
            />
          );
        })}
      </View>
    );
  };

  const updateToolTipInfoName = (info) => {
    if (!info) return null;
    return {
      ...info,
      passengerName: seatPassengerMap?.[info?.seatCode]?.fullName,
    };
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      onLayout={(e) => {
        scrollViewLayoutRef.current = e.nativeEvent.layout;
      }}>
      <FlightSeatHeader listColumns={listColumns} />
      {data.map(renderSeatRow)}
      <FlightSeatFooter />
      {!!toolTipInfo && <ToolTip info={updateToolTipInfoName(toolTipInfo)} />}
    </ScrollView>
  );
};

export default SeatSelection;
