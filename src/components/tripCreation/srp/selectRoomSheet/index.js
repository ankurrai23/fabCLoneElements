import {View} from 'react-native';
import React, {useState} from 'react';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import DialogBox from '../../../../common/components/dialogBox';
import Button from '../../../../common/components/button';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {dialogBoxStyle} from '../../../../utils/Utils';
import Styles from './Styles';
import {FlatList} from 'react-native-gesture-handler';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Separator from '../../../../common/components/separator';
import {Color} from '../../../../utils/color/index.travelPlus';
import Icon from '../../../../assets/icons/Icon';

const MAX_ADULTS_PER_ROOM = 3;
const MIN_ADULTS_PER_ROOM = 1;
const MAX_ROOMS = 6;
const MIN_ROOMS = 1;

const SelectRoomSheet = ({visible, onClose, roomData, onApply, onCancel}) => {
  const [roomState, setRoomState] = useState([...roomData]);
  const disableAddRoom = roomState.length === MAX_ROOMS;
  const disableRemoveRoom = roomState.length === MIN_ROOMS;

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
    const disabledMinusButton = item === MIN_ADULTS_PER_ROOM;
    const disabledPlusButton = item === MAX_ADULTS_PER_ROOM;

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
            style={Styles.addRemoveButtonStyle(disabledMinusButton)}
            onPress={onRemovePress}>
            <Icon.Minus
              stroke={disabledMinusButton ? Color.FORD_GRAY : Color.DODGER_BLUE}
            />
          </FTouchableOpacity>
          <FText style={Styles.adultCountText}>{item}</FText>
          <FTouchableOpacity
            style={Styles.addRemoveButtonStyle(disabledPlusButton)}
            onPress={onAddPress}>
            <Icon.Plus
              stroke={disabledPlusButton ? Color.FORD_GRAY : Color.DODGER_BLUE}
            />
          </FTouchableOpacity>
        </View>
      </View>
    );
  };

  const onApplyPress = () => {
    onApply([...roomState]);
  };

  return (
    <DialogBox
      modalVisible={visible}
      onClose={onClose}
      ContentModal={
        <>
          <View style={Styles.titleContainer}>
            <FText style={Styles.titleText}>
              {Strings.selectRoomAndTraveler}
            </FText>
          </View>
          <FlatList
            data={roomState}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <Separator style={Styles.separator} />
            )}
            style={dialogBoxStyle}
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
            <FTouchableOpacity onPress={onAddRoomPress}>
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
      }
    />
  );
};

export default SelectRoomSheet;
