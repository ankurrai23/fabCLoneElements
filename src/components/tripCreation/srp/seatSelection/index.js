import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Styles from './Styles';
import Icon from '../../../../assets/icons/Icon';
import {Color} from '../../../../utils/color/index.travelPlus';
import {DP} from '../../../../utils/Dimen';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import Tooltip from './ToolTip';
const getSeatColor = (price) => {
  if (price === 0) return null;
  if (price <= 500) return Color.ICE_BLUE;
  if (price <= 1000) return Color.DIAMOND;
  if (price <= 1500) return Color.JORDY_BLUE;
  if (price > 1500) return Color.VERY_LIGHT_AZURE;
};

export const FlightSeat = ({seatString, seatColor, ifBooked, selected}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: seatColor,
        borderWidth: DP._0_5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Color.PALE_GREY_THREE,
        borderTopLeftRadius: DP._8,
        borderTopRightRadius: DP._8,
        marginLeft: DP._4,
        marginRight: DP._4,
        minHeight: DP._40,
        minWidth: DP._40,
        zIndex: -1,
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
    </View>
  );
};

const SeatSelection = ({data}) => {
  const renderSeatRow = ({item, index}) => {
    console.log({item});
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: DP._16,
          justifyContent: 'space-between',
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
            <View
              style={{
                minWidth: DP._48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: DP._11, color: Color.GREY_PURPLE}}>
                {index + 1}
              </Text>
            </View>
          ) : (
            <Tooltip>
              <FlightSeat
                seatColor={seatColor}
                seatString={seatString}
                ifBooked={ifBooked}
                selected={selected}
              />
            </Tooltip>
          );
        })}
      </View>
    );
  };
  return <FlatList data={data} renderItem={renderSeatRow} />;
};

export default SeatSelection;
