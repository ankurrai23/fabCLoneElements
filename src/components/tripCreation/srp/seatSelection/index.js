import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import Styles from './Styles';
import Icon from '../../../../assets/icons/Icon';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {ScrollView} from 'react-native-gesture-handler';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import {formattedPrice, getRepString} from '../../../../utils/Utils';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';

export const TOOLTIP_WIDTH = DP._110;
export const TOOLTIP_HEIGHT = DP._50;

const ITEM_TYPE = {
  SEAT: 'SEAT',
  AISLE: 'AISLE',
};

const getTooltipPosition = (x, y, scrollViewSize, seatWidth) => {
  let xPos = x + seatWidth / 2 - TOOLTIP_WIDTH / 2;
  let yPos = y;
  if (x < TOOLTIP_WIDTH / 2) {
    xPos = 4;
  } else if (scrollViewSize.width - x < TOOLTIP_WIDTH / 2) {
    xPos = scrollViewSize.width - TOOLTIP_WIDTH;
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
  const [toolTipPos, setToolTipPos] = useState(null);
  const renderSeatRow = (item, index) => {
    return (
      <View
        style={Styles.seatRow}
        onLayout={(event) => {
          const {y, height} = event.nativeEvent.layout;
          rowPositionRef.current = {
            ...rowPositionRef.current,
            [index]: y + height - DP._10,
          };
        }}>
        {item.map((seatData) => {
          const {price, ifBooked, selected, type} = seatData;
          const seatString = price === 0 ? 'Free' : getRepString(price);
          const seatColor = selected
            ? Color.DARK_SEA_FOAM
            : ifBooked
            ? Color.CULTURED
            : seatData.colorCode;
          return type === ITEM_TYPE.AISLE ? (
            <View style={Styles.emptySpace}>
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
              seatColor={seatColor}
              seatString={seatString}
              ifBooked={ifBooked}
              selected={selected}
              rowLength={item.length}
              onSeatPress={(seat) => {
                scrollViewRef.current.scrollTo({
                  y:
                    rowPositionRef.current[index] -
                    scrollViewLayoutRef.current.height * 0.45,
                  animated: true,
                });
                setToolTipPos({
                  x: seat.x,
                  seatWidth: seat.width,
                  y: rowPositionRef.current[index],
                });
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      onLayout={(e) => {
        scrollViewLayoutRef.current = e.nativeEvent.layout;
      }}>
      {data.map(renderSeatRow)}
      <View>
        <Text style={{paddingBottom: DP._24}}>BACK</Text>
      </View>
      {!!toolTipPos && (
        <View
          style={Styles.toolTip(
            getTooltipPosition(
              toolTipPos.x,
              toolTipPos.y,
              scrollViewLayoutRef.current,
              toolTipPos.seatWidth,
            ),
          )}>
          <FText
            type={FONT_TYPE.REGULAR}
            numberOfLines={1}
            style={{fontSize: DP._12, lineHeight: DP._14}}>
            Mr. Nikhil Kumar Choudhary
          </FText>
          <View
            style={{
              flexDirection: 'row',
              marginTop: DP._4,
              justifyContent: 'space-between',
            }}>
            <FText
              type={FONT_TYPE.MEDIUM}
              style={{
                fontSize: DP._12,
                lineHeight: DP._16,
              }}>
              31B
            </FText>
            <FText
              type={FONT_TYPE.MEDIUM}
              style={{fontSize: DP._12, lineHeight: DP._16}}>
              {formattedPrice(9999)}
            </FText>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default SeatSelection;
