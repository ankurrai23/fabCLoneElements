import {View, FlatList} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import FText, {FONT_TYPE} from '../../rn/FText';
import TextField from '../textField';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import Styles from './Styles.js';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import Icon from '../../../assets/icons/Icon';

function DropDown(
  {
    data,
    label,
    onPress,
    onChangeText,
    keyword,
    style,
    onFocusChange,
    onPressClose,
    selectTextOnFocus,
    icon,
  },
  ref,
) {
  const inputFieldRef = useRef();

  useImperativeHandle(ref, () => ({
    blur: () => {
      inputFieldRef.current.blur();
    },
    focus: () => {
      inputFieldRef.current.focus();
    },
  }));

  const Item = ({
    entity: {title, subTitle, insideBracket, img},
    entity,
    index,
  }) => {
    return (
      <FTouchableOpacity
        onPress={() => onPress(entity, index)}
        style={Styles.cardStyle}>
        <View style={Styles.titleAndIconContainer}>
          {icon}
          <FText
            type={FONT_TYPE.BOLD}
            style={Styles.titleText}
            numberOfLines={1}>
            {title}
            {insideBracket ? (
              <FText type={FONT_TYPE.LIGHT}>{` (${insideBracket})`}</FText>
            ) : null}
          </FText>
        </View>
        <FText style={Styles.subText} numberOfLines={1}>
          {subTitle}
        </FText>
      </FTouchableOpacity>
    );
  };

  return (
    <View style={style}>
      <TextField
        label={label}
        icon={<Icon.Search width={DP._16} height={DP._16} />}
        rightIcon={
          !!keyword && (
            <FTouchableOpacity
              onPress={onPressClose}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Icon.Cross
                width={DP._16}
                height={DP._16}
                stroke={Color.BLUEY_GREY}
              />
            </FTouchableOpacity>
          )
        }
        labelStyle={Styles.labelStyle}
        inputStyle={Styles.inputStyle}
        value={keyword}
        onChangeText={onChangeText}
        autoFocus
        ref={inputFieldRef}
        selectTextOnFocus={selectTextOnFocus}
        onFocus={() => onFocusChange(true)}
        onBlur={() => onFocusChange(false)}
      />
      <View style={Styles.flatlistContainer(data?.length > 1)}>
        <FlatList
          data={data}
          renderItem={({item, index}) => <Item entity={item} index={index} />}
          contentContainerStyle={Styles.contentContainer}
          bounces={false}
          keyboardShouldPersistTaps="always"
        />
      </View>
    </View>
  );
}

export default forwardRef(DropDown);
