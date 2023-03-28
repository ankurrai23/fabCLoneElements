import {View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import Styles from './Styles';
import Icon from '../../../../assets/icons/Icon';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {ScrollView} from 'react-native-gesture-handler';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';

const getSeatColor = (price) => {
  if (price === 0) return null;
  if (price <= 500) return Color.ICE_BLUE;
  if (price <= 1000) return Color.DIAMOND;
  if (price <= 1500) return Color.JORDY_BLUE;
  if (price > 1500) return Color.VERY_LIGHT_AZURE;
};

export const FlightSeat = ({
  seatString,
  seatColor,
  ifBooked,
  selected,
  onSeatPress,
}) => {
  const positionRef = useRef();
  return (
    <FTouchableOpacity
      style={Styles.seatStyle(seatColor)}
      onPress={() => {
        onSeatPress(positionRef.current);
      }}
      onLayout={(event) => {
        const {x} = event.nativeEvent.layout;
        positionRef.current = x;
      }}>
      {selected ? (
        <Icon.Check width={DP._16} height={DP._16} stroke={Color.WHITE} />
      ) : ifBooked ? (
        <Icon.Cross width={DP._16} height={DP._16} stroke={Color.GREY_5} />
      ) : (
        <Text
          style={{
            paddingHorizontal: DP._6,
            paddingVertical: DP._10,
            fontSize: DP._11,
            lineHeight: DP._18,
          }}>
          {seatString}
        </Text>
      )}
    </FTouchableOpacity>
  );
};

const SeatSelection = ({data}) => {
  const rowPositionRef = useRef({});
  const [toolTipPos, setToolTipPos] = useState(null);
  const renderSeatRow = (item, index) => {
    return (
      <View
        style={Styles.seatRow}
        onLayout={(event) => {
          rowPositionRef.current = {
            ...rowPositionRef.current,
            [index]: event.nativeEvent.layout.y,
          };
        }}>
        {item.map((seatData) => {
          const {price, ifBooked, selected, type} = seatData;
          const seatString = price === 0 ? 'Free' : `${Strings.rupee}${price}`;
          const seatColor = selected
            ? Color.DARK_SEA_FOAM
            : ifBooked
            ? Color.CULTURED
            : getSeatColor(price);
          return type === 'EMPTY_SPACE' ? (
            <View style={Styles.emptySpace}>
              <Text style={{fontSize: DP._11, color: Color.GREY_PURPLE}}>
                {index + 1}
              </Text>
            </View>
          ) : (
            <FlightSeat
              seatColor={seatColor}
              seatString={seatString}
              ifBooked={ifBooked}
              selected={selected}
              onSeatPress={(x) => {
                setToolTipPos({x, y: rowPositionRef.current[index]});
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={Styles.posRelative}>
      <ScrollView>{data.map(renderSeatRow)}</ScrollView>
      {!!toolTipPos && (
        <View style={Styles.toolTip(toolTipPos.x, toolTipPos.y)} />
      )}
    </View>
  );
};

export default SeatSelection;
