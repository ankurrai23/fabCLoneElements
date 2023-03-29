import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {DP} from '../../../../utils/Dimen';
import Icon from '../../../../assets/icons/Icon';
import FText from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
const TravellerSelection = ({
  selectionPlaceHolder,
  travellersInfo,
  onClick,
}) => {
  const renderTraveller = ({item, index}) => {
    return (
      <FTouchableOpacity
        style={Styles.travellerContainer(index === 0, item.isSelected)}
        onPress={() => {
          onClick(index);
        }}>
        <View>
          <FText style={Styles.travellerName} numberOfLines={1}>
            {item.travellerName}
          </FText>
          <FText
            style={Styles.selectedInfo(item.selectedData)}
            weight={item.selectedData ? 500 : 400}
            numberOfLines={1}>
            {item.selectedData ? item.selectedData : selectionPlaceHolder}
          </FText>
        </View>

        <FTouchableOpacity
          style={Styles.trashCanContainer(item.selectedData, item.isSelected)}
          onPress={
            item.selectedData
              ? () => {
                  onClick(index, true);
                }
              : null
          }>
          {!!item.selectedData && <Icon.Trash width={DP._14} height={DP._14} />}
        </FTouchableOpacity>
      </FTouchableOpacity>
    );
  };
  return (
    <View style={Styles.container}>
      <FlatList
        data={travellersInfo}
        renderItem={renderTraveller}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

export default TravellerSelection;
