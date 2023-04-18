import {View, FlatList} from 'react-native';
import React, {useRef} from 'react';
import Styles from './Styles';
import {DP} from '../../../../utils/Dimen';
import Icon from '../../../../assets/icons/Icon';
import FText from '../../../../common/rn/FText';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import {FLIGHT_ADD_ON_TYPES, formattedPrice} from '../../../../utils/Utils';
import {Strings} from '../../../../utils/strings/index.travelPlus';

const getSelectedInfo = (activeStoppage, activeAddOnType, info) => {
  let selectedInfo = info?.[activeAddOnType]?.[activeStoppage];
  if (activeAddOnType === FLIGHT_ADD_ON_TYPES.SEAT) {
    return selectedInfo?.seatInfo
      ? `${selectedInfo.seatInfo.code} ${formattedPrice(
          selectedInfo.seatInfo.price,
        )}`
      : null;
  } else if (activeAddOnType === FLIGHT_ADD_ON_TYPES.MEAL) {
    return selectedInfo?.mealInfos || selectedInfo?.nonLccMeals
      ? Strings.mealAdded
      : null;
  } else {
    return selectedInfo?.baggageInfos ? Strings.baggageAdded : null;
  }
};

const getSelectionPlaceholder = (activeAddOnType) => {
  if (activeAddOnType === FLIGHT_ADD_ON_TYPES.SEAT) {
    return Strings.selectSeat;
  } else if (activeAddOnType === FLIGHT_ADD_ON_TYPES.MEAL) {
    return Strings.selectMeal;
  } else {
    return Strings.selectBaggage;
  }
};

const TravellerSelection = ({
  travellersInfo,
  onClick,
  activeStoppage,
  activeAddOnType,
}) => {
  const flatListRef = useRef();
  const placeholder = getSelectionPlaceholder(activeAddOnType);
  const selectedIndex = travellersInfo.findIndex((e) => e.isSelected);
  const renderTraveller = ({item, index}) => {
    let info = getSelectedInfo(activeStoppage, activeAddOnType, item);
    return (
      <FTouchableOpacity
        style={Styles.travellerContainer(index === 0, item.isSelected)}
        onPress={() => {
          onClick(item.passengerId);
        }}>
        <View>
          <FText style={Styles.travellerName} numberOfLines={1}>
            {item.fullName}
          </FText>
          <FText
            style={Styles.selectedInfo(info)}
            weight={info ? 500 : 400}
            numberOfLines={1}>
            {info ?? placeholder}
          </FText>
        </View>

        <FTouchableOpacity
          hitSlop={{top: DP._4, bottom: DP._4, left: DP._4, right: DP._4}}
          style={Styles.removeIconContainer(info, item.isSelected)}
          onPress={() => onClick(item.passengerId, true)}>
          {!!info && <Icon.Trash width={DP._14} height={DP._14} />}
        </FTouchableOpacity>
      </FTouchableOpacity>
    );
  };

  if (selectedIndex >= 0) {
    setTimeout(() =>
      flatListRef?.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
        viewOffset: DP._16,
      }),
    );
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={travellersInfo}
        renderItem={renderTraveller}
        horizontal={true}
        contentContainerStyle={Styles.containerStyle}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        ref={flatListRef}
        onScrollToIndexFailed={(info) => {
          setTimeout(
            () =>
              flatListRef?.current?.scrollToIndex({
                animated: true,
                index: selectedIndex,
              }),
            100,
          );
        }}
      />
    </View>
  );
};

export default TravellerSelection;
