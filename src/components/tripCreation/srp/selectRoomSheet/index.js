import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import Button from '../../../../common/components/button';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {dialogBoxStyle} from '../../../../utils/Utils';
import Styles from './Styles';
import {FlatList} from 'react-native-gesture-handler';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Separator from '../../../../common/components/separator';
import {Color} from '../../../../utils/color/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';

const MAX_ADULTS_PER_ROOM = 4;
const MIN_ADULTS_PER_ROOM = 1;
const MAX_ROOMS = 6;
const MIN_ROOMS = 1;

const SelectRoomSheet = ({visible, roomData, onApply, onCancel}) => {
  const [roomState, setRoomState] = useState([]);
  const [error, setError] = useState('');
  const initialTravellerCount = roomData?.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0,
  );
  const finalTravellerCount = roomState.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0,
  );

  const allowAdd = finalTravellerCount < initialTravellerCount;
  const disableAddRoom = roomState.length === MAX_ROOMS || !allowAdd;
  const disableRemoveRoom = roomState.length === MIN_ROOMS;

  useEffect(() => {
    setError('');
    if (roomData) {
      setRoomState([...roomData]);
    }
  }, [roomData, visible]);

  const onRemoveRoomPress = () => {
    if (roomState.length > MIN_ROOMS) {
      setRoomState((prevState) => prevState.slice(0, prevState.length - 1));
    }
  };
  const onAddRoomPress = () => {
    if (roomState.length < MAX_ROOMS) {
      setRoomState((prevState) => prevState.concat(MIN_ADULTS_PER_ROOM));
    }
  };

  const onAdultCountChange = (item, index, action) => {
    setRoomState((prevState) =>
      prevState.map((entity, itemIndex) => {
        if (itemIndex === index) {
          if (action === 'add') return item + 1;
          if (action === 'subtract') return item - 1;
        } else {
          return entity;
        }
      }),
    );
  };

  const renderItem = ({item, index}) => {
    const disableMinusButton = item === MIN_ADULTS_PER_ROOM;
    const disablePlusButton = item === MAX_ADULTS_PER_ROOM || !allowAdd;

    const onAddPress = () => {
      if (item < MAX_ADULTS_PER_ROOM) {
        onAdultCountChange(item, index, 'add');
      }
    };
    const onRemovePress = () => {
      if (item > MIN_ADULTS_PER_ROOM) {
        onAdultCountChange(item, index, 'subtract');
      }
    };
    return (
      <View style={Styles.roomInfoContainer}>
        <View>
          <FText style={Styles.roomTitle}>{Strings.roomNo(index + 1)}</FText>
          <FText style={Styles.noOfAdultsText}>
            {Strings.selectNoOfAdults}
          </FText>
        </View>
        <View style={Styles.addRemoveAdultsContainer}>
          <FTouchableOpacity
            style={Styles.addRemoveButtonStyle(disableMinusButton)}
            onPress={onRemovePress}>
            <Icon.Minus
              stroke={disableMinusButton ? Color.FORD_GRAY : Color.DODGER_BLUE}
            />
          </FTouchableOpacity>
          <FText style={Styles.adultCountText}>{item}</FText>
          <FTouchableOpacity
            disabled={disablePlusButton}
            style={Styles.addRemoveButtonStyle(disablePlusButton)}
            onPress={onAddPress}>
            <Icon.Plus
              stroke={disablePlusButton ? Color.FORD_GRAY : Color.DODGER_BLUE}
            />
          </FTouchableOpacity>
        </View>
      </View>
    );
  };

  const onApplyPress = () => {
    const remaining = initialTravellerCount - finalTravellerCount;
    if (remaining) {
      setError(Strings.travellerError(remaining));
    } else {
      setError('');
      onApply([...roomState]);
    }
  };

  return (
    <>
      <View style={Styles.titleContainer(error)}>
        <FText style={Styles.titleText}>
          {Strings.selectRoomForTraveler(initialTravellerCount)}
        </FText>
        {!!error && <FText style={Styles.subTitle}>{error}</FText>}
      </View>
      <FlatList
        data={roomState}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator style={Styles.separator} />}
        style={dialogBoxStyle(0.4)}
      />
      <Separator style={Styles.separator} />
      <View style={Styles.addRemoveRoomButtonContainer}>
        <FTouchableOpacity onPress={onRemoveRoomPress}>
          <FText
            style={Styles.removeRoomText(disableRemoveRoom)}
            type={FONT_TYPE.MEDIUM}>
            {Strings.removeRoom}
          </FText>
        </FTouchableOpacity>
        <FTouchableOpacity disabled={disableAddRoom} onPress={onAddRoomPress}>
          <FText
            style={Styles.addRoomText(disableAddRoom)}
            type={FONT_TYPE.MEDIUM}>
            {Strings.addRoom}
          </FText>
        </FTouchableOpacity>
      </View>
      <Separator style={Styles.separator} />
      <View style={Styles.buttonContainer}>
        <Button
          onPress={onCancel}
          textFont={FONT_TYPE.MEDIUM}
          style={Styles.cancelButton}
          textStyle={Styles.cancelText}>
          {Strings.cancel}
        </Button>
        <Button
          onPress={onApplyPress}
          style={Styles.applyButton}
          textStyle={Styles.applyText}
          textFont={FONT_TYPE.MEDIUM}>
          {Strings.apply}
        </Button>
      </View>
    </>
  );
};

export default SelectRoomSheet;
