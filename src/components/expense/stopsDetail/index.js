import React from 'react';
import {View, FlatList} from 'react-native';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import DashedLine from '../../../common/components/dashedLine';
import FText, {FONT_TYPE} from '../../../common/rn/FText';

import {Color} from '../../../utils/color';
import {DP} from '../../../utils/Dimen';

import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';

const Stop = ({item, index, showDash, dataLength}) => {
  return (
    <View>
      <View
        style={Styles.locationNameAndStopContainer(index === dataLength - 1)}>
        <View style={Styles.characterContainer(false)}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.character}>
            {String.fromCharCode(index + 65)}
          </FText>
        </View>
        <FText
          style={Styles.locationName()}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {item.name}
        </FText>
      </View>
      {showDash && (
        <View style={Styles.dashedLineContainer}>
          <DashedLine
            dashSize={DP._4}
            dashWidth={DP._1}
            dashColor={Color.TWILIGHT_BLUE}
          />
        </View>
      )}
    </View>
  );
};

const Card = ({data, onPress}) => {
  const CollapsedStops = ({showDash}) => {
    return (
      <View style={Styles.stopDetailContainer}>
        <View style={Styles.locationNameAndStopContainer(false)}>
          <View style={Styles.characterContainer(true)} />
          <FTouchableOpacity onPress={onPress}>
            <FText style={Styles.locationName(true)}>
              {Strings.stopsCount(data.length - 2)}
            </FText>
          </FTouchableOpacity>
        </View>
        {showDash && (
          <View style={Styles.dashedLineContainer}>
            <DashedLine
              dashSize={DP._4}
              dashWidth={DP._1}
              dashColor={Color.TWILIGHT_BLUE}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={[Styles.container]}>
      <Stop item={data[0]} index={0} showDash dataLength={data.length} />
      {data.length >= 3 ? (
        data.length > 3 ? (
          <CollapsedStops showDash={true} />
        ) : (
          <Stop item={data[1]} index={1} showDash />
        )
      ) : null}
      <Stop
        item={data[data.length - 1]}
        index={data.length - 1}
        dataLength={data.length}
      />
    </View>
  );
};

const List = ({data}) => {
  const renderItem = ({item, index}) => (
    <Stop
      item={item}
      index={index}
      showDash={index < data.length - 1}
      dataLength={data.length}
    />
  );

  return (
    <View style={Styles.listContainer}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        bounces={false}
        keyExtractor={(item, index) =>
          `${index}${String.fromCharCode(index + 65)}`
        }
      />
    </View>
  );
};

const StopsDetail = {
  Card,
  List,
};

export default StopsDetail;
