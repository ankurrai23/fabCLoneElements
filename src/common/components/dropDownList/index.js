import React from 'react';
import {View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import FText from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';

import TextField from '../textField';
import Styles from './Styles';
import Utils from '../../../utils/Utils';

export default function DropDownList({
  label,
  searchText,
  onChangeSearchText,
  _onBlur,
  _onFocus,
  error,
  searchResult,
  showSearch,
  onPressSearchItem,
}) {
  const renderSearchItem = ({item}) => {
    return (
      <FTouchableOpacity
        activeOpacity={1}
        style={Styles.searchItem}
        onPress={() => {
          console.log('On search item press - ', item);
          onPressSearchItem(item);
        }}>
        {item.icon && <View style={Styles.imgView}>{item.icon}</View>}
        <View style={Styles.renderItemView}>
          <FText type={'medium'} style={Styles.titleText}>
            {item.title}
            {item.subTitle && (
              <FText type={'light'} style={Styles.subTitleText}>
                {' ' + item.subTitle}
              </FText>
            )}
          </FText>
          <FText style={Styles.subHeadingText}>{item.subHeading}</FText>
        </View>
      </FTouchableOpacity>
    );
  };
  return (
    <View>
      <TextField
        label={label}
        value={searchText}
        onChangeText={onChangeSearchText}
        icon={<Icon name="search" size={DP._16} color={Color.BLACK} />}
        onBlur={_onBlur}
        onFocus={_onFocus}
        autoFocus
      />
      {error && <FText style={Styles.errorText}>{error}</FText>}
      {!error && showSearch && !!searchResult?.length && (
        <FlatList
          bounces={false}
          data={searchResult}
          renderItem={renderSearchItem}
          style={
            Utils.isPlatformIos()
              ? Styles.iosDropdownStyle
              : Styles.androidDropdownStyle
          }
          contentContainerStyle={
            Utils.isPlatformIos() ? Styles.iosContentContainerStyle : {}
          }
          keyboardShouldPersistTaps="always"
          keyExtractor={(index) => index}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
