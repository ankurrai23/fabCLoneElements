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
  let selectedInfo = info?.activeAddOnType?.[activeStoppage];
  if (activeAddOnType === FLIGHT_ADD_ON_TYPES.SEAT) {
    return selectedInfo
      ? `${selectedInfo.seatInfo.code} ${formattedPrice(
          selectedInfo.seatInfo.price,
        )}`
      : null;
  } else if (activeAddOnType === FLIGHT_ADD_ON_TYPES.MEAL) {
    return selectedInfo ? Strings.mealAdded : null;
  } else {
    return selectedInfo ? Strings.baggageAdded : null;
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
          onClick(index);
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
          style={Styles.removeIconContainer(info, item.isSelected)}
          onPress={() => onClick(index, true)}>
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
      }),
    );
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={travellersInfo}
        renderItem={renderTraveller}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        ref={flatListRef}
        onScrollToIndexFailed={(info) => {
          setTimeout(
            () =>
              flatListRef?.current.scrollToIndex({
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
